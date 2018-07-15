// Imports

// App Imports
import {
  APPS_GET_LIST_REQUEST,
  APPS_GET_LIST_RESPONSE,
  APPS_GET_LIST_FAILURE,
  APPS_GET_REQUEST,
  APPS_GET_RESPONSE,
  APPS_GET_FAILURE,
} from './actions'

// Thoughts list

// Initial State
const appsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const apps = (state = appsInitialState, action) => {
  switch (action.type) {
    case APPS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case APPS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case APPS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}


// Single app

// Initial State
const appInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const app = (state = appInitialState, action) => {
  switch (action.type) {
    case APPS_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case APPS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case APPS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}