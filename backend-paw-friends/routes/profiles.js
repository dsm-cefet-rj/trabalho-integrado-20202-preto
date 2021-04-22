var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Profiles = require('../models/profilesModels');

var bodyParserJson = bodyParser.json();
router.use(bodyParserJson);


/* GET users listing. */
router.route('/')
.get(async (req, res, next) => {

  try{
    const profilesBanco = await Profiles.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(profilesBanco);
    console.log(profilesBanco);
    
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
})

.post((req, res, next) => {

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
.get(async (req, res, next) => {
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
.delete((req, res, next) => {
  
  Profiles.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));

})
.put(function(req, res, next) {
  
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