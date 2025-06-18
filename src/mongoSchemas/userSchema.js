const { mongoose } = require('../bd/mongodb');
const { Schema } = require('mongoose')

const userSchema = new mongoose.Schema({
    nickname:{
        type: String, 
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
        trim: true //elimina espacios adelante y atras
    }
},
{
    collection:'usuarios'
}
);

//Modifica cómo se ve a la salida
postSchame.set("toJSON", {
    transform:(_,ret)=>{
        delete ret._v
        delete ret._id
    }
})

const Usuario = mongoose.model('User', userSchema);
module.exports = Usuario;