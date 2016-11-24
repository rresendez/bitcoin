// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

  module.exports = function(app){

    // server routes
    // handle things like api calls
    //authentication routes

    //sample api routes
    app.get('/api/nerds', function(req, res){
      // use mongoose to get all nerds ins the database
      Nerd.find(function(err, nerds){
        if(err)
          res.send(err);

          res.json(nerds);
      });
    });
    // route to handle creating goes here
    // route to habdle delete goes here

    // frontend routes
    // routes to habdle all angular requests

    app.get('*', function (req, res){
      res.sendfile('./public/views/index.html');

    });

  };
