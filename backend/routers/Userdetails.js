const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const userdetailsDB = require("../models/Userdetails");

router.post("/:id", async (req, res) => {
  try {
    await userdetailsDB
      .create({
        question_id: req.params.id,

        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        img: req.body.name,
        lastSeen: req.body.name,
        about: req.body.name,
        badges: req.body.name,
        tags: req.body.name,
        bookmarks: req.body.name,
        reputation: req.body.name,
        created_at: req.body.name,
        user: req.body.user,
      })
      .then((doc) => {
        res.status(201).send({
          message: "userdetails added successfully",
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: "Bad format",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: "Error while adding userdetails",
    });
  }
});

// router.post("/", async (req, res) => {

//   const userdetailsData = new userdetailsDB({
//     username: req.body.username,
//     password: req.body.password,
//   });

//   try {
//     await userdetailsData
//       .create({
//         // question_id: req.params.id,
//         username: req.body.username,
//         password: req.body.password,
//         // email:  req.body.email,
//         // name:  req.body.name,
//         // img:  req.body.name,
//         // lastSeen:  req.body.name,
//         // about:  req.body.name,
//         // badges:  req.body.name,
//         // tags:  req.body.name,
//         // bookmarks:  req.body.name,
//         // reputation: req.body.name,
//         // created_at:  req.body.name,
//         // user:  req.body.user,
//       })
//       .then((doc) => {
//         res.status(201).send({
//           message: "userdetails added successfully im mongo DB",

//         });
//       })
//       .catch((err) => {
//         res.status(400).send({
//           message: "Bad format",
//         });
//       });
//   } catch (err) {
//     res.status(500).send({
//       message: "Error while adding userdetails",
//     });
//   }
// });

router.post("/", async (req, res) => {
  const userdetailsData = new userdetailsDB({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    name: req.body.name,
    img: req.body.name,
    lastSeen: req.body.name,
    about: req.body.name,
    badges: req.body.name,
    tags: req.body.name,
    bookmarks: req.body.name,
    reputation: req.body.name,
    created_at: req.body.name,
    user: req.body.user,
  });

  await userdetailsData
    .save()
    .then((doc) => {
      res
        .status(201)
        .send({ message: "userdetails added successfully im mongo DB" });
    })
    .catch((err) => {
      res.status(400).send({
        message: "users details not added successfully in mongo",
      });
    });
});

module.exports = router;
