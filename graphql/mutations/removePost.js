const GraphQLString = require('graphql');
const postGraphQLType = require('../types/postType');
const Post = require('../../models/posts');


module.exports = {
    type: postGraphQLType,
    args: {
        id: { type: GraphQLString }
    },
    resolve(parent, args) {
        return Post.findOneAndDelete(args.id)
            .then(post => post.remove())
            .then(deletedPost => deletedPost)
            .catch(err => console.log(err))
    }
};
