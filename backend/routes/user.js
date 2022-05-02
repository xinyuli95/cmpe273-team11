"use strict";
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const {secret} = require('../Utils/config');
// const User = require('../Models/UserModel');
const {db} = require('../Utils/mysqlConfig');
const {auth} = require("../utils/passport");
auth();

//mysql

router.post('/login', async (req, res) => {
    const usernameValue = req.body.username;
    const passwordValue = req.body.password;
    console.log(usernameValue);
    console.log(passwordValue);

    await db.query(
        "SELECT * FROM users WHERE username = ? AND password = ?", [usernameValue, passwordValue],
        function (err, result) {
            if (err) {
                console.log(err);
                console.log("LOGIN NOT WORKING")
            }

            if (result.length > 0) {
                //jwt
                const payload = {_id: user._id, username: user.username};
                const token = jwt.sign(payload, secret, {
                    expiresIn: 1008000
                });
                // res.cookie('cookie', "admin", {maxAge: 900000, httpOnly: false, path: '/'});
                // req.session.user = result;
                // req.session.username = req.body.username;
                // console.log(req.session.user);


                res.status(200).end("JWT " + token);
                console.log("LOGIN WORKING")
                req.session.username = req.body.username;
                console.log(req.session.username)
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

    // console.log(Users);
    // console.log(Users.map(x => x.username));
    // console.log(req.body.password);
    // const name = req.body.name;
    const username = req.body.username
    const password = req.body.password;
    console.log(req.body.name);
    console.log(req.body.username);
    console.log(req.body.password);


    await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [name, username, password], function (err, result) {
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



//get users
router.get('/userList/:id', async (req, res) => {
    console.log("Inside GET USER request");


    await db.query(
        "SELECT * FROM users",
        function (err, result) {
            if (err) {
                console.log(err);
                console.log("GET user NOT WORKING")
            }

            if (result.length > 0) {
                res.send(result);
                console.log("GET users WORKING")

            } else { //no username or password found
                res.writeHead(400, {
                    'Content-Type': 'text/plain'
                })
                console.log("GET req not working");
            }
        });



});



module.exports = router;