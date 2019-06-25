const { GraphQLObjectType } =  require('graphql');
const queryAllPosts = require('./queryAllPosts');
const queryPostById = require('./queryPostById');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
      queryAllPosts,
      queryPostById
  }
});

module.exports = RootQuery;