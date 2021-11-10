const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  language: {
    type: String
  },
  sourcecode: {
    type: String
  },
  download: {
    type: String
  },
  published_date: {
    type: String
  },
  status: {
    type: String
  }
});

module.exports = Project = mongoose.model('project', ProjectSchema);