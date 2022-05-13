const mongoose = require("mongoose");
const UserdetailsSchema = new mongoose.Schema({
  //   UserdetailsID: String,
  // question_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Questions",
  // },
  username: { type: String},
  password: { type: String},
  email: { type: String},
  name: { type: String },
  img: { type: String },
  lastSeen: { type: Date, default: Date.now() },
  about: { type: String },
  badges: { type: Array },
  tags: { type: Array },
  bookmarks: { type: Array },
  reputation: { type: Number, default: 0 },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

module.exports = mongoose.model("Userdetails", UserdetailsSchema);
