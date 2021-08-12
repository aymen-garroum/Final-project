const mongoose = require('mongoose')

const Product = mongoose.Schema({
    nom: {type: String, require: true},
    descriptif: {type: String, require: true},
    image: {data: Buffer},
    fiche: {data: Buffer}
}     
)

module.exports = mongoose.model('Product',Product)