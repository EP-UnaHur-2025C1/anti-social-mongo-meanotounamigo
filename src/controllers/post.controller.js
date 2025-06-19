const { Post } = require('../mongoSchemas'); //User, Comment, PostImage

const getPosts = async ( _ , res) =>{
    const data = await Post.find({}).populate("etiquetas", "nombre");
    res.status(200).json(data);
};

const getPostById = async (req, res) =>{
    const data = await Post.findById(req.params.id);
    res.status(200).json(data);
};

const createPost = async (req, res) => {
    try{
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err){
        res.status(400).json({error: err.message});
    }
};

const updatePostById = async (req, res) => {
  const { descripcion, imagenes, etiquetas } = req.body;
  const post = await Post.findById(req.params.id);
  if (descripcion !== undefined) post.descripcion = descripcion;
  if (imagenes !== undefined) post.imagenes = imagenes;
  if (etiquetas !== undefined) post.etiquetas = etiquetas;
  await post.save();
  res.status(200).json({ message: 'El post fue actualizado correctamente' });
};

const deletePostById = async (req, res) =>{
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Post eliminado correctamente', post})
};

const assignTagToPost = async (req, res) => {
  const { tagId } = req.params;
  req.post.etiquetas.push(tagId);
  await req.post.save();
  res.status(200).json({ message: "Etiqueta agregada al post", post: req.post });
};

const deleteTagFromPost = async (req, res) => {
  const { tagId } = req.params;
  req.post.etiquetas = req.post.etiquetas.filter(
    (id) => id.toString() !== tagId
  );
  await req.post.save();
  res.status(200).json({ message: "Etiqueta eliminada del post", post: req.post });
};

const getTagsByPostId = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findById(postId).populate("etiquetas");
  res.status(200).json(post.etiquetas);
};

module.exports = { 
    getPosts, 
    getPostById, 
    createPost,
    deletePostById, 
    updatePostById, 
    //getPostWithUser, 
    //getPostWithComments, 
    //getPostWithImages, 
    assignTagToPost,
    deleteTagFromPost,
    getTagsByPostId 
};