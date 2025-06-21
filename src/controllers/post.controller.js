const { Post, Comment } = require('../mongoSchemas');
const { seisMesesAtras } = require("../utils/dateHelpers");
const { deleteAssociatedPostData } = require('../utils/postCascadeHelpers');

const getPosts = async ( _ , res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
};

//Devuelve toda la información con el control de los cometarios antiguos incluido
const getPostWithAllInfo = async (req, res) => {
  const comentarios = await Comment.find({
    post: req.post._id,
    fecha: { $gte: seisMesesAtras() }
  }).populate("user", "nombre"); // si querés autor

  await req.post.populate("user", "nombre email");
  await req.post.populate("etiquetas", "nombre");
  await req.post.populate("imagenes");

  const postConComentarios = req.post.toObject();
  postConComentarios.comentarios = comentarios;

  res.status(200).json(postConComentarios);
};

const getPostById = async (req, res) =>{
    const post = req.post;
    res.status(200).json(post);
};

const createPost = async (req, res) => {
    const postData = {
      ...req.body, //Desarma todo lo que venga en el body
      fecha: req.body.fecha || new Date().toISOString().slice(0, 10) //como la fecha es opcional si viene vacia se completa con la fecha actual
    };
    const newPost = await Post.create(postData);
    res.status(201).json(newPost);
};

const updatePostById = async (req, res) => {
  const { descripcion, imagenes, etiquetas, fecha } = req.body;
  const post = req.post;
  if (descripcion !== undefined) post.descripcion = descripcion;
  if (imagenes !== undefined) post.imagenes = imagenes;
  if (etiquetas !== undefined) post.etiquetas = etiquetas;
  if (fecha !== undefined) post.fecha = fecha;
  await post.save();
  res.status(200).json({ message: "El post fue actualizado correctamente", post });
};

const deletePostById = async (req, res) => {
  try {
    await deleteAssociatedPostData(req.post);
    await req.post.deleteOne();
    res.status(200).json({ message: "Post y datos asociados eliminados correctamente" });
  } catch (err) {
    console.error("Error al eliminar el post:", err);
    res.status(500).json({ error: "No se pudo eliminar el post y sus datos relacionados" });
  }
};


const assignTagToPost = async (req, res) => {
  req.post.etiquetas.push(req.body.tagId);
  await req.post.save();
  res.status(200).json({ message: "Etiqueta agregada al post", post: req.post });
};

const deleteTagFromPost = async (req, res) => {
  req.post.etiquetas = req.post.etiquetas.filter(
    id => id.toString() !== req.body.tagId
  );
  await req.post.save();
  res.status(200).json({ message: "Etiqueta eliminada del post", post: req.post });
};

const assignImagesToPost = async (req, res) => {
  const { imageIds } = req.body;
  req.post.imagenes.push(...imageIds);
  await req.post.save();
  res.status(200).json({
    message: "Imágenes asociadas correctamente al post",
    post: req.post,
  });
};

const deleteImagesFromPost = async (req, res) => {
  const { imageIds } = req.body;
  req.post.imagenes = req.post.imagenes.filter(
    id => !imageIds.includes(id.toString())
  );
  await req.post.save();
  res.status(200).json({
    message: "Imágenes eliminadas del post correctamente",
    post: req.post,
  });
};

module.exports = { 
    getPosts,
    getPostWithAllInfo,
    getPostById, 
    createPost,
    deletePostById, 
    updatePostById,
    assignTagToPost,
    deleteTagFromPost,
    assignImagesToPost,
    deleteImagesFromPost
};