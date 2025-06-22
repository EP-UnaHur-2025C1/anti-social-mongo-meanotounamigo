const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL ?? "mongodb://root:example@mongo:27017/redSocial?authSource=admin";

let isConnected;

const connectToDataBase = async() =>{
    if(!isConnected){
      await mongoose.connect(MONGO_URL);
      console.log("Conexión con Mongo realizada con éxito"); 
      isConnected = true;  
    }
};
 
module.exports = {mongoose, connectToDataBase};