// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as thought from './thoughts/fields/mutations';
import * as app from './apps/fields/mutations';

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...thought,
    ...app
  }
})

export default mutation
