const { mongoose } = require('../bd/mongodb');
const { Schema } = require('mongoose')

const postImageSchame = new mongoose.Schema({
    url:{
        type: String,
        require: [true, 'La URL es obligatoria'],
    }
},
{
    collation:'posteoImagen'
}
);

//Modifica cómo se ve a la salida
postSchame.set("toJSON", {
    transform:(_,ret)=>{
        delete ret._v
        delete ret._id
    }
})

const PostImage = mongoose.model('PostImage', postImageSchame);
module.exports = PostImage;