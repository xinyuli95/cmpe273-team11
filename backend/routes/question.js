"use strict";
const express = require("express");
const router = express.Router();
const Question = require("../Models/QuestionModel");


//create question
router.post("/create", async (req, res) => {
    console.log("INSIDE QUESTION POST");
    const newQuestion = new Question(req.body);

    try {
        console.log("SUCCESS CREATING QUESTION");
        const savedMessage = await newQuestion.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        console.log("ERROR CREATING QUESTION");
        res.status(500).json(err);
    }
});

module.exports = router;
