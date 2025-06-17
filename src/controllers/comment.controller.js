const { Comment, Post, User } = require('../bd/models');

const deleteCommentById = async (req, res) =>{
    try{
        const data = await Comment.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({message: 'Comentario no encontrado'});
        res.status(200).json({message: 'Comentario eliminado', removed})
    }catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

const getCommentById = async (req, res) =>{
    try{
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({message: 'Comentario no encontrado'})
    }catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

const updateCommentById = async (req, res) => {
    try{
        const { contenido } = req.body;
        const comment = await Comment.findById(req.params.id);
        if (!comment) return res.status(404).json({message: 'Comentario no encontrado'});

        comment.contenido = contenido;
        await comment.save();
        res.status(200).json({message: 'El comentario fue actualizada'});
    }catch (err){
        res.status(500).json({error: err.mesagge});
    }
}

const getComments = async (req, res) =>{
    try{
        const data = await Comment.find({});
        res.status(200).json(data);
    } catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

module.exports = { 
    deleteCommentById, 
    getCommentById, 
    updateCommentById, 
    getComments, 
    //getCommentWithPost, 
    //getCommentWithPostAndUser
 };