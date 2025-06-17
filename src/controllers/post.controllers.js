const { Post, User, Comment, PostImage } = require('../bd/models');

const getPosts = async (req, res) =>{
    try{
        const data = await Post.find({});
        res.status(200).json(data);
    } catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

const getPostById = async (req, res) =>{
    try{
        const data = await Post.findById(req.params.id);
        if (!data) return res.status(404).json({message: 'Post no encontrado'})
    }catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

const deletePost = async (req, res) =>{
    try{
        const data = await Post.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({message: 'La imagen no encontrado'});
    }catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

const updatePost = async (req, res) => {
    try{
        const { descripcion } = req.body;
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({message: 'Post no encontrado'});

        post.descripcion = descripcion;
        await post.save();
        res.status(200).json({message: 'El post fue actualizada'});
    }catch (err){
        res.status(500).json({error: err.mesagge});
    }
}


module.exports = { 
    getPosts, 
    getPostById, 
    deletePost, 
    updatePost, 
    //getPostWithUser, 
    //getPostWithComments, 
    //getPostWithImages, 
    //assignPostToTag, 
    //deleteTagFromPost, 
    //getTagsByPostId 
};