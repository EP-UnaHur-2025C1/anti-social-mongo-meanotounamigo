const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true,
        trim: true //elimina espacios vacios adelante y atras
    }
},
{timestamps:false}
)

module.exports = mongoose.model('Tag', tagSchema)
