const { GraphQLString } =  require('graphql');
const postGraphQLType = require('../types/postType');
const Post = require('../../models/posts');

module.exports = {
  type: postGraphQLType,
  args: { id: { type: GraphQLString }},
  resolve(parent, args) {
    return Post.findById(args.id)
  }
};