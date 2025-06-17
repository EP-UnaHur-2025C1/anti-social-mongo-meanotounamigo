const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL??"mongodb://root:example@localhost:27017/libros?authSource=admin";

let isConnected;

const connectToDataBase = async() =>{
    if(!isConnected){
      await mongoose.connect(MONGO_URL);
      console.log("Conexión con Mongo realizada con éxito"); 
      isConnected = true;  
    }
};
 
module.exports = {mongoose, connectToDataBase};