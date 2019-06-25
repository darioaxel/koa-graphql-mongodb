const GraphQLString = require('graphql');
const postGraphQLType = require('../types/postType');
const Post = require('../../models/posts');


module.exports = {
    type: postGraphQLType,
    args: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        creation_date: { type: GraphQLString },
        creator: { type: GraphQLString },
        text: { type: GraphQLString }
    },
    resolve(parent, args) {
        return Post.findById(args.id)
            .then(post => {
                post.name = args.name,
                    post.release_date = args.release_date,
                    post.by_company = args.by_company,
                    post.price = args.price
                return post.save()
            })
            .then(updatedPost => updatedPost)
            .catch(err => console.log(err))
        return newPost.save();
    }
};