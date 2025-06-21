const { Post, Comment, PostImage } = require('../mongoSchemas');

const deleteUserRelatedData = async (userId) => {
  try {
    await Post.deleteMany({ user: userId });
    await Comment.deleteMany({ user: userId });
    await PostImage.deleteMany({ user: userId });
  } catch (err) {
    console.error("Error al eliminar datos relacionados al usuario:", err);
    throw err;
  }
};

module.exports = { deleteUserRelatedData };