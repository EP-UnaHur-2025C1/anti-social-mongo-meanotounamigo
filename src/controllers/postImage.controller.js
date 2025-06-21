const { PostImage } = require('../mongoSchemas');

const getPostImages = async (_, res) => {
    const postImages = await PostImage.find({});
    res.status(200).json(postImages);
};

const getPostImageById = async (req, res) => {
  const postImage = req.postImage
  res.status(200).json(postImage);
};

const createPostImage = async (req, res) => {
    const newImage = await PostImage.create(req.body);
    res.status(201).json({ message: "Imagen creada con éxito", image: newImage });
}

const updatePostImageById = async (req, res) => {
    const { url } = req.body;
    const postImage = req.postImage;
    postImage.url = url;
    await postImage.save();
    res.status(200).json({message: 'La imagen fue actualizada'});
}

const deletePostImageById = async (req, res) => {
    await req.postImage.deleteOne();
    res.status(200).json({ message: 'Imagen eliminada con éxito' });
};

module.exports = {
  getPostImages,
  getPostImageById,
  createPostImage,
  updatePostImageById,
  deletePostImageById,
};