const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const anuncioSchema = new Schema({
    usuario: {
        type: String,
        required: true,
    },
    cardDescricao: {
        type: String,
        required: true,
    },
    temperamento: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: true,
    },
    sexo: {
        type: String,
        required: true,
    },
    raça: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    dataAnuncio: {
        type: Date,
        required: false,
    }
})

anuncioSchema.plugin(normalize);

var Anuncios = mongoose.model('Anuncios', anuncioSchema);

module.exports = Anuncios;