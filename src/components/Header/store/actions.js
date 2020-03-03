import axios from 'axios'
import {
  CHANGE_LOGIN
} from './constants'

const instance = axios.create({
  baseURL: 'http://localhost:3000/user/ssr'
})

export const changeLogin = value => ({
  type: CHANGE_LOGIN,
  value
})


export const login = () => {
  return dispatch => {
    instance.post('/login', {
      user: 'Lee',
      pwd: '123'
    }).then(res => {
      dispatch(changeLogin(true))
    })
  }
}

export const logout = () => {
  return dispatch => {
    instance.get('/logout').then(res => {
      dispatch(changeLogin(false))
    })
  }
}

export const getHeaderInfo = () => {
  return dispatch => {
    return instance.get('/isLogin').then(res => {
      console.log(res.data)
      dispatch(changeLogin(res.data.data.login))
    })
  }
}
