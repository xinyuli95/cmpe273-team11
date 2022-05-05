"use strict";
const express = require("express");
const router = express.Router();
const Answer = require("../Models/AnswerModel");
const Question = require("../Models/QuestionModel");


//answer question
router.post("/", async (req, res) => {
    console.log("INSIDE CREATE answer POST");
    const newAnswer = new Answer(req.body);

    try {
        console.log("SUCCESS CREATING answer");
        const savedAnswer = await newAnswer.save();
        res.status(200).json(savedAnswer);
    } catch (err) {
        console.log("ERROR CREATING answer");
        res.status(500).json(err);
    }
});

//update answer
router.put("/update/:id", async (req, res) => {
    console.log("INSIDE answer UPDATE");

    try {
        const updatedAnswer = await Question.findByIdAndUpdate(
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