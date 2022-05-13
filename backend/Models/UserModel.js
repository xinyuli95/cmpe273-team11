const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//schema
const usersSchema = new Schema({
        username: {type: String, required: true},
        password: {type: String, required: true},
        name: {type: String},
        img: {type: String},
        lastSeen: {type: Date},
        about: {type: String},
        badges: {type: Array},
        tags: {type: Array},
        bookmarks: {type: Array},
        reputation: {type: Number, default: 0}
    },
    {
        timestamps: true
    });


//model based on schema
const UserModel = mongoose.model('user', usersSchema);
module.exports = UserModel;