var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      "senha": "usupass",
      "cidade": "teste1",
      "cep": 12345678,
      "cpf": 12345678900,
      "telefone": 21912345678,
      "email": "usu1@email.com",
      "sobrenome": "teste1",
      "nome": "usuario1",
      "user": "usuario1_teste",
      "img": "https://static-25.sinclairstoryline.com/resources/media/3f1ef009-5f3d-4be8-6f0e-6ab0862f00b5-largeScale_KendallBartley2020_webphoto320x4201.png?1603404656511",
      "id": 1
    },
    {
      "senha": "usupass",
      "cidade": "teste2",
      "cep": 12345678,
      "cpf": 12345678900,
      "telefone": 21912345678,
      "email": "usu2@email.com",
      "sobrenome": "teste2",
      "nome": "usuario2",
      "user": "usuario2_teste",
      "img": "https://static-25.sinclairstoryline.com/resources/media/3f1ef009-5f3d-4be8-6f0e-6ab0862f00b5-largeScale_KendallBartley2020_webphoto320x4201.png?1603404656511",
      "id": 2
    },
    {
      "senha": "usupass",
      "cidade": "teste3",
      "cep": 12345678,
      "cpf": 12345678900,
      "telefone": 21912345678,
      "email": "usu3@email.com",
      "sobrenome": "teste3",
      "nome": "usuario3",
      "user": "usuario3_teste",
      "img": "https://static-25.sinclairstoryline.com/resources/media/3f1ef009-5f3d-4be8-6f0e-6ab0862f00b5-largeScale_KendallBartley2020_webphoto320x4201.png?1603404656511",
      "id": 3
    },
    {
      "senha": "usupass",
      "cidade": "teste4",
      "cep": 12345678,
      "cpf": 12345678900,
      "telefone": 21912345678,
      "email": "usu4@email.com",
      "sobrenome": "teste4",
      "nome": "usuario4",
      "user": "usuario4_teste",
      "img": "https://static-25.sinclairstoryline.com/resources/media/3f1ef009-5f3d-4be8-6f0e-6ab0862f00b5-largeScale_KendallBartley2020_webphoto320x4201.png?1603404656511",
      "id": 4
    },
    {
      "senha": "usupass",
      "cidade": "teste5",
      "cep": 12345678,
      "cpf": 12345678900,
      "telefone": 21912345678,
      "email": "usu5@email.com",
      "sobrenome": "teste5",
      "nome": "usuario5",
      "user": "usuario5_teste",
      "img": "https://static-25.sinclairstoryline.com/resources/media/3f1ef009-5f3d-4be8-6f0e-6ab0862f00b5-largeScale_KendallBartley2020_webphoto320x4201.png?1603404656511",
      "id": 5
    }
  ]);
});

module.exports = router;