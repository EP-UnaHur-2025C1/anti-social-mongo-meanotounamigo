const { mongoose } = require('../bd/mongodb');
const { Schema } = require('mongoose')

const postImageSchema = new mongoose.Schema({
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
postImageSchema.set("toJSON", {
    transform:(_,ret)=>{
        delete ret.__v
        ret.id = ret._id;
        delete ret._id;
    }
})

const PostImage = mongoose.model('PostImage', postImageSchema);
module.exports = PostImage;