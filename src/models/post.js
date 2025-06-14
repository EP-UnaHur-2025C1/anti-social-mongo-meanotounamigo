const mongoose = require('mongoose')

const postSchame = new mongoose.Schema({
    fecha:{
        type: Date,
        required: true
    },

    descripcion:{
        type: String,
        required: true,
        validate:{
            validator: function(v){
                return v.trime().length > 0;
            },
            message: 'La descripción no puede estar vacía'
        }
    }
},
{timestamps:false}
)

module.exports = mongoose.model('Post',postSchame )