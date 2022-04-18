const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//schema
const adminSchema = new Schema({
        username: {type: String, required: true},
        password: {type: String, required: true}
    },
    {
        versionKey: false
    });


//model based on schema
const AdminModel = mongoose.model('admin', adminSchema);
module.exports = AdminModel;