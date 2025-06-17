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

const PostImage = mongoose.model('PostImage', postImageSchame);

module.exports = PostImage;