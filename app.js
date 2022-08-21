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
app.use(routeIndex)
app.use(routeProject)



// Error handling
// app.use((req, res, next) => {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });


app.listen(3000, () => {
    console.log('The app is running on localhost:3000')
});