const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//schema
const tagSchema = new Schema({
        title: {type: String, required: true},
        description: {type: String, required: true},
        totalCount: {type: Number}
    },

    {
        versionKey: false,
        timestamps: true,
    });


//model based on schema
const TagsModel = mongoose.model('tags', tagSchema);
module.exports = TagsModel;