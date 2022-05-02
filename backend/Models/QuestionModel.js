const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//schema
const questionSchema = new Schema({
        title: {type: String, required: true},
        body: {type: String, required: true},
        tags: {type: Array},
        // img: {type: Boolean},
        status: {type: String, default: "unanswered"},
        votes: {type: Number, default: 0},
        answers: {type: Number, default: 0},
        views: {type: Number, default: 0},
    },


    {
        versionKey: false,
        timestamps: true
    });


//model based on schema
const QuestionModel = mongoose.model('question', questionSchema);
module.exports = QuestionModel;