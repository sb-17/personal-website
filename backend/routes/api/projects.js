const express = require('express');
const router = express.Router();
const app = express();

const Project = require('../../models/Project');

const auth = require('./auth');

app.use('/auth', auth.router);

router.get('/', (req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(404).json({ noprojectsfound: 'No Projects found' }));
});

router.get('/:id', (req, res) => {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(404).json({ noprojectfound: 'No Project found' }));
});

router.post('/', (req, res) => {
  const token = req.headers.authorization;
  const authorization = auth.auth(token);

  if (authorization) {
    Project.create(req.body)
      .then(project => res.json({ msg: 'Project added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this project' }));
  }
});

router.put('/:id', (req, res) => {
  const token = req.headers.authorization;
  const authorization = auth.auth(token);

  if (authorization) {
    Project.findByIdAndUpdate(req.params.id, req.body)
      .then(project => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  }
});

router.delete('/:id', (req, res) => {
  const token = req.headers.authorization;
  const authorization = auth.auth(token);

  if (authorization) {
    Project.findByIdAndRemove(req.params.id, req.body)
      .then(project => res.json({ mgs: 'Project entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such a project' }));
  }
});

module.exports = router;