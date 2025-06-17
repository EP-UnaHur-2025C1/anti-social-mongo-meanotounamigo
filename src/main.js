const express = require ('express');
const {connectToDataBase} = require('./bd/mongodb');
const app = express(); 
const PORT = process.env.PORT || 3000;


app.listen(PORT, async(err) =>{
    if(err){
        console.error(err.message);
        process.exit(1);
    }
    try{
        await connectToDataBase(); 
    }catch (dbError){
        console.error(dbError.message);
        process.exit(1);       
    }
    console.log (`Servidor escuchando en el puerto http://0.0.0.0:${PORT}`);
});