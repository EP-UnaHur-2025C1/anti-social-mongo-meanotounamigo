const { User, Post, Comment} = require("../mongoSchemas")

const existsUserById = async (req, res, next) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: `El usuario con ID ${userId} no existe` });
  }
  req.user = user; // guardo el usuario en req para usarlo después
  next();
};

const existsPostById = async (req, res, next) => {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ message: `El post con ID ${postId} no existe` });
  }
  req.post = post; // guardo el post en req para usarlo después
  next();
};

const existsCommentById = async (req, res, next) => {
  const { commentId } = req.params;
  const comment = await Comment.findById(commentId);
  if (!comment) {
    return res.status(404).json({ message: `El post con ID ${commentId} no existe` });
  }
  req.comment = comment; // guardo el comment en req para usarlo después
  next();
};

const postBelongToUser = async (req, res, next) => {
  const user = req.user;
  const post = req.post;

  if (post.userId !== user.id) {
    return res.status(403).json({ error: 'No tienes permiso para modificar este post' });
  }
  next();
};

const commentBelongToUser = async (req, res, next) => {
  const user = req.user;
  const comment = req.comment;

  if (comment.userId !== user.id) {
    return res.status(403).json({ error: 'No tienes permiso para modificar este comentario' });
  }
  next();
};


module.exports = { 
    existsUserById, 
    existsPostById, 
    existsCommentById, 
    postBelongToUser, 
    commentBelongToUser 
};