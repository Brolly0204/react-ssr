import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import {
  reducer as headerReducer
} from '../components/Header/store'
import {
  reducer as homeReducer
} from '../containers/Home/store'
import {
  reducer as translationReducer
} from '../containers/Translation/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
})

// 服务端store
export const getStore = (data) => createStore(
  reducer, {
    header: data
  },
  applyMiddleware(thunk.withExtraArgument(serverAxios))
)

// 客户端store
export const getClientStore = () => {
  const defaultState = window.context.STATE
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  )
}
