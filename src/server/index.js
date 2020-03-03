import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import cookieParser from 'cookie-parser'
import { render } from './utils'
import { getStore } from '../store'
import routes from '../routes'
import appServer from './appServer'

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.static('public'))

app.use('/user/ssr', appServer)
app.use(
  '/api',
  proxy('https://www.fastmock.site', {
    proxyReqPathResolver(req) {
      return `/mock/72b66a20d8505aca03f66ce225ee69db/api${req.url}`
    }
  })
)

app.get('*', (req, res) => {
  const { token } = req.cookies
  global.token = token

  const store = getStore({
    login: !!token
  })

  const promises = []
  const matchedRoutes = matchRoutes(routes, req.path)
  matchedRoutes.forEach(item => {
    if (item.route && item.route.loadData) {
      const promise = new Promise(resolve =>
        item.route
          .loadData(store)
          .then(resolve)
          .catch(resolve)
      )
      promises.push(promise)
    }
  })

  const context = { css: [] }
  Promise.all(promises).then(() => {
    const html = render(store, routes, req, context)
    if (context.action === 'REPLACE') {
      res.redirect(302, context.url)
    } else if (context.NOTFOUND) {
      res.status(404)
      res.send(html)
    } else {
      res.send(html)
    }
  })

  // res.send(render(store, routes, req))
})

app.listen(3000)
