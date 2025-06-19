require("dotenv").config();
const express = require ('express');
const {connectToDataBase} = require('./bd/mongodb');
const app = express(); 
const PORT = process.env.PORT || 3009;

//Swagger
//const path = require('path');
//const swaggerUi = require('swagger-ui-express');
//const YAML = require('yamljs');
// Construir ruta absoluta al archivo swagger.yaml
//const swaggerPath = path.join(__dirname, '..', 'docs', 'swagger.yaml');
//const swaggerDocument = YAML.load(swaggerPath);

//Usa la ruta para el swagger
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Importa las rutas
const { userRoute, postRoute, tagRoute } = require('./routes'); //, postImageRoute, commentRoute

// Middleware para procesar JSON
app.use(express.json());

// Usa las rutas de post con el prefijo /post
app.use('/post', postRoute);
app.use('/user', userRoute);
//app.use('/post-image', postImageRoute);
//app.use('/comment', commentRoute);
app.use('/tag', tagRoute);


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