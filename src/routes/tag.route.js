const { Router }= require('express')
const router = Router()
const { tagController} = require('../controllers');
const { genericMiddleware, postTagMiddleware } = require("../middlewares");
const { tagSchema }  = require('../schemas');
const { Tag } = require("../mongoSchemas");

router.get("/", tagController.getTags);
router.get("/:tagId/post", genericMiddleware.validId("tagId"), postTagMiddleware.existsTagById, tagController.getPostsByTagId);
router.get("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(Tag), tagController.getTagById);
router.post("/", genericMiddleware.schemaValidator(tagSchema), tagController.createTag);
router.put("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(Tag), genericMiddleware.schemaValidator(tagSchema), tagController.updateTagById);
router.delete("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(Tag), tagController.deleteTagById);

module.exports = router;