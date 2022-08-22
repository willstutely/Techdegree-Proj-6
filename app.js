/**
 * Set up the Express framework and relevant modules
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Enable the reading of json files so as to be able to access data.json
app.use(express.json())

app.use(bodyParser.urlencoded({extended: false}))

// Set up static router
app.use('/static', express.static('public'));

// Use pug
app.set('view engine', 'pug');

/**
 * Route Handlers
 */
const routeIndex = require('./routes')
const routeProject = require('./routes/projects');
const routeAbout = require('./routes/about')
app.use(routeIndex);
app.use(routeProject);
app.use(routeAbout);

/**
 * Error handling
 */

// Create an error object and pass it into the next() function
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// Determine which error message to display based on the status code  
app.use((err, req, res, next) => {
res.locals.error = err;
if (err.status === undefined) {
    err.status = 500
    err.message = "Whoops... there was a problem handling your request (Error 500)"
    console.log(err.message);
    res.status(err.status)
    res.render('error');
} else {
    err.message = "Whoops... the page you're looking for can't be found (Error 404)"
    console.log(err.message);
    res.status(err.status)
    res.render('page-not-found');
}
})

/**
 * Set up localhost on port 3000
 */
app.listen(3000, () => {
    console.log('The app is running on localhost:3000')
});