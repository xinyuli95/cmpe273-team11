"use strict";
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const { secret } = require('../Utils/config');
const User = require('../Models/UserModel');
const db = require('../Utils/mysqlConfig');
const { auth } = require("../Utils/passport");
auth();

//mysql
//login
router.post('/login', async (req, res) => {
    console.log("Inside SiGN IN POST");

    const usernameValue = req.body.username;
    const passwordValue = req.body.password;
    console.log("username: ", usernameValue);
    console.log("password: ", passwordValue);

    await db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?", [usernameValue, passwordValue],
        function (err, result) {
            if (err) {
                console.log(err);
                console.log("LOGIN NOT WORKING")
            }

            if (result.length > 0) {
                //jwt
                const payload = { id: result[0].id, username: usernameValue };
                const token = jwt.sign(payload, secret, {
                    expiresIn: 1008000
                });


                console.log(result);
                console.log(result[0].id);
                res.status(200).end("JWT " + token);
                console.log("LOGIN WORKING")


            } else { //no username or password found
                res.writeHead(400, {
                    'Content-Type': 'text/plain'
                })
                res.end("Invalid credentials");
                console.log("login failed")
            }
        });

});

//signup
router.post('/signup', async (req, res) => {
    console.log("Inside SiGN UP POST");

    const email = req.body.email
    const username = req.body.username
    const password = req.body.password;

    console.log("username: ", req.body.username);
    console.log("password: ", req.body.password);
    console.log("email: ", req.body.email);

    await db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password], function (err, result) {
        if (err) {
            console.log(err);
            console.log("ERROR SIGNING UP");
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            res.end("Error while signing up");
        } else {
            console.log("sign up works");
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.end("Successful Sign up");
        }
    });

});


//update profile
router.put("/update/:id", async (req, res) => {
    console.log("INSIDE USER UPDATE");

    const query_list = {
        about: req.body.about,
        img: req.body.img,
        password: req.body.password,
        username: req.body.username,
        name:req.body.name,
    };

    const sql = `UPDATE users SET ? WHERE id = ?`

    db.query(sql, [query_list, req.params.id], function (err, result) {
        if (err) {
            console.log(err);
            console.log("LOGIN NOT WORKING")
        }

        res.status(200).json({
            msg: 'ok',
            code: 200
        });
    });

    // try {
    //     const updateUser = await User.findByIdAndUpdate(
    //         req.params.id,
    //         {
    //             $set: req.body,
    //         },
    //         { new: true }
    //     );
    //     console.log("profile update works");
    //     res.status(200).json(updateUser);
    //     res.end("Successful PROFILE UPDATE");
    // } catch (err) {
    //     console.log(err);
    //     console.log("ERROR UPDATING PROFILE");
    //     res.status(500).json(err);

    // }


});

//Get user
router.get("/find/:id", async (req, res) => {
    console.log("INSIDE USER GET");

    // try {
    const sql = `SELECT * FROM users WHERE id = ?`

    db.query(sql, [req.params.id], function (err, result) {
        if (err) {
            console.log(err);
            console.log("LOGIN NOT WORKING")
        }

        if (result.length > 0) {
            res.status(200).json(result[0]);
        }
    });

});

//GET all users or specific user
router.get("/userList", async (req, res) => {
    console.log("INSIDE USER GET AlL");

    const query = req.query.new;
    const findUser = req.query.username;


    try {
        let users;

        if (query) {
            users = await User.find().sort({ createdAt: -1 }).limit(10);
        }
        else if (users) {
            users = await User.find({
                username: {
                    $in: [findUser],
                },
            });
        }
        else {
            users = await User.find();
        }

        console.log("SUCCESS GET USERS REQ");
        res.status(200).json(users);
    } catch (err) {
        console.log("ERROR GET USERS REQ");
        res.status(500).json(err);
    }
});


module.exports = router;