var express = require('express');
var router = express.Router();

var chats = [
    {
        "id":1,
        "id_user":4,
        "msg_sent":"Hey dude, sup?"
    },
    {
        "id":2,
        "id_user":4,
        "msg_sent":"r u fine?"
    },
]

router.route('/')
    .get(function (req, res, next) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(chats);
    })

    .post(function (req, res, next) {
        let proxId = 1 + chats.map(p => p.id).reduce((x, y) => Math.max(x, y));
        let chat = { ...req.body, id: proxId };
        chats.push(chat);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(chat);
    })


module.exports = router;