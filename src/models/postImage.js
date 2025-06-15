const mongoose = require('mongoose')

const postImageSchame = new mongoose.Schema({
    url:{
        type: String,
        require: true
    }
},
{timestamps:false}
)

module.exports = mongoose.model('PostImage', postImageSchame)