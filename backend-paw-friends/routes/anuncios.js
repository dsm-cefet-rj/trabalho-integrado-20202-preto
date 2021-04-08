var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json([
    {
      "usuario": "usuarioTeste1",
      "cardDescricao": "Gatinho para adoção muito simpático. Editado",
      "temperamento": "Agitado demais",
      "img": "https://i2-prod.mirror.co.uk/incoming/article21142078.ece/ALTERNATES/s615/0_Stray-Cat.jpg",
      "descricao": "Quero dar esse gato fofo para adoção pois não tenho recursos financeiros para cuidar dele. Ele é bem agitado, gosta de bater nas pessoas e provavelmente vai acabar com a sua casa. Mas ele é lindo. Olha pra essa cara fofa.\nTeste de edição aula pswsadasd",
      "idade": 4,
      "sexo": "Macho",
      "raça": "Gatinho",
      "tipo": "Gato",
      "nome": "Salvador Dali o famigerado",
      "dataAnuncio": "Thu Mar 25 2021 18:22:35 GMT-0300 (Horário Padrão de Brasília)",
      "id": 1
    },
    {
      "usuario": "usuarioTeste2",
      "cardDescricao": "York muito bonito, cachorro de madame",
      "temperamento": "Calmo",
      "img": "https://www.petlove.com.br/images/breeds/192471/profile/original/yorkshire-p.jpg?1532539683",
      "descricao": "Descrição de outro animal para adoção. Dessa vez o maickdfgdfg",
      "idade": 4,
      "sexo": "Macho",
      "raça": "Yorkshire",
      "tipo": "Cachorro",
      "nome": "Maick the dog",
      "dataAnuncio": "Thu Mar 25 2021 18:22:17 GMT-0300 (Horário Padrão de Brasília)",
      "id": 2
    }
  ]);
});

module.exports = router;
