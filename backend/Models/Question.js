const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  tags: [],
  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: String,
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },
  answercomment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "answercomments",
  },
  vote_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Votes",
  },
  // userdetails_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Userdetails",
  // }

});

module.exports = mongoose.model("Questions", questionSchema);
