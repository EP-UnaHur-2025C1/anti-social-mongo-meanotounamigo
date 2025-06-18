const { mongoose } = require('../bd/mongodb');
const { Schema } = require('mongoose')

const tagSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required:[true, 'El nombre es obligatorio'],
        trim: true //elimina espacios vacios adelante y atras
    }
},
{
    collection:'etiquetas'
}
);

//Modifica cómo se ve a la salida
postSchame.set("toJSON", {
    transform:(_,ret)=>{
        delete ret._v
        delete ret._id
    }
})

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;
