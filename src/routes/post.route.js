const { Router } = require ('express');
const router = Router();
const { postController } = require('../controllers');
const { genericMiddleware, postTagMiddleware } = require('../middlewares');
const { postSchema, postUpdateSchema, tagAssignmentSchema } = require('../schemas');
const { Post } = require('../mongoSchemas');

// CRUD
router.get('/', postController.getPosts);
router.get('/:id', genericMiddleware.validId(), genericMiddleware.existsModelById(Post, "post"), postController.getPostById);
router.get('/:id/full', genericMiddleware.validId(), genericMiddleware.existsModelById(Post, "post"), postController.getPostWithAllInfo); 
router.post("/", genericMiddleware.schemaValidator(postSchema), postController.createPost);
router.put('/:id', genericMiddleware.validId(), genericMiddleware.existsModelById(Post, "post"), genericMiddleware.schemaValidator(postUpdateSchema), postController.updatePostById);
router.delete('/:id', genericMiddleware.validId(), genericMiddleware.existsModelById(Post, "post"), postController.deletePostById);

// Para asignar y eliminar etiquetas de posts
router.post("/:id/tag", genericMiddleware.validId(), genericMiddleware.existsModelById(Post, "post"), genericMiddleware.schemaValidator(tagAssignmentSchema), postTagMiddleware.preventDuplicateTag, postController.assignTagToPost);
router.delete("/:id/tag", genericMiddleware.validId(), genericMiddleware.existsModelById(Post, "post"), genericMiddleware.schemaValidator(tagAssignmentSchema), postTagMiddleware.requireExistingTag, postController.deleteTagFromPost);

module.exports = router;