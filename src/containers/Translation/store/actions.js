import axios from 'axios'
import { CHANGE_LIST } from './constants'

const instance = axios.create({
  baseURL: 'http://localhost:3000/user/ssr'
})

export const changeList = list => ({
  type: CHANGE_LIST,
  list
})

export const getTranslationList = () => {
  return dispatch =>
    instance.get('/translation').then(res => {
      if (res.data.success) {
        dispatch(changeList(res.data.data))
      }
    })
}
