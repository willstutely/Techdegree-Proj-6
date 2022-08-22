const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

// Middleware to render index.pug for the '/' route
router.get('/', (req, res) => {
    res.render('index', {projects})
});

module.exports = router;