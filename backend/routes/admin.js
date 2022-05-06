"use strict";

const express = require("express");
const router = express.Router();
const Question = require("../Models/QuestionModel");
const Tag = require("../Models/TagModel");
const User = require("../Models/UserModel");
const mongoose = require('mongoose');

//answer question
router.get("/analytics", async (req, res) => {
    console.log("INSIDE analytics");

    try {
        const gmtDate = new Date(new Date().toUTCString());
        const questionCount = await Question.countDocuments({_id : { $gt : mongoose.Types.ObjectId(Math.floor(new Date(gmtDate.getFullYear()+'/'+(gmtDate.getMonth()+1)+'/'+gmtDate.getDate())/1000).toString(16)+"0000000000000000") }});
        const topQuestions = await Question.find().sort({views: -1}).limit(10);
        const topTags = await Tag.find().sort({totalCount: -1}).limit(10);

        res.status(200).json({  "questionCount": questionCount,
                                "topQuestions": topQuestions,
                                "topTags": topTags             
                            });
    } catch (err) {
        console.log("ERROR GETTING analytics");
        res.status(500).json(err);
    }
});

//update answer
router.put("/update/:id", async (req, res) => {
    console.log("INSIDE answer UPDATE");

    try {
        const updatedAnswer = await Answer.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        console.log("SUCCESS UPDATING answer")
        res.status(200).json(updatedAnswer);
    } catch (err) {
        console.log("ERROR UPDATING answer");
        res.status(500).json(err);
    }
});

module.exports = router;