import {
  Router
} from 'express'
import translations from './translations.json'

const router = Router()
router.post('/login', (req, res) => {
  const {
    user,
    pwd
  } = req.body
  if (user === 'Lee' && pwd === '123') {
    res.cookie('token', user, {
      maxAge: 3600 * 1000
    })
    res.send({
      success: true,
      data: {
        login: true
      }
    })
  } else {
    res.clearCookie('token')
    res.send({
      success: true,
      data: {
        login: false
      }
    })
  }
})

router.get('/logout', (req, res) => {
  res.clearCookie('token')
  res.send({
    success: true,
    data: {
      logout: true
    }
  })
})

router.get('/isLogin', (req, res) => {
  const {
    token
  } = req.cookies
  if (token) {
    res.send({
      success: true,
      data: {
        login: true
      }
    })
  } else {
    res.send({
      success: true,
      data: {
        login: false
      }
    })
  }
})

router.get('/translation', (req, res) => {
  const {
    token = global.token
  } = req.cookies
  if (token) {
    res.send({
      success: true,
      data: translations
    })
  } else {
    res.send({
      success: false,
      data: null,
      msg: '未登录'
    })
  }
})

export default router
