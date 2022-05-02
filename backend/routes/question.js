"use strict";
const express = require("express");
const router = express.Router();
const Question = require("../Models/QuestionModel");


//create question
router.post("/create", async (req, res) => {
    console.log("INSIDE CREATE QUESTION POST");
    const newQuestion = new Question(req.body); //create new object

    try {
        console.log("SUCCESS CREATING QUESTION");
        const savedQuestion= await newQuestion.save();
        res.status(200).json(savedQuestion);
    } catch (err) {
        console.log("ERROR CREATING QUESTION");
        res.status(500).json(err);
    }
});


//update question
router.put("/update/:id", async (req, res) => {
    console.log("INSIDE QUESTION UPDATE");

    try {
        const updatedQuestion = await Question.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        console.log("SUCCESS UPDATING QUESTION")
        res.status(200).json(updatedQuestion);
    } catch (err) {
        console.log("ERROR UPDATING QUESTION");
        res.status(500).json(err);
    }
});

//DELETE question
router.delete("/delete/:id", async (req, res) => {
    console.log("INSIDE QUESTION DELETE");

    try {
        await Question.findByIdAndDelete(req.params.id);
        console.log("SUCCESS DELETE QUESTION")
        res.status(200).send("QUESTION deleted");
    } catch (err) {
        console.log("ERROR DELETE QUESTION")
        res.status(500).json(err);
    }
});

//GET question
router.get("/find/:id", async (req, res) => {
    console.log("INSIDE GET QUESTION");

    try {
        const question = await Question.findById(req.params.id);
        res.status(200).json(question);
        console.log("SUCCESS GET QUESTION ")

    } catch (err) {
        console.log("ERROR GET QUESTION")
        res.status(500).json(err);
    }
});



module.exports = router;
