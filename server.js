/**
 * Module dependencies.
 */
const express = require('express');
const passport = require('passport');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
var onHeaders = require('on-headers');
var morgan = require('morgan');


/**
 * Load environment variables from .env file, where API keys and passwords are configured only if NODE_ENV var is set to production.
 */
dotenv.config({
  silent: process.env.NODE_ENV === 'production'
});
dotenv.load({
  path: '.env'
});

/**
 * Passport configuration module for strategies
 */
const passportConfig = require('./config/passport');

/**
 * Controllers (route handlers).
 */
const api = require('./api/api');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shretit', {useNewUrlParser: true});
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});
mongoose.connection.on('open', function() {
  // mongoose.connection.db.admin().serverStatus(function(error, info) {
  //   console.log(info.version);
  // });
});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(helmet())
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
    app.use(function(req, res, next) {
   console.log(req.headers);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
             "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  next();
});

/**
 * API examples routes.
 */
app.use('/api/v1', api);

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler())
}

/**
 * Catch all the routes and give back the Angular app
 */

  app.use("/admin", express.static(__dirname + "/admin"));

app.use("/distributor", express.static(__dirname + "/dist"));
app.get('/admin', function(req, res) {
    res.sendFile('./public/index.html');
  });
app.get('/distributor', function(req, res) {
    res.sendFile('./dist/index.html');
  });




/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});
module.exports = app;
