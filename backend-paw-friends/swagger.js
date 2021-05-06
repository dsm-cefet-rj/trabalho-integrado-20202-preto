const options = {
    language: 'pt-BR',         // By default is 'en-US'
}

const swaggerAutogen = require('swagger-autogen')(options)

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "Paw Friends",
        description: "API do Paw Friends, plataforma para adoção de animais."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Rotas referentes a entidade users"
        },
        {
            "name": "Anúncios",
            "description": "Rotas referentes a entidade anúncio"
        },
        {
            "name":"Chats",
            "description":"Rotas referentes a entidade chats"
        },
        {
            "name":"Profiles",
            "description":"Rotas referentes a entidade profiles"
        },
    ],
    definitions: {
        Anuncios: [
            {
                "usuario": "filipeshanom",
                "cardDescricao": "Gatinho para adoção muito simpático.",
                "temperamento": "Tranquilo",
                "img": "https://i2-prod.mirror.co.uk/incoming/article21142078.ece/ALTERNATES/s615/0_Stray-Cat.jpg",
                "descricao": "Quero dar esse gato fofo para adoção pois não tenho recursos financeiros para cuidar dele. Ele é bem agitado, gosta de bater nas pessoas e provavelmente vai acabar com a sua casa. Mas ele é lindo. Olha pra essa cara fofa.",
                "idade": 2,
                "sexo": "Macho",
                "raça": "Desconhecida",
                "tipo": "Gato",
                "nome": "Salvador",
                "dataAnuncio": "2021-04-29T22:07:45.000Z",
                "id": "6078909e4cae7a39ec3be355"
            }
        ],
        Anuncio: {
                "usuario": "gabs452",
                "cardDescricao": "Golden filhote em niterói para adoção",
                "temperamento": "Bagunceira",
                "img": "https://i.pinimg.com/originals/0c/e8/cd/0ce8cddcbbb19d11199fa8ae2d81927f.jpg",
                "descricao": "A Laurita é linda demais, adora crianças. Uma companheira para todas as horas!",
                "idade": 1,
                "sexo": "Fêmea",
                "raça": "Golden",
                "tipo": "Cachorro",
                "nome": "Laurita",
                "dataAnuncio": "2021-04-15T19:20:37.000Z",
                "id": "607892064cae7a39ec3be357"
        },
        AnuncioPut: {
            "usuario": "gabs452",
            "cardDescricao": "Golden filhote em niterói para adoção",
            "temperamento": "Bagunceira",
            "img": "https://i.pinimg.com/originals/0c/e8/cd/0ce8cddcbbb19d11199fa8ae2d81927f.jpg",
            "descricao": "A Laurita é linda demais, adora crianças. Uma companheira para todas as horas!",
            "idade": 1,
            "sexo": "Fêmea",
            "raça": "Golden",
            "tipo": "Cachorro",
            "nome": "Laurita",
            "dataAnuncio": "2021-04-15T19:20:37.000Z"
        },
        Chat: {
            "id_user": "607890ff4cae7a39ec3be356",
            "msg_sent": "Opa, Boa noite"
        },
        Chats: [
            {
                "id_user": "607890ff4cae7a39ec3be356",
                "msg_sent": "Poderia me mandar algumas fotos do animalzinho?"
            }
        ],

        Profiles: [
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
          
            }
        ],
        Profile: {
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
      
        },
        ProfilePut: {
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
      
        },
        //inserir outros modelos aqui
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./bin/www')
})