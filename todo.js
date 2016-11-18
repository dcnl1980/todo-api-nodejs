// app/models/todo.js

var mongoose     = require('mongoose');

var TodoSchema   = new mongoose.Schema({
        name: String
});

module.exports = mongoose.model('Todo', TodoSchema);
