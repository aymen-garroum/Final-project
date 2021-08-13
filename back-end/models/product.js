const mongoose = require('mongoose')

const Product = mongoose.Schema({
    nom: {type: String, required: true},
    descriptif: {type: String, required: true},
    image: {nom: {type: String}, data: {type: String}},
    fiche: {nom: {type: String}, data: {type: String}}
}     
)

module.exports = mongoose.model('Product',Product)