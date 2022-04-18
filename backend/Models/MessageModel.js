const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        userId: {type: String, required: true},
        message: {type: String, required: true},
        status: {type: String, default: "pending"}
    },
    {timestamps: true}
);

const MessageModel = mongoose.model("message", MessageSchema);
module.exports = MessageModel;
