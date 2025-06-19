const { Router } = require("express");
const router = Router();
const { userController} = require("../controllers"); //, followerController
const { genericMiddleware} = require("../middlewares"); //, userPostComment,followerMiddleware 
const { userSchema} = require('../schemas'); //, postSchema, commentSchema 
const { User } = require("../mongoSchemas");

//CRUD
router.get("/", userController.getUsers);
router.get("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(User), userController.getUserById);
router.post("/", genericMiddleware.schemaValidator(userSchema), userController.createUser);
router.put("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(User), genericMiddleware.schemaValidator(userSchema), userController.updateUserById);
router.delete("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(User), userController.deleteUserById);

/*
//un usuario puede crear un post opcionalmente con imágenes, pero un post ya no puede ser creado sin un usuario.
router.post("/:id/post", genericMiddleware.validId, genericMiddleware.existsModelById(User), genericMiddleware.schemaValidator(postSchema), userController.userCreatePost);
router.get("/:id/post", genericMiddleware.validId, genericMiddleware.existsModelById(User), userController.getUserByIdWithPosts);
router.get("/:userId/post/:postId", genericMiddleware.validId, userPostComment.existsUserById, userPostComment.existsPostById, userController.getUserByIdWithAPost);
//un usuario puede eliminar un post
router.delete("/:userId/post/:postId", genericMiddleware.validId, userPostComment.existsUserById, userPostComment.existsPostById, userPostComment.postBelongToUser, userController.userDeletePostById);
//un usuario puede moficar su post
router.put('/:userId/post/:postId', genericMiddleware.validId, userPostComment.existsUserById, userPostComment.existsPostById, userPostComment.postBelongToUser ,userController.userUpdatePost);

//Un usuario puede comentar el post de otros usuarios o a su propio post
router.post("/:userId/post/:postId/comment", userPostComment.existsUserById, userPostComment.existsPostById, genericMiddleware.schemaValidator(commentSchema), userController.userCreateComment);
router.delete("/:userId/post/:postId/comment/:commentId", genericMiddleware.validId, userPostComment.existsUserById, userPostComment.existsPostById, userPostComment.existsCommentById, userPostComment.commentBelongToUser, userController.userDeleteCommentById);
router.put('/:userId/post/:postId/comment/:commentId', genericMiddleware.validId, userPostComment.existsUserById, userPostComment.existsPostById, userPostComment.existsCommentById, userPostComment.postBelongToUser, userController.userUpdateComment);
router.get('/:userId/post/:postId/comment/:commentId', genericMiddleware.validId, userPostComment.existsUserById, userPostComment.existsPostById, userPostComment.existsCommentById, userController.userGetComment);

// Un usuario puede manejar seguidores y seguidos
router.post("/:id/follow/:userToFollowId",genericMiddleware.validId,followerMiddleware.existsUser , followerMiddleware.existsUserToFollow, followerMiddleware.avoidAutoFollow, followerMiddleware.existsFollow,followerController.followUser);
router.delete('/:id/unfollow/:userToFollowId', genericMiddleware.validId, followerMiddleware.existsUser ,  followerMiddleware.existsUserToFollow, followerMiddleware.existsFollow, followerController.unfollowUser);
router.get('/:id/followers', genericMiddleware.validId, followerMiddleware.existsUser, followerController.getFollowers); // seguidores
router.get('/:id/following', genericMiddleware.validId, followerMiddleware.existsUser , followerController.getFollowing);  // seguidos
*/
module.exports = router;