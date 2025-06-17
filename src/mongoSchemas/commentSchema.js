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

const Comentario = mongoose.model('Comment', commentsSchema);
module.exports = Comentario;