const mongoose = require('mongoose')

const connectDB = async() => {
    try{await mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
        console.log('Base de données connectée')
    })

    }catch(err){console.log(`Echec lors de la connection à la base de données, erreur : ${err}`)}
}

module.exports = connectDB