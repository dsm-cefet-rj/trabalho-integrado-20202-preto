var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Profiles = require('../models/profiles');
var authenticate = require('../authenticate');

/* GET users listing. */
router.route('/')
.get(authenticate.verifyUser, async (req, res, next) => {
  /*
  
    #swagger.tags = ['Profiles']
    #swagger.description = 'Endpoint para obter todos os profiles do banco.'
    #swagger.parameters['profiles'] = {
      in: 'body',
      type: "object",
      description: "Array de objetos contendo todos os profiles do site.",
      schema: {$ref: "#/definitions/Profiles"}
    } 
    #swagger.responses[200] = { 
      schema: { $ref: "#/definitions/Profiles" },
      description: 'Profiles encontrados.' 
    } 
    #swagger.responses[401] = { 
      description: 'Não autorizado. Precisa efetuar login.' 
    },
    #swagger.responses[500] = { 
      description: 'Server ou banco fora do ar.' 
    }     
  */
  try{
    const profilesBanco = await Profiles.find({});
    res.statusCode = 200;



    res.setHeader('Content-Type', 'application/json');
    res.json(profilesBanco);

  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
})

.post((req, res, next) => {

  /*
    #swagger.tags = ['Profiles']
    #swagger.description = 'Endpoint para criar um novo profile no banco.'
    #swagger.parameters['profiles'] = {
      in: 'body',
      type: "object",
      description: "Objeto contendo as informações do profile a serem escritas no banco",
      schema: {$ref: "#/definitions/Profile"}
    }
    #swagger.responses[200] = { 
      description: 'Profile criado.' 
    } 
    #swagger.responses[401] = { 
      description: 'Não autorizado. Precisa efetuar login.' 
    },
    #swagger.responses[500] = { 
      description: 'Server ou banco fora do ar.' 
    }     
  */

  Profiles.create(req.body)
  .then((profile) => {
      console.log('Perfil criado ', profile);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(profile);
  }, (err) => next(err))
  .catch((err) => next(err));
})

router.route('/:id')
.get(authenticate.verifyUser, async (req, res, next) => {

  /*
    #swagger.tags = ['Profiles']
    #swagger.description = 'Endpoint para encontrar e retornar profile no banco pelo seu ID.'
    #swagger.parameters['id'] = { description: 'ID do profile.' }
    #swagger.parameters['res'] = {
      in: 'body',
      type: "object",
      description: "Objeto contendo as informações do profile desejado",
      schema: {$ref: "#/definitions/Profile"}
    } 

    #swagger.responses[200] = { 
      schema: { $ref: "#/definitions/Profile" },
      description: 'Profile existe e é retornado.' 
    } 
    #swagger.responses[401] = { 
      description: 'Não autorizado. Precisa efetuar login.' 
    },
    #swagger.responses[500] = { 
      description: 'Server ou banco fora do ar.' 
    }         
    
  */

  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const resp = await Profiles.findById(req.params.id);
    if(resp != null){
      res.statusCode = 200;
      res.json(resp);
    }else{
      err = {};
      res.statusCode = 404;
      res.json(err);
    }
  
  }catch(errParam){
    console.log(errParam);
    res.statusCode = 404;
    res.json({});
  }  
})  
.delete(authenticate.verifyUser, (req, res, next) => {

  /*
    #swagger.tags = ['Profiles']
    #swagger.description = 'Endpoint para encontrar e excluir um profile no banco pelo seu ID.'
    #swagger.parameters['id'] = { description: 'ID do profile.' }
    
    #swagger.responses[200] = { 
      description: 'Profile deletado.' 
    } 
    #swagger.responses[401] = { 
      description: 'Não autorizado. Precisa efetuar login.' 
    },
    #swagger.responses[500] = { 
      description: 'Server ou banco fora do ar.' 
    }     

  */

  Profiles.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));

})
.put(authenticate.verifyUser, (req, res, next) => {
  
  /*

    #swagger.tags = ['Profiles']
    #swagger.description = 'Endpoint para encontrar e atualizar um profile no banco pelo seu ID.'
    #swagger.parameters['id'] = { description: 'ID do profile.' }
    #swagger.parameters['body'] = {
      in: 'body',
      type: "object",
      description: "Objeto contendo as informações do Profile editado",
      schema: {$ref: "#/definitions/ProfilePut"}
    }

    #swagger.responses[200] = { 
      schema: { $ref: "#/definitions/ProfilePut" },
      description: 'Profile editado.' 
    } 
    #swagger.responses[401] = { 
      description: 'Não autorizado. Precisa efetuar login.' 
    },
    #swagger.responses[500] = { 
      description: 'Server ou banco fora do ar.' 
    }     
    
  */

  Profiles.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((profile) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(profile);
  }, (err) => next(err))
  .catch((err) => next(err));
})

module.exports = router;