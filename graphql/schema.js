const { buildSchema } = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const postGraphQLType =  require('./postType');
const Post = require('../models/post');

// Initial schema needed by GraphQL

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: postGraphQLType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Post.findById(args.id)
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery
});