const GraphQLString = require('graphql');
const postGraphQLType = require('../types/postType');
const Post = require('../../models/posts');


module.exports = {

    type: postGraphQLType,
    args: {
        title: { type: GraphQLString },
        creation_date: { type: GraphQLString },
        creator: { type: GraphQLString },
        text: { type: GraphQLString }
    },
    resolve(parent, args) {
        const newPost = new Post({
            title: args.title,
            creation_date: args.creation_date,
            creator: args.creator,
            text: args.text,
        })

        return newPost.save();
    }
};
