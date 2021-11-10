const express = require('express');
var cors = require('cors');

const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const projects = require('./routes/api/projects');

const app = express();

mongoose.connect(
  process.env.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.use('/api/projects', projects);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));