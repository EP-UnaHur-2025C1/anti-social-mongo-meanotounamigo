const { PostImage, Post, User } = require("../bd/models");

const getPostImages = async (req, res) =>{
    try{
        const data = await PostImage.find({});
        res.status(200).json(data);
    } catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

const getPostImageById = async (req, res) =>{
    try{
        const data = await PostImage.findById(req.params.id);
        if (!data) return res.status(404).json({message: 'La imagen no encontrado'})
    }catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

const deletePostImageById = async (req, res) =>{
    try{
        const data = await PostImage.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({message: 'La imagen no encontrado'});
    }catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

const updatePostImageById = async (req, res) => {
    try{
        const { url } = req.body;
        const postImage = await PostImage.findById(req.params.id);
        if (!postImage) return res.status(404).json({message: 'La imagen no encontrado'});

        postImage.url = url;
        await postImage.save();
        res.status(200).json({message: 'La imagen fue actualizada'});
    }catch (err){
        res.status(500).json({error: err.mesagge});
    }
}

module.exports = {
  getPostImages,
  getPostImageById,
  deletePostImageById,
  updatePostImageById,
  //getPostImageWithPost,
  //getPostImageWithPostAndUser
};
