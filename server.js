// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3002;

var flash    = require('connect-flash');
var logger   = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var back = require('express-back');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var fs = require('fs');


app.use(express.static(__dirname + '/public'));




// configuration ===============================================================

var env = process.env.NODE_ENV || 'development';

if ('development' == env) {

	// set up our express application
	app.use(logger('dev')); // log every request to the console
	app.use(cookieParser()); // read cookies (needed for auth)
	app.use(bodyParser.urlencoded({
        extended : false
    })); // get information from html forms
  app.use(bodyParser.json());
  app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(session({
        secret: 'iamthewalrus',
        resave:  true,
        saveUninitialized: true

    })); // session secret
  app.use(back());

	app.use(flash()); // use connect-flash for flash messages stored in session

};

// routes ======================================================================
require('./app/routes/main.js')(app);
require('./app/routes/videos.js')(app);
require('./app/routes/downloads.js')(app);


// launch ======================================================================
http.listen(port);
console.log('H2O up : ' + port);
