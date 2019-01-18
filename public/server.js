const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

// create the Express App
const app = express()

// create Middleware to handle the serving of the app
app.use("/", serveStatic(path.join(__dirname, '/public')));

// Serve Index by default
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

// create default Port to serve the app on
const port = process.env.PORT || 5000

// Start Server
app.listen(port)

// Log to feedback that this code is actually running
console.log('Server start on port' + port)

/*
'use strict';

const express = require('express'),
serveStatic = require('serve-static'),
path = require('path');

// Instantiate the Express App
const app = express();

// create Middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname, '/public')));

// Serve Index by default
app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});

// create default Port to serve the app on
const port = process.env.PORT || 5000;

// Start Server
app.listen(port, () => {

// Log to feedback that this code is actually running
console.log(`Server start on port ${port}...`);
});
*/