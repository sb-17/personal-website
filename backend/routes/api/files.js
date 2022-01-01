const express = require('express');
const router = express.Router();
const app = express();
const multer = require('multer');

const path = require('path');

const File = require('../../models/File');

const auth = require('./auth');

app.use('/auth', auth.router);

const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, './files');
      },
      filename(req, file, cb) {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
      }
    }),
    limits: {
      fileSize: 100000000 // 100mb
    },
    fileFilter(req, file, cb) {
      cb(undefined, true);
    }
  });
  
router.post(
    '/upload',
    upload.single('file'),
    async (req, res) => {
        try {
            const { path, mimetype } = req.file;
            const data = {
                projectTitle: req.body.projectTitle,
                version: req.body.version,
                file_path: path,
                file_mimetype: mimetype
            };
            File.create(data);
            res.send('file uploaded successfully.');
        } catch (error) {
            res.status(400).send('Error while uploading file. Try again later.');
        }
    },
    (error, req, res, next) => {
        if (error) {
        res.status(500).send(error.message);
        }
    }
);

router.get('/getAllFiles', async (req, res) => {
  try {
    const files = await File.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res.status(400).send('Error while getting list of files. Try again later.');
  }
});

router.get('/download/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.set({
      'Content-Type': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '../..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

router.get('/download/:projectTitle/:version', async (req, res) => {
  try {
    const file = await File.findOne({ projectTitle: req.params.projectTitle, version: req.params.version});
    res.set({
      'Content-Type': file.file_mimetype,
      'Path': file.file_path,
      'Mimetype': file.file_mimetype
    });
    res.sendFile(path.join(__dirname, '../..', file.file_path));
  } catch (error) {
    res.status(400).send('Error while downloading file. Try again later.');
  }
});

module.exports = router;