const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json())

app.use(bodyParser.urlencoded({extended: false}))

// Set up static router
app.use('/static', express.static('public'));

// Use pug
app.set('view engine', 'pug');

// Set up routes
const routeIndex = require('./routes/index')
const routeProject = require('./routes/projects');
const routeAbout = require('./routes/about')
app.use(routeIndex);
app.use(routeProject);
app.use(routeAbout);

// Error handling
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.locals.error = err;
       
    if (err.status === undefined) {
        err.status = 500
        err.message = "Whoops... the page you're looking for can't be found (Error 500)"
        res.status(err.status)
        res.render('error');
    } else {
        err.message = "Whoops... the page you're looking for can't be found (Error 404)"
        res.status(err.status)
        res.render('page-not-found');
    }
    
  })

app.listen(3000, () => {
    console.log('The app is running on localhost:3000')
});