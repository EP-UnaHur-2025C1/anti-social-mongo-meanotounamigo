const mongoose = require('mongoose')
require('dotenv').config()

const conectarBD = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conectado a MongoDB')
    } catch (error){
        console.log('Error en la conexion', error.message)
    }
}

module.exports = conectarBD