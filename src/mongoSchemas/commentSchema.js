const { mongoose } = require('../bd/mongodb');
const { Schema } = require('mongoose')

const commentsSchema = new mongoose.Schema({
    contenido:{
        type: String,
        required: [true, 'El contenido es obligatorio'],
        trim: true //elimina espacios vacios adelante y atras
    },

    fecha: {
        type: Date,
        required: true,
        default: Date.now
    },

    visible: {
        type: Boolean,
        required: true,
        default: true
    }
},
{
    collation:'comentarios'
}
);

//Modifica cómo se ve a la salida
postSchame.set("toJSON", {
    transform:(_,ret)=>{
        delete ret._v
        delete ret._id
    }
})

const Comentario = mongoose.model('Comment', commentsSchema);
module.exports = Comentario;