const { GraphQLList } =  require('graphql');
const postGraphQLType = require('../types/postType');
const Post = require('../../models/posts');

module.exports = {
  type: new GraphQLList(postGraphQLType),
  args: {},
  resolve() {
    return Post.find({})
  }
};