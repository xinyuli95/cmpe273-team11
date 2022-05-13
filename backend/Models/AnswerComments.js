const mongoose = require("mongoose");
const answercommentSchema = new mongoose.Schema({

  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
  },
  answercomment : String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("answercomments", answercommentSchema);
