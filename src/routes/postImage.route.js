/*const { Router } = require('express');
const router = Router();
const { postImageController } = require('../controllers');
const { genericMiddleware } = require('../middlewares');
const { postImageSchema } = require('../schemas');
const { PostImage } = require('../mongoSchemas');

// CRUD pero sin Create porque se supone que lo hace un usuario a través de un post y es opcional
router.get('/', postImageController.getPostImages);
router.get('/:id', genericMiddleware.validId, genericMiddleware.existsModelById(PostImage), postImageController.getPostImageById);
router.put('/:id', genericMiddleware.validId, genericMiddleware.existsModelById(PostImage), genericMiddleware.schemaValidator(postImageSchema), postImageController.updatePostImageById);
router.delete('/:id', genericMiddleware.validId, genericMiddleware.existsModelById(PostImage), postImageController.deletePostImageById);

// Puedo ver a qupe post pertenece una imagen
router.get('/:id/post', genericMiddleware.validId, genericMiddleware.existsModelById(PostImage), postImageController.getPostImageWithPost);

//Puedo ver el post y usuario al cual pertenece la imagen
router.get('/:id/post/user', genericMiddleware.validId, genericMiddleware.existsModelById(PostImage), postImageController.getPostImageWithPostAndUser);

module.exports = router;*/