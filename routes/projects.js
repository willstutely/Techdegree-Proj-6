const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// Middleware to render project.pug for the project specific route
router.get('/projects/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );
    res.render('project', {project})
});

module.exports = router;

