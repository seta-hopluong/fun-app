// Imports
import {GraphQLString, GraphQLInt} from 'graphql'

// App Imports
import AppType from '../type'
import {create, remove} from '../resolvers'

// App create
export const appCreate = {
  type: AppType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// App remove
export const appRemove = {
  type: AppType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}