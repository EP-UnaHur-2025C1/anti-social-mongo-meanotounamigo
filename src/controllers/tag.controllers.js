const  { Tag, Post} = require("../bd/models")

const getTags = async (req, res) =>{
    try{
        const data = await Tag.find({});
        res.status(200).json(data);
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

const getTagById = async (req, res) =>{
    try{
        const data = await Tag.findById(req.params.id);
        if (!data) return res.status(404).json({message: 'El Tag ${data} no encontrado'});
    } catch (err){
        res.status(500).json({error: err.mesagge});
    }
};

const createTag = async (req, res) =>{
    try{
        const newTag = new Tag(req.body);
        await newTag.save();
        res.status(201).json(newTag);
    } catch (err){
        res.status(400).json({error: err.mesagge});
    }
};

const updateTagById = async (req, res) =>{
    try{
        const tag = await Tag.findById(req.params.id);
        if (!tag) return res.status(404).json({message: 'El Tag ${tag} no encontrado'});

        tag.nombre = req.body.nombre;
        await tag.save()
        res.status(200).json({message: 'El Tag ${tag} fue actualizado'});
    }catch (err){
        res.status(400).json({error: err.mesagge});
    }
};

const deleteTagById = async (req, res) =>{
    try{
        const tag = await Tag.findByIdAndDelete(req.params.id);
        if (!tag) return res.status(404).json({message: 'El Tag ${tag} no encontrado'});
    } catch (err){
        res.status(400).json({error: err.mesagge});
    }
}

module.exports = { getTags, getTagById, createTag, updateTagById, deleteTagById }