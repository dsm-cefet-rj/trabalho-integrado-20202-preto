var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Anuncios = require('../models/anuncios');
var authenticate = require('../authenticate');

/* GET users listing. */
router.route('/')
    .get(authenticate.verifyUser, async (req, res, next) => {
        /*
            #swagger.tags = ['Anúncios']
            #swagger.description = 'Endpoint para obter todos os anuncios do banco.'
            #swagger.parameters['anuncios'] = {
                in: 'body',
                type: "object",
                description: "Array de objetos contendo todos os anuncios do site",
                schema: {$ref: "#/definitions/Anuncios"}
            } 
        
            #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Anuncios" },
                description: 'Anuncios encontrados.' 
            } 
            #swagger.responses[401] = { 
                description: 'Não autorizado. Precisa efetuar login.' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */
        try {
            const anunciosBanco = await Anuncios.find({}).maxTime(5000);
            res.statusCode = 200;



            res.setHeader('Content-Type', 'application/json');
            res.json(anunciosBanco);
        } catch (err) {
            next(err);
        }
    })
    .post(authenticate.verifyUser, (req, res, next) => {
        /*
            #swagger.tags = ['Anúncios']
            #swagger.description = 'Endpoint para criar um novo anuncio no banco.'
            #swagger.parameters['anuncios'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações do anuncio a serem escritas no banco",
                schema: {$ref: "#/definitions/Anuncio"}
            } 
        
            #swagger.responses[200] = { 
                description: 'Anuncio criado.' 
            } 
            #swagger.responses[401] = { 
                description: 'Não autorizado. Precisa efetuar login.' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */
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
        /*
            #swagger.tags = ['Anúncios']
            #swagger.description = 'Endpoint para encontrar e retornar anuncio no banco pelo seu ID.'
            #swagger.parameters['id'] = { description: 'ID do anuncio.' }
            #swagger.parameters['res'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações do anuncio desejado",
                schema: {$ref: "#/definitions/Anuncio"}
            } 
            
            #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Anuncio" },
                description: 'Anuncio existe e é retornado.' 
            } 
            #swagger.responses[401] = { 
                description: 'Não autorizado. Precisa efetuar login.' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */
        Anuncios.findById(req.params.id)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));


    })
    .delete(authenticate.verifyUser, (req, res, next) => {
        /*
            #swagger.tags = ['Anúncios']
            #swagger.description = 'Endpoint para encontrar e excluir um anuncio no banco pelo seu ID.'
            #swagger.parameters['id'] = { description: 'ID do anuncio.' }

            #swagger.responses[200] = { 
                description: 'Anuncio deletado.' 
            } 
            #swagger.responses[401] = { 
                description: 'Não autorizado. Precisa efetuar login.' 
            },
            #swagger.responses[500] = { 
                description: 'Server ou banco fora do ar.' 
            } 
        */
        Anuncios.findByIdAndRemove(req.params.id)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp.id);
            }, (err) => next(err))
            .catch((err) => next(err));


    })
    .put(authenticate.verifyUser, (req, res, next) => {
        /*
            #swagger.tags = ['Anúncios']
            #swagger.description = 'Endpoint para encontrar e atualizar um anuncio no banco pelo seu ID.'
            #swagger.parameters['id'] = { description: 'ID do anuncio.' }
            #swagger.parameters['body'] = {
                in: 'body',
                type: "object",
                description: "Objeto contendo as informações do anuncio editado",
                schema: {$ref: "#/definitions/AnuncioPut"}
                }

            #swagger.responses[200] = {
                schema: { $ref: "#/definitions/AnuncioPut" },
                description: 'Anuncio editado.'
                }
            #swagger.responses[401] = {
                description: 'Não autorizado. Precisa efetuar login.'
                },
            #swagger.responses[500] = {
                description: 'Server ou banco fora do ar.'
                }
        */
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