var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Anuncios = require('../models/anuncios');
var authenticate = require('../authenticate');

/* GET users listing. */
router.route('/')
    .get(authenticate.verifyUser, async (req, res, next) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para obter todos os anuncios do banco.'
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo todos os anuncios do banco",
                schema: {$ref: "#/definitions/ArrayAnuncios"}
        } */
        try {
            const anunciosBanco = await Anuncios.find({}).maxTime(5000);
            res.statusCode = 200;

            /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Anuncio" },
               description: 'Anuncios encontrados.' 
            } */

            res.setHeader('Content-Type', 'application/json');
            res.json(anunciosBanco);
        } catch (err) {
            next(err);
        }
    })
    .post(authenticate.verifyUser, (req, res, next) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para criar um novo anuncio no banco.'
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações do anuncio a serem escritas no banco",
                schema: {$ref: "#/definitions/Anuncio"}
        } */

        Anuncios.create(req.body)
            .then((anuncio) => {
                console.log('Anuncio criado ', anuncio);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(anuncio);
            }, (err) => next(err))
            .catch((err) => next(err));

    })

router.route('/:id')
    .get(authenticate.verifyUser, (req, res, next) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para encontrar e retornar anuncio no banco pelo seu ID.'
        // #swagger.parameters['id'] = { description: 'ID do anuncio.' }
        /*  #swagger.parameters['res'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações do anuncio desejado",
                schema: {$ref: "#/definitions/Anuncio"}
        } */

        Anuncios.findById(req.params.id)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));


    })
    .delete(authenticate.verifyUser, (req, res, next) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para encontrar e excluir um anuncio no banco pelo seu ID.'
        // #swagger.parameters['id'] = { description: 'ID do anuncio.' }
        Anuncios.findByIdAndRemove(req.params.id)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp.id);
            }, (err) => next(err))
            .catch((err) => next(err));


    })
    .put(authenticate.verifyUser, (req, res, next) => {
        // #swagger.tags = ['Anúncios']
        // #swagger.description = 'Endpoint para encontrar e atualizar um anuncio no banco pelo seu ID.'
        // #swagger.parameters['id'] = { description: 'ID do anuncio.' }
        /*  #swagger.parameters['body'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações do anuncio editado",
                schema: {$ref: "#/definitions/Anuncio"}
        } */
        Anuncios.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
            .then((anuncio) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(anuncio);
            }, (err) => next(err))
            .catch((err) => next(err));

    })

module.exports = router;