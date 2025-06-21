const { Router }= require('express')
const router = Router()
const { tagController} = require('../controllers');
const { genericMiddleware } = require("../middlewares");
const { tagSchema }  = require('../schemas');
const { Tag } = require("../mongoSchemas");

router.get("/", tagController.getTags);
router.get("/:id/post", genericMiddleware.validId(), genericMiddleware.existsModelById(Tag, "tag"), tagController.getPostsByTagId);
router.get("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(Tag, "tag"), tagController.getTagById);
router.post("/", genericMiddleware.schemaValidator(tagSchema), tagController.createTag);
router.put("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(Tag, "tag"), genericMiddleware.schemaValidator(tagSchema), tagController.updateTagById);
router.delete("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(Tag, "tag"), tagController.deleteTagById);

module.exports = router;