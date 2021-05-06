var express = require('express');
var router = express.Router();
const Chats = require('../models/chats');
var authenticate = require('../authenticate');


router.route('/')
    .get(authenticate.verifyUser, async (req, res, next) => {
        // #swagger.tags = ['Chats']
        // #swagger.description = 'Endpoint para obter todos os chats do banco.'
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo todos os chats do banco",
                schema: {$ref: "#/definitions/ArrayChats"}
        } */
        console.log(req.user);
        try {
            const chatsBanco = await Chats.find({}).maxTime(5000);
            res.statusCode = 200;
            /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Chat" },
               description: 'Chats encontrados.' 
            } */
            res.setHeader('Content-Type', 'application/json');
            res.json(chatsBanco);
        } catch (err) {
            console.log('erro fetch')
            next(err);
        }
    })
    .post(authenticate.verifyUser, (req, res, next) => {
        // #swagger.tags = ['Chats']
        // #swagger.description = 'Endpoint para adicionar uma mensagem no banco.'
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações da mensagem a serem escritas no banco",
                schema: {$ref: "#/definitions/Chat"}
        } */

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