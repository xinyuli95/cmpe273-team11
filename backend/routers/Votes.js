const express = require("express");
const router = express.Router();
const VoteDB = require("../models/Votes");

router.post("/:id", async (req, res) => {
  try {
    console.log(req.body.vote);
    await VoteDB.create({
      question_id: req.params.id,
      vote: req.body.vote,

      // user: req.body.user,
    })
      .then((doc) => {
        res.status(201).send({
          message: "Vote added successfully",
        });
        // res.status(201).send(doc);
      })
      .catch((err) => {
        res.status(400).send({
          message: "Bad format",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: "Error while adding Votes",
    });
  }
});



module.exports = router;
