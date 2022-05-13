"use strict";
var express = require('express');
const router = express.Router();
const multer = require('multer')


let upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/images');
        },
        filename: function (req, file, cb) {
            var fileFormat = (file.originalname).split(".");
            var changedName = (new Date().getTime()) + "." + fileFormat[fileFormat.length - 1];
            cb(null, changedName);
        }
    })
});

router.post('/', upload.single('file'), async (req, res) => {
    const { filename } = req.file
    return res.json({
        msg: "ok！",
        status: true,
        code: 200,
        data: {
            md5: filename
        }
    });
});


module.exports = router;