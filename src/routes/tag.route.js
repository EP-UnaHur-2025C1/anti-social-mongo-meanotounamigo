const {Router}= require('express')
const router = Router()
const { tagController} = require('../controllers');
const { genericMiddleware, postTagMiddleware } = require("../middlewares");
const {Tag} = require("../mongoSchemas");
const {tagSchema}  = require('../schemas'); 

router.get("/", tagController.getTags);

router.get("/:id", 
    genericMiddleware.validId,
    genericMiddleware.existsModelById(Tag), 
    tagController.getTagById);

router.post("/", 
    genericMiddleware.schemaValidator(tagSchema),
    tagController.createTag);

router.put("/:id", 
    genericMiddleware.validId,
    genericMiddleware.existsModelById(Tag), 
    tagController.updateTagByID);

router.delete("/:id", 
    genericMiddleware.validId,
    genericMiddleware.existsModelById(Tag), 
    tagController.deleteTagByID);

router.post("/:tagId/post/:postId",
    genericMiddleware.validId,
    postTagMiddleware.existsTagById,
    postTagMiddleware.existsPostById,
    postTagMiddleware.tagAlreadyAssignedToPost,
    tagController.assignTagToPost
);

router.delete("/:tagId/post/:postId",
    genericMiddleware.validId,
    postTagMiddleware.existsTagById,
    postTagMiddleware.existsPostById,
    tagController.deletePostFromTag
);

router.get("/:tagId/post", 
    genericMiddleware.validId, 
    postTagMiddleware.existsTagById, // Ya carga los Posts en req.tag
    tagController.getPostsByTagId
);

module.exports = router;