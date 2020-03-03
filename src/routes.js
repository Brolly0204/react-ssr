import App from './App'
import Home from './containers/Home'
import Translation from './containers/Translation'
import NotFound from './containers/NotFound'

export default [{
  path: '/',
  component: App,
  exact: false,
  routes: [{
    path: '/',
    component: Home,
    exact: true,
    key: 'Home',
    loadData: Home.loadData
  }, {
    path: '/translation',
    component: Translation,
    exact: true,
    key: 'Translation',
    loadData: Translation.loadData
  }, {
    component: NotFound
  }]
}]
