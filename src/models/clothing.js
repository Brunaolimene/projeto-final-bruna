const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome:{
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    quantidade: {
        type: String,
        required: true
    },
    valor: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true,
        ref: 'category'
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('clothing', clothingSchema)
