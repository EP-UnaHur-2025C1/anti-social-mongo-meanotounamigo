const { Post, Tag } = require('../mongoSchemas');

const existsPostById = async (req, res, next) => {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ message: `El post con ID ${postId} no existe` });
  req.post = post;
  next();
};

const existsTagById = async (req, res, next) => {
  const { tagId } = req.params;
  const tag = await Tag.findById(tagId);
  if (!tag) return res.status(404).json({ message: `La etiqueta con ID ${tagId} no existe` });
  req.tag = tag;
  next();
};

const postHasTag = (req, res, next) => {
  const { tagId } = req.params;
  const tagExists = req.post.etiquetas.includes(tagId);
  if (tagExists) {
    return res.status(400).json({ message: `El post ya tiene asignada la etiqueta ${tagId}` });
  }
  next();
};

module.exports = { existsPostById, existsTagById, postHasTag };