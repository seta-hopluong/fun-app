// Imports
import {GraphQLInt, GraphQLList} from 'graphql'

// App Imports
import AppType from '../type'
import {getAll, getById} from '../resolvers'

// Apps All
export const apps = {
  type: new GraphQLList(AppType),
  resolve: getAll
}

// Thought By ID
export const app = {
  type: AppType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: getById
}