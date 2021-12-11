const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  published_date: {
    type: String,
    required: true
  },
  project: {
    type: String,
    required: true
  }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);