const { Router } = require('express');
const router = Router();
const { postImageController } = require('../controllers');
const { genericMiddleware } = require('../middlewares');
const { postImageSchema } = require('../schemas');
const { PostImage } = require('../mongoSchemas');

// CRUD
router.get('/', postImageController.getPostImages);
router.get('/:id', genericMiddleware.validId(), genericMiddleware.existsModelById(PostImage, "postImage"), postImageController.getPostImageById);
router.post('/', genericMiddleware.schemaValidator(postImageSchema), postImageController.createPostImage);
router.put('/:id', genericMiddleware.validId(), genericMiddleware.existsModelById(PostImage, "postImage"), genericMiddleware.schemaValidator(postImageSchema), postImageController.updatePostImageById);
router.delete('/:id', genericMiddleware.validId(), genericMiddleware.existsModelById(PostImage, "postImage"), postImageController.deletePostImageById);

module.exports = router;