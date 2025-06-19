const express = require ('express');
const {connectToDataBase} = require('./bd/mongodb');
const app = express(); 
const PORT = process.env.PORT || 3000;


//Swagger
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
// Construir ruta absoluta al archivo swagger.yaml
const swaggerPath = path.join(__dirname, '..', 'docs', 'swagger.yaml');
const swaggerDocument = YAML.load(swaggerPath);

//Usa la ruta para el swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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