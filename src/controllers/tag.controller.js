const  { Tag, Post } = require('../mongoSchemas')

const getTags = async ( _ , res) =>{
    const tags = await Tag.find({});
    res.status(200).json(tags);
};

const getTagById = async (req, res) =>{
    const tag = req.tag;
    res.status(200).json(tag);
};

const createTag = async (req, res) =>{
    const newTag = new Tag(req.body);
    await newTag.save();
    res.status(201).json(newTag);
};

const updateTagById = async (req, res) =>{
    const {nombre} = req.body;
    const tag = req.tag;
    tag.nombre = nombre;
    await tag.save();
    res.status(200).json({message: 'Etiqueta actualizada correctamente', tag});
};

const deleteTagById = async (req, res) => {
  await req.tag.deleteOne();
  res.status(200).json({ message: "Etiqueta eliminada correctamente" });
};

const getPostsByTagId = async (req, res) => {
  const tag = req.tag;
  const posts = await Post.find({ etiquetas: tag._id });
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