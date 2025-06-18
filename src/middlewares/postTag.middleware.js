const { Post, Tag } = require("../mongoSchemas")

const existsTagById = async (req, res, next) => {
  const { tagId } = req.params;
  const tag = await Tag.findById(tagId, {
    include: { model: Post, as: "posts" } // Cargar los posts en la consulta
  });

  if (!tag) {
    return res.status(404).json({ message: `La tag con ID ${tagId} no existe` });
  }

  req.tag = tag; // Guardar la tag con los posts cargados en req
  next();
};

const existsPostById = async (req, res, next) => {
  const { postId } = req.params;
  const post = await Post.findById(postId, {
    include: { model: Tag, as: "tags" } // Cargar los tags en la consulta
  });

  if (!post) {
    return res.status(404).json({ message: `El post con ID ${postId} no existe` });
  }
  req.post = post; // Guardar el post con los tags cargados en req
  next();
};

const tagAlreadyAssignedToPost = async (req, res, next) => {
  const { tagId } = req.params;
  const { tags } = req.post;
// Verificar si la tag ya está asociada al post
  const tagExists = tags.some(tag => tag.id === parseInt(tagId));
  if (tagExists) {
    return res.status(400).json({ message: `La tag con ID ${tagId} ya está asociada al post` });
  }
  next();
};

const postHasTag = async (req, res, next) => {
  const { tagId } = req.params;
  // Asegurar que `tags` está disponible en req.post
  await req.post.reload({ include: { model: Tag, as: "tags" } });
  const tagExists = req.post.tags.some(tag => tag.id === parseInt(tagId));

  if (tagExists) {
    return res.status(400).json({ message: `El post con ID ${req.post.id} ya tiene la tag con ID ${tagId}` });
  }

  next();
};

module.exports = { existsTagById, existsPostById, tagAlreadyAssignedToPost, postHasTag };