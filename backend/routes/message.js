"use strict";
const express = require("express");
const router = express.Router();
const Message = require("../Models/MessageModel");


//send Message
router.post("/create", async (req, res) => {
    console.log("INSIDE CREATE Message POST");
    const newMessage = new Message(req.body); //create new object

    try {
        console.log("SUCCESS CREATING Message");
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        console.log("ERROR CREATING Message");
        res.status(500).json(err);
    }
});


//update Message
router.put("/update/:id", async (req, res) => {
    console.log("INSIDE Message UPDATE");

    try {
        const updatedMessage= await Message.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        console.log("SUCCESS UPDATING Message")
        res.status(200).json(updatedMessage);
    } catch (err) {
        console.log("ERROR UPDATING Message");
        res.status(500).json(err);
    }
});

//DELETE Message
router.delete("/delete/:id", async (req, res) => {
    console.log("INSIDE Message DELETE");

    try {
        await Message.findByIdAndDelete(req.params.id);
        console.log("SUCCESS DELETE Message")
        res.status(200).send("Message deleted");
    } catch (err) {
        console.log("ERROR DELETE Message")
        res.status(500).json(err);
    }
});

//GET Message
router.get("/find/:id", async (req, res) => {
    console.log("INSIDE GET Message");

    try {
        const message = await Message.findById(req.params.id);
        res.status(200).json(message);
        console.log("SUCCESS GET Message ")

    } catch (err) {
        console.log("ERROR GET Message")
        res.status(500).json(err);
    }
});



//GET all Message
router.get("/messageList", async (req, res) => {
    console.log("INSIDE Message GET AlL");

    const query = req.query.new;

    try {
        let message;

        if (query) {
            message = await Message.find().sort({createdAt: -1}).limit(10);
        } else {
            message = await Message.find();
        }

        console.log("SUCCESS Message GET ALL");
        res.status(200).json(message);
    } catch (err) {
        console.log("ERROR Message GET ALL");
        res.status(500).json(err);
    }
});


module.exports = router;
