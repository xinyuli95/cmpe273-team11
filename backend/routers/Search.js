const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
// const mongoose = require('mongoose')
const Question = require("../models/Question");
const { checkAuth } = require("../utils/passport");

//GET search results
router.post("/", async (req, res) => {
  console.log("INSIDE SEARCH");
  
  const user = req.body.user;
  const tags = req.body.tags;
  const title = req.body.title;
  const type = req.body.type;
  const accepted = req.body.accepted;

  try {
      let questions;
      
      if (tags.length !== 0) {
          console.log("find tag")
          questions = await Question.find({
              tags: {
                  $in: [tags], //find the question with tags
              },
          });
      } else if (title !== "") {
          console.log("find title")
          questions = await Question.find({
              "title": {
                  $regex: title
              }
          });
      } else {
        console.log("find 10")
        questions = await Question.find().sort({createdAt: -1}).limit(10);
      }

      console.log("SUCCESS SEARCH");
      res.status(200).json(questions);
  } catch (err) {
      console.log("ERROR SEARCH");
      res.status(500).json(err);
  }
});

module.exports = router;
