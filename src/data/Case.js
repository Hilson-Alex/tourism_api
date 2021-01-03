const mongoose = require('mongoose');
const data = require('./values')

const collection = "cases";

/**
 * Case Schema for new cases
 * @type {module:mongoose.Schema<Document, Model<Document>>}
 */
const CaseSchema = new mongoose.Schema({

    estacao: {
        type: String,
        required: true,
        enum: Object.values(data.seasons),
    },

    custo: {
        type: String,
        required: true,
        enum: Object.values(data.cost),
    },

    num_pessoas: {
        type: Number,
        required: true,
        min: [1, 'Pelo menos uma pessoa!'],
    },

    num_criancas: {
        type: Number,
        default: 0,
        min: [0, 'O número de crianças deve ser positivo!'],
    },

    tipo: {
        type: String,
        required: true,
        enum: Object.values(data.placeType),
    },

    distancia: {
        type: String,
    },

    grupo: {
        type: String,
        required: true,
        enum: Object.values(data.group),
    },

    solucao: {
        type: Object,
        required: true,
        lugar: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        lat: {
            type: String,
            required: true,
        },
        lon: {
            type: String,
            required: true,
        },
    },

}, {collection});

module.exports = mongoose.model('case', CaseSchema);
