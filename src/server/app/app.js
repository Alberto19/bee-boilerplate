require('ignore-styles');
require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['react-app'] });

const compression = require('compression');
const express = require('express');
// const path = require('path');

const app = express();

// Support Gzip
app.use(compression());

// Serve static assets
app.use(express.static('build'));

// Always return the main index.html, so react-router render the route in the client
const universalLoader = require('./universal')
app.use('/', universalLoader);

module.exports = app;
