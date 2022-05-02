"use strict";
const express = require("express");
const router = express.Router();
const Tags = require("../Models/TagsModel");


//create tags
router.post("/create", async (req, res) => {
    console.log("INSIDE CREATE TAGS POST");
    const newTags = new Tags(req.body); //create new object

    try {
        console.log("SUCCESS CREATING TAGS");
        const savedTags = await newTags.save();
        res.status(200).json(savedTags);
    } catch (err) {
        console.log("ERROR CREATING TAGS");
        res.status(500).json(err);
    }
});


//update tags
router.put("/update/:id", async (req, res) => {
    console.log("INSIDE TAGS UPDATE");

    try {
        const updatedTags = await Tags.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        console.log("SUCCESS UPDATING TAGS")
        res.status(200).json(updatedTags);
    } catch (err) {
        console.log("ERROR UPDATING TAGS");
        res.status(500).json(err);
    }
});

//DELETE tags
router.delete("/delete/:id", async (req, res) => {
    console.log("INSIDE TAGS DELETE");

    try {
        await Tags.findByIdAndDelete(req.params.id);
        console.log("SUCCESS DELETE TAGS")
        res.status(200).send("TAGS deleted");
    } catch (err) {
        console.log("ERROR DELETE TAGS")
        res.status(500).json(err);
    }
});

//GET tags
router.get("/find/:id", async (req, res) => {
    console.log("INSIDE GET TAGS");

    try {
        const tags = await Tags.findById(req.params.id);
        res.status(200).json(tags);
        console.log("SUCCESS GET TAGS ")

    } catch (err) {
        console.log("ERROR GET TAGS")
        res.status(500).json(err);
    }
});


//GET all tags
router.get("/tagsList", async (req, res) => {
    console.log("INSIDE TAGS GET AlL");

    const query = req.query.new;
    const title = req.query.title;
    try {
        let tags;

        if (query) {
            tags = await Tags.find().sort({createdAt: -1}).limit(10);
        } else if (title) {
            tags = await Tags.find({
                title: {
                    $in: [title],
                },
            });
        } else {
            tags = await Tags.find();
        }

        console.log("SUCCESS TAGS GET ALL");
        res.status(200).json(tags);
    } catch (err) {
        console.log("ERROR TAGS GET ALL");
        res.status(500).json(err);
    }
});


module.exports = router;
