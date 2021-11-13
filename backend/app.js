const express = require('express');
var cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const projects = require('./routes/api/projects');
const auth = require('./routes/api/auth');

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

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/projects', projects);
app.use('/api/auth', auth.router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}
else {
  app.get('/', (req, res) => {
    res.send("development");
  });
}

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));