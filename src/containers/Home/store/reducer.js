import {
  CHANGE_LIST
} from './constant'

const defaultState = {
  newList: []
}

/* eslint-disable */
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        newList: [...action.list]
      }
    default:
      return state
  }
}
