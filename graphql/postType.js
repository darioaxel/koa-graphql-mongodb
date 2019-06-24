const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    creation_date: { type: GraphQLString },
    creator: { type: GraphQLString },
    text: { type: GraphQLString }
  })
});

module.exports = PostType;