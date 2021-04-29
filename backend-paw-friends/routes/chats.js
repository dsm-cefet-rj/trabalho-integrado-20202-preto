var express = require('express');
var router = express.Router();
const Chats = require('../models/chats');
var authenticate = require('../authenticate');

router.route('/')
    .get(authenticate.verifyUser, async (req, res, next) => {
        console.log(req.user);
        try {
            const chatsBanco = await Chats.find({}).maxTime(5000);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(chatsBanco);
        } catch (err) {
            console.log('erro fetch')
            next(err);
        }
    })
    .post(authenticate.verifyUser, (req, res, next) => {

        Chats.create(req.body)
            .then((chat) => {
                console.log('chat adicionado', chat);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(chat);
            }, (err) => next(err))
            .catch((err) => next(err));

    })


module.exports = router;