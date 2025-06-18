const { mongoose } = require('../bd/mongodb');
const { Schema } = require('mongoose')

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
{
    collation:'posteos'
}
);

//Calcula antigüedad de publicación
postSchema.virtual("antiguedad").get(function () {
    return Math.floor(
        (new Date() - new Date(this.fecha)) / 
        (1000 * 60 * 60 * 24 * 365.25)
    );
});

//Modifica cómo se ve a la salida
postSchame.set("toJSON", {
    virtual:true,
    transform:(_,ret)=>{
        delete ret._v
        delete ret._id
    }
})

const Posteo = mongoose.model('Post',postSchame );
module.exports = Posteo;