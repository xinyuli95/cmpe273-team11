const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//schema
const questionSchema = new Schema({
        title: {type: String, required: true},
        body: {type: String, required: true},
        tags: {type: Array},
    // img: {type: Boolean},
        status: {type: String, default: "unanswered"},
    },

    {
        versionKey: false
    });


//model based on schema
const QuestionModel = mongoose.model('question', questionSchema);
module.exports = QuestionModel;