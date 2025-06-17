const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    contenido:{
        type: String,
        required: true,
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
{timestamps:false}
)

module.exports = mongoose.model('Comment', commentsSchema)