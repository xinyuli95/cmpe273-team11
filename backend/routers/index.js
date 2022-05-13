const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Asnwer");
const commentRouter = require('./Comments');
const answercommentRouter = require('./answercomments');
const userRouter = require('./User');
const voteRouter = require('./Votes');
const UserdetailsRouter = require('./Userdetails');
const searchRouter = require('./Search');

router.get("/", (req, res) => {
  res.send("Welcome to stack overflow clone");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);
router.use('/comment', commentRouter);
router.use('/answercomment', answercommentRouter);
router.use('/user', userRouter);
router.use('/vote', voteRouter);
router.use('/userdetails', UserdetailsRouter);
router.use('/search', searchRouter);

module.exports = router;
