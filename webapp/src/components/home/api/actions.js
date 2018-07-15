// Imports
import axios from 'axios'

// App Imports
import {routesApi} from '../../../setup/routes'
import {queryBuilder} from '../../../setup/helpers'

// Actions Types
export const APPS_GET_LIST_REQUEST = 'APPS/GET_LIST_REQUEST'
export const APPS_GET_LIST_RESPONSE = 'APPS/GET_LIST_RESPONSE'
export const APPS_GET_LIST_FAILURE = 'APPS/GET_LIST_FAILURE'
export const APPS_GET_REQUEST = 'APPS/GET_REQUEST'
export const APPS_GET_RESPONSE = 'APPS/GET_RESPONSE'
export const APPS_GET_FAILURE = 'APPS/GET_FAILURE'

// Actions

// Get list of apps
export function getList(isLoading = true) {
  return dispatch => {
    dispatch({
      type: APPS_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, queryBuilder({
      type: 'query',
      operation: 'apps',
      fields: ['id', 'name', 'description']
    }))
      .then((response) => {
        dispatch({
          type: APPS_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.apps
        })
      })
      .catch((error) => {
        dispatch({
          type: APPS_GET_LIST_FAILURE,
          error: error
        })
      })
  }
}

// Get single app
export function get(id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: APPS_GET_REQUEST,
      isLoading
    })

    return axios.post(routesApi, queryBuilder({
      type: 'query',
      operation: 'app',
      data: {id: parseInt(id, 10)},
      fields: ['id', 'name', 'description']
    }))
      .then((response) => {
        dispatch({
          type: APPS_GET_RESPONSE,
          error: null,
          item: response.data.data.app
        })
      })
      .catch((error) => {
        dispatch({
          type: APPS_GET_FAILURE,
          error: error
        })
      })
  }
}

// Create app
export function create(data) {
  return dispatch => {
    return axios.post(routesApi, queryBuilder({type: 'mutation', operation: 'appCreate', data, fields: ['id']}))
  }
}

// Remove app
export function remove(data) {
  return dispatch => {
    return axios.post(routesApi, queryBuilder({type: 'mutation', operation: 'appRemove', data, fields: ['id']}))
  }
}
