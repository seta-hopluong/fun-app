// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// Thought type
const ThoughtType = new GraphQLObjectType({
  name: 'app',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    description: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default ThoughtType