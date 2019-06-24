const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/
const PostSchema = new Schema({
  title: String,
  creation_date: Date,
  creator: String,
  text: String,
});

module.exports = mongoose.model('Post', PostSchema);