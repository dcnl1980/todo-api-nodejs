// app.js

// (c)2016 - Christiaan van Steenbergne - ReClick.nl

// PACKAGES
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

var app = express();
var router = express.Router();

// INCLUDE
var Todo = require('./todo');

// CONFIG
// Bodyparser() for API POSTING
router.use(bodyParser.urlencoded({ extended: true })); 
router.use(bodyParser.json());
// MongoDB database connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.17.0.1/test');

// ROUTES
router.use(function(req, res, next) {
    // do logging
    var post_data = req.body;
    console.log('Something is happening.');
    console.log(post_data);
    next(); 
});

router.get('/', function(req, res){
  res.json({ message: 'You are connected to our API!' });
});

// ROUTES FOR OUR TODO APP
router.route('/todo')

    // create a todo (accessed at POST /api/todo)
    .post(function(req, res) {
        
        var todo = new Todo();      
        todo.name = req.body.name;
	console.log(req.body.name);

        todo.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Todo created!' });
        });
    })
        
    // list a todo (accessed at GET /api/todo)
    .get(function(req, res) {
   	Todo.find(function(err, todo) {
	    if (err)
		res.send(err);

	    res.json(todo);
        });
    });

router.route('/todo/:todo_id')

    // getting a single todo
    .get(function(req, res) {
        Todo.findById(req.params.todo_id, function(err, todo) {
            if (err)
                res.send(err);
            res.json(todo);
        });
    })

    // update a single todo
    .put(function(req, res) {
        Todo.findById(req.params.todo_id, function(err, todo) {

            if (err)
                res.send(err);

            todo.name = req.todo.name;  

            todo.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Todo updated!' });
            });
        });
    })

    // delete a todo
    .delete(function(req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            res.json({ message: 'Todo successfully deleted' });
        });
    });



// BIND OUR ROUTES to API
app.use('/api', router);



// START THE SERVER
app.listen(3000, function(){
  console.log('App listening on port 3000!');
});
