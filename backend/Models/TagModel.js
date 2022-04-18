const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//schema
const tagSchema = new Schema({
        title: {type: String, required: true},
        description: {type: String, required: true}
    },

    {
        versionKey: false
    });


//model based on schema
const TagModel = mongoose.model('question', tagSchema);
module.exports = TagModel;