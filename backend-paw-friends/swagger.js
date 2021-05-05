const options = {
    openapi: '3.0.0',          // By default is null
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
        }
    ],
    definitions: {
        User: {
            name: "Jhon Doe",
            age: 29,
            parents: {
                father: "Simon Doe",
                mother: "Marie Doe"
            },
            diplomas: [
                {
                    school: "XYZ University",
                    year: 2020,
                    completed: true,
                    internship: {
                        hours: 290,
                        location: "XYZ Company"
                    }
                }
            ]
        },
        AddUser: {
            $name: "Jhon Doe",
            $age: 29,
            about: ""
        },
        Anuncio: {
            $_id: {
                $oid: "6078909e4cae7a39ec3be355"
            },
            $usuario: "filipeshanom",
            $cardDescricao: "Gatinho para adoção muito simpático.",
            $temperamento: "Tranquilo",
            $img: "https://i2-prod.mirror.co.uk/incoming/article21142078.ece/ALTERNATES/s615/0_Stray-Cat.jpg",
            $descricao: "Quero dar esse gato fofo para adoção pois não tenho recursos financeiros para cuidar dele. Ele é bem agitado, gosta de bater nas pessoas e provavelmente vai acabar com a sua casa. Mas ele é lindo. Olha pra essa cara fofa.",
            $idade: 2,
            $sexo: "Macho",
            $raça: "Desconhecida",
            $tipo: "Gato",
            $nome: "Salvador",
            $dataAnuncio: {
                $date: "2021-04-29T22:07:45.000Z"
            },
            $__v: 0
        },
        ArrayAnuncios: [
            {
                $_id: {
                    $oid: "607890ff4cae7a39ec3be356"
                },
                $usuario: "pessoa123",
                $cardDescricao: "York muito bonito, cachorro de madame",
                $temperamento: "Calmo",
                $img: "https://www.petlove.com.br/images/breeds/192471/profile/original/yorkshire-p.jpg?1532539683",
                $descricao: "Yorkshire de 3 anos para adoção. Retirada na Barra da Tijuca-RJ",
                $idade: 3,
                $sexo: "Macho",
                $raça: "Yorkshire",
                $tipo: "Cachorro",
                $nome: "Maick",
                $dataAnuncio: {
                    $date: "2021-05-05T19:29:17.000Z"
                },
                $__v: 0
            },
            {
                $_id: {
                    $oid: "6078909e4cae7a39ec3be355"
                },
                $usuario: "filipeshanom",
                $cardDescricao: "Gatinho para adoção muito simpático.",
                $temperamento: "Tranquilo",
                $img: "https://i2-prod.mirror.co.uk/incoming/article21142078.ece/ALTERNATES/s615/0_Stray-Cat.jpg",
                $descricao: "Quero dar esse gato fofo para adoção pois não tenho recursos financeiros para cuidar dele. Ele é bem agitado, gosta de bater nas pessoas e provavelmente vai acabar com a sua casa. Mas ele é lindo. Olha pra essa cara fofa.",
                $idade: 2,
                $sexo: "Macho",
                $raça: "Desconhecida",
                $tipo: "Gato",
                $nome: "Salvador",
                $dataAnuncio: {
                    $date: "2021-04-29T22:07:45.000Z"
                },
                $__v: 0
            },
            {
                $_id: {
                    $oid: "607892064cae7a39ec3be357"
                },
                $usuario: "gabs452",
                $cardDescricao: "Golden filhote em niterói para adoção",
                $temperamento: "Bagunceira",
                $img: "https://i.pinimg.com/originals/0c/e8/cd/0ce8cddcbbb19d11199fa8ae2d81927f.jpg",
                $descricao:" A Laurita é linda demais, adora crianças. Uma companheira para todas as horas!",
                $idade: 1,
                $sexo: "Fêmea",
                $raça: "Golden",
                $tipo: "Cachorro",
                $nome: "Laurita",
                $dataAnuncio: {
                    $date: "2021-04-15T19:20:37.000Z"
                },
                $__v: 0
            }
        ],
        //inserir outros modelos aqui
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./bin/www')
})