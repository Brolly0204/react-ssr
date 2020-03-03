import {
  CHANGE_LIST
} from './constant'
// import clientAxios from '../../../client/request'
// import serverAxios from '../../../server/request'

const changeList = list => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  // https://www.fastmock.site/mock/72b66a20d8505aca03f66ce225ee69db/api/ssr/data
  // const request = server ? serverAxios : clientAxios

  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/ssr/data')
      .then(res => {
        const {
          data
        } = res.data
        dispatch(changeList(data))
      })
  }
}
