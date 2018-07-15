// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as thought from './thoughts/fields/query';
import * as app from './apps/fields/query'

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...thought,
    ...app
  })
})

export default query