const express = require("express");
const router = express.Router();

const answercommentDB = require("../models/AnswerComments");

router.post("/:id", async (req, res) => {
  try {
    await answercommentDB
      .create({
        question_id: req.params.id,
        answercomment: req.body.answercomment,
        user: req.body.user,
      })
      .then((doc) => {
        res.status(201).send({
          message: "answercomment added successfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: "Bad format",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: "Error while adding answercomments",
    });
  }
});

module.exports = router;
