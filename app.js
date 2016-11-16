var express = require('express');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');

app.get('/', function(req, res){
  res.send("Hello World");
});

app.get('/listTodo', function (req, res) {
   fs.readFile( __dirname + "/" + "todo.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
