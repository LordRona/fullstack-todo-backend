const mongoose = require('mongoose');

const toDoModel = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('toDo', toDoModel);