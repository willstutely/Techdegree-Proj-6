const express = require('express');
const router = express.Router();

// Middleware to render about.pug for the '/about' route
router.get('/about', (req, res) => {
    res.render('about')
});

module.exports = router;