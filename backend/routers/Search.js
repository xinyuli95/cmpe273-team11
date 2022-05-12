const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
// const mongoose = require('mongoose')
const Question = require("../models/Question");
const { checkAuth } = require("../utils/passport");

//GET search results
router.post("/", async (req, res) => {
  console.log("INSIDE SEARCH");
  
  const query = req.body.query;
  const tags = req.body.tags;
  const title = req.body.title;

  try {
      let questions;

      if (query) {
          console.log("find 10")
          questions = await Question.find().sort({createdAt: -1}).limit(10);
      } else if (tags) {
          console.log("find tag")
          questions = await Question.find({
              tags: {
                  $in: [tags], //find the question with tags
              },
          });
      } else if (title) {
          console.log("find title")
          questions = await Question.find({
              "title": {
                  $regex: title
              }
          });
      } else {
          questions = await Question.find();
      }

      console.log("SUCCESS SEARCH");
      res.status(200).json(questions);
  } catch (err) {
      console.log("ERROR SEARCH");
      res.status(500).json(err);
  }
});

module.exports = router;
