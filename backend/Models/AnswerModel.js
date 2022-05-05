const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//schema
const answerSchema = new Schema({

        questionId: {type: String, required: true},
        userid: {type: String, required: true},
        answer: {type: String, required: true},
        status: {type: String, default: "pending"}
    },
    {timestamps: true}
);

//model based on schema
const AnswerModel = mongoose.model('question', answerSchema);
module.exports = AnswerModel;