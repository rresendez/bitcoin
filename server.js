// server.js

// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration

//config files

var db = require('./config/db');

// set our port

var port = process.env.PORT || 8000;

// conect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json

app.use(bodyParser.json());

// parse application/vnd.
app.use(bodyParser.urlencoded({ extended: true}));
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set static files
app.use(express.static(__dirname + '/public'));

// routes
require('./app/routes')(app);

//start app
//startup our app at localhost
app.listen(port);

// shotout to the user

console.log("magic happens on port"+ port);
//expose app

exports = module.exports = app;
