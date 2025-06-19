const { Router } = require ('express');
const router = Router();
const { postController } = require('../controllers');
const { genericMiddleware, postTagMiddleware } = require('../middlewares');
const { postSchema, postUpdateSchema } = require('../schemas');
const { Post } = require('../mongoSchemas');

// CRUD básico
router.get('/', postController.getPosts);
router.get('/:id', genericMiddleware.validId(), genericMiddleware.existsModelById(Post), postController.getPostById);
router.post("/", genericMiddleware.schemaValidator(postSchema), postController.createPost);
router.put('/:id', genericMiddleware.validId(), genericMiddleware.existsModelById(Post), genericMiddleware.schemaValidator(postUpdateSchema), postController.updatePostById);
router.delete('/:id', genericMiddleware.validId(), genericMiddleware.existsModelById(Post), postController.deletePostById);

//Se puede ver el usuario que realizó el post
/*router.get('/:id/user', genericMiddleware.validId, genericMiddleware.existsModelById(Post), postController.getPostWithUser);
//Mostrar todos los comentarios de post que no superen los 6 meses
router.get('/:id/comment', genericMiddleware.validId, genericMiddleware.existsModelById(Post), postController.getPostWithComments);
//Mostrar las imagenes asociadas
router.get('/:id/post-image', genericMiddleware.validId, genericMiddleware.existsModelById(Post), postController.getPostWithImages);
*/
router.post("/:postId/tag/:tagId", genericMiddleware.validId("postId"), genericMiddleware.validId("tagId"), postTagMiddleware.existsPostById, postTagMiddleware.existsTagById, postTagMiddleware.postHasTag, postController.assignTagToPost);
router.delete("/:postId/tag/:tagId", genericMiddleware.validId("postId"), genericMiddleware.validId("tagId"), postTagMiddleware.existsPostById, postTagMiddleware.existsTagById, postController.deleteTagFromPost);
router.get("/:postId/tag", genericMiddleware.validId("postId"), postTagMiddleware.existsPostById, postController.getTagsByPostId);

module.exports = router;