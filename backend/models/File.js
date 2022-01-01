const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  file_path: {
    type: String,
    required: true
  },
  file_mimetype: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

module.exports = File = mongoose.model('file', FileSchema);