const { mongoose } = require('../bd/mongodb');
const { Schema } = require('mongoose');

const commentSchema = new mongoose.Schema({
    contenido:{
        type: String,
        required: [true, 'El contenido es obligatorio'],
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
commentSchema.set("toJSON", {
    transform:(_,ret)=>{
        delete ret.__v
        ret.id = ret._id;
        delete ret._id;
    }
})

const Comentario = mongoose.model('Comment', commentSchema);
module.exports = Comentario;