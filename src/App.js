import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
// import {
//   actions
// } from './components/Header/store'

const App = ({ route, staticContext }) => {
  return (
    <div>
      <Header staticContext={staticContext} />
      {renderRoutes(route.routes)}
    </div>
  )
}

// App.loadData = (store) => {
//   console.log('store')
//   return store.dispatch(actions.getHeaderInfo())
// }

export default App
