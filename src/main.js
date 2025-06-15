require('dotenv').config()
const express = require ('express')
const conectarDB = require('./db/db')


const app = express() 
const PORT = process.env.PORT || 3000

//Conexion a MongoDB
conectarDB()

app.listen(PORT, () =>{
    console.log ('Servidor escuchando en el puerto http://localhost:${PORT}')
})