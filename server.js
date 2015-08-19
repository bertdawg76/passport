'use strict';

//#####################################################
//Dependencies:
//#####################################################
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local').Strategy;

//#####################################################
//Config files:
//#####################################################
var configDB = require('./config/database.js');

//#####################################################
//Controllers:
//#####################################################
var userCtrl = require('./controllers/userCtrl.js');

//#####################################################
//Express:
//#####################################################
var app = express();

//#####################################################
//Express Server Port:
//#####################################################
var port = process.argv[2] || 3000;

//#####################################################
//Middelware:
//#####################################################
app.use('/', bodyParser.json());
app.use('/', cors());

/* Middelware to render all of our public files. Any files of
the public folder will be renderd if you use them*/
app.use(express.static(__dirname + '/public'));

//#####################################################
//Routes:
//#####################################################

//#####################################################
//Starting server:
//#####################################################
app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log('Listening on port: ' + port);
	}
});

//#####################################################
//Connection to database:
//#####################################################
mongoose.connect(configDB.uri, function(err) {
	if (err) {
		console.log('Connection to MongoDB failed');
	} else {
		console.log('Connected to MongoDB at: ', configDB.uri);
	}
}); 