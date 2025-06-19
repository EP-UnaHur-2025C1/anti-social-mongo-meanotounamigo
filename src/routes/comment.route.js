/*const { Router } = require("express");
const router = Router();
const { Comment } = require('../mongoSchemas');
const { commentController } = require("../controllers");
const { commentSchema } = require('../schemas');
const { genericMiddleware } = require("../middlewares");

// CRUD sin create porque se supone que lo hace el usuario
router.get("/", commentController.getComments);
router.get("/:id",genericMiddleware.validId, genericMiddleware.existsModelById(Comment), commentController.getCommentById);
router.put("/:id", genericMiddleware.validId, genericMiddleware.existsModelById(Comment), commentController.updateCommentById)
router.delete("/:id", genericMiddleware.validId, genericMiddleware.existsModelById(Comment), commentController.deleteCommentById);

// Post al que pertenece un comentario
router.get("/:id/post",genericMiddleware.validId, genericMiddleware.existsModelById(Comment), commentController.getCommentWithPost);

//Puedo ver el post y usuario al cual pertenece la imagen
router.get('/:id/post/user', genericMiddleware.validId, genericMiddleware.existsModelById(Comment), commentController.getCommentWithPostAndUser);

module.exports = router;*/