// app.js

// (c)2016 - Christiaan van Steenbergne - ReClick.nl

// PACKAGES
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

// CONFIG
// Bodyparser() for API POSTING
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// ROUTES

router.get('/', function(req, res){
  res.json({ message: 'You are connected to our API!' });
});

// BIND OUR ROUTES to API
app.use('/api', router);


//app.get('/listTodo', function (req, res) {
//   fs.readFile( __dirname + "/" + "todo.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//   });
//})

// START THE SERVER
app.listen(3000, function(){
  console.log('App listening on port 3000!');
});
