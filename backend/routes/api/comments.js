const express = require('express');
const router = express.Router();
const app = express();

const Comment = require('../../models/Comment');

const auth = require('./auth');

app.use('/auth', auth.router);

router.get('/:id', (req, res) => {
    Comment.find({ "project": req.params.id })
        .then(comments => res.json(comments))
        .catch(err => res.status(404).json({ noprojectsfound: 'No Comments found' }));
});

router.post('/:id', (req, res) => {
    const token = req.headers.authorization;
    const authorization = auth.auth(token);

    if (authorization) {
        const data = {
            description: req.body.description,
            author: req.body.author,
            project: req.params.id,
            published_date: req.body.published_date
        }

        Comment.create(data)
            .then(comment => res.json({ msg: 'Comment added successfully' }))
            .catch(err => res.status(400).json({ error: 'Unable to add this comment' }));
    }
});

router.delete('/:id', async (req, res) => {
    const token = req.headers.authorization;
    const authorization = auth.auth(token);

    const currentComment = await Comment.find({ "project": req.params.id, "author": req.body.author, "published_date": req.body.published_date, "description": req.body.description });
    const commentdata = JSON.parse(JSON.stringify(currentComment[0]));
    console.log(commentdata.description);

    if (authorization.username === commentdata.author) {
        Comment.findOneAndRemove({ "project": req.params.id, "author": req.body.author, "published_date": req.body.published_date, "description": req.body.description })
            .then(comment => res.json({ mgs: 'Comment deleted successfully' }))
            .catch(err => res.status(404).json({ error: 'No such a comment' }));
    }
});

module.exports = router;