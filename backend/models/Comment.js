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
    type: String
  }
});

module.exports = Comment = mongoose.model('project', CommentSchema);