const { Router } = require('express');
var express = require('express');
var router = express.Router();

var anuncios = [
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
  },
  {
    "usuario": "usuarioTeste3",
    "cardDescricao": "Golden filhote em niterói para adoção",
    "temperamento": "Bagunceira",
    "img": "https://i.pinimg.com/originals/0c/e8/cd/0ce8cddcbbb19d11199fa8ae2d81927f.jpg",
    "descricao": "A laurita é linda demais, adora crianças. Uma companheira para todas as horas!\nDescrição edição",
    "idade": 1,
    "sexo": "Fêmea",
    "raça": "Golden",
    "tipo": "Cachorro",
    "nome": "Laurita",
    "dataAnuncio": "Thu Mar 25 2021 18:25:37 GMT-0300 (Horário Padrão de Brasília)",
    "id": 3
  },
  {
    "id": 4,
    "nome": "Bituco",
    "tipo": "Cachorro",
    "raça": "Vira lata",
    "idade": "6",
    "sexo": "Macho",
    "descricao": "Achei bituco na porta de um bar, estava comendo lixo. Assim que vi minha vida mudou. Um cachorro verdadeiramente amoroso e companheiro. Estou dando pra adoção porque estou morrendo e ele precisa de amor.",
    "img": "https://www.petlove.com.br/images/breeds/192401/profile/original/srd-p.jpg?1532539578",
    "temperamento": "Velho de guerra",
    "dataAnuncio": "Thu Mar 25 2021 15:00:37 GMT-0300 (Horário Padrão de Brasília)",
    "cardDescricao": "Bituco é o pet certo pra você. Incondicionalmente leal",
    "usuario": "usuarioTeste4"
  }
];

/* GET users listing. */
router.route('/')
.get(function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(anuncios);
})
.post(function(req, res, next) {
  let proxId = 1 + anuncios.map(p => p.id).reduce((x, y) => Math.max(x,y));
  let anuncio = {...req.body, id: proxId};
  anuncios.push(anuncio);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(anuncio);
})

router.route('/:id')
.delete(function(req, res, next) {
  anuncios = anuncios.filter(function(value, index, arr){
    return value.id != req.params.id;
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);
})
.put(function(req, res, next) {
  let index = req.params.id;
  anuncios.splice(index, 1, req.body);
  console.log("teste");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
})

module.exports = router;
