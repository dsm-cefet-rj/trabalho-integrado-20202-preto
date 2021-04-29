var express = require('express');
var router = express.Router();
const Chats = require('../models/chats');

router.route('/')
    .get((req, res, next) => {
        Chats.find({})
        .then((chatsBanco) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(chatsBanco);                
        },(err) => next(err))
        .catch((err) => next(err));
    })

    .post(function (req, res, next) {
        Chats.create(req.body)
        .then((chatsBanco) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(chatsBanco);                
        },(err) => next(err))
        .catch((err) => next(err));
        })


module.exports = router;