import {
  CHANGE_LIST
} from './constants'

const defaultState = {
  translationList: []
}

/* eslint-disable */
export default function(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        translationList: action.list
      }
    default:
      return state
  }
}
