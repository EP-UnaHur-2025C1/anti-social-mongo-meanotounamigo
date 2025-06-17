const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nickname:{
        type: String, 
        required: true, 
        unique:true, 
        minlength:[3,'El nombre debe tener al menos 3 letras'], 
        required:[true, 'El nombre es obligatorio'],
        trim: true //elimina espacios adelante y atras
    },
    email:{
        type: String, 
        required: true, 
        unique:true, 
        required:[true, 'El mail es obligatorio'],
        trime: true //elimina espacios adelante y atras
    }
},
{timestamps:false}
)

module.exports = mongoose.model('User', userSchema)