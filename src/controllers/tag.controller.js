const  { Tag, Post } = require('../mongoSchemas')

const getTags = async ( _ , res) =>{
    const data = await Tag.find({});
    res.status(200).json(data);
};

const getTagById = async (req, res) =>{
    const data = await Tag.findById(req.params.id);
    res.status(200).json(data);
};

const createTag = async (req, res) =>{
    try{
        const newTag = new Tag(req.body);
        await newTag.save();
        res.status(201).json(newTag);
    } catch (err){
        res.status(400).json({error: err.message});
    }
};

const updateTagById = async (req, res) =>{
    const {nombre} = req.body;
    const tag = await Tag.findById(req.params.id);
    tag.nombre = nombre;
    await tag.save();
    res.status(200).json({message: 'Tag actualizado correctamente', tag});
};

const deleteTagById = async (req, res) => {
  const tag = await Tag.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: 'Tag eliminada correctamente', tag });
};

const getPostsByTagId = async (req, res) => {
  const { tagId } = req.params;
  const posts = await Post.find({ etiquetas: tagId });
  res.status(200).json(posts);
};

module.exports = { 
    getTags, 
    getTagById, 
    createTag, 
    updateTagById, 
    deleteTagById,
    getPostsByTagId
}