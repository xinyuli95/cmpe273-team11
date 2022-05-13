const mongoose = require("mongoose");
const VoteSchema = new mongoose.Schema({

  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
  },
  vote : Number,
  
//   created_at: {
//     type: Date,
//     default: Date.now(),
//   },
 
});

module.exports = mongoose.model("Votes", VoteSchema);