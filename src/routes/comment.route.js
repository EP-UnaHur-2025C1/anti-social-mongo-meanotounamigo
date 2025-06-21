const { Router } = require("express");
const router = Router();
const { Comment } = require('../mongoSchemas');
const { commentController } = require("../controllers");
const { commentCreateSchema, commentUpdateSchema } = require('../schemas');
const { genericMiddleware } = require("../middlewares");

// CRUD
router.post("/", genericMiddleware.schemaValidator(commentCreateSchema), commentController.createComment);
router.get("/", commentController.getComments);
router.get("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(Comment, "comment"), commentController.getCommentById);
router.put("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(Comment, "comment"), genericMiddleware.schemaValidator(commentUpdateSchema), commentController.updateCommentById)
router.delete("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(Comment, "comment"), commentController.deleteCommentById);

module.exports = router;