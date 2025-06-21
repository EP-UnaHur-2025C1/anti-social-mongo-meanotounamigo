const { Router } = require("express");
const router = Router();
const { userController} = require("../controllers"); //followerController
const { genericMiddleware} = require("../middlewares"); //followerMiddleware
const { userSchema} = require('../schemas');
const { User } = require("../mongoSchemas");

//CRUD
router.get("/", userController.getUsers);
router.get("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(User, "user"), userController.getUserById);
router.post("/", genericMiddleware.schemaValidator(userSchema), userController.createUser);
router.put("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(User, "user"), genericMiddleware.schemaValidator(userSchema), userController.updateUserById);
router.delete("/:id", genericMiddleware.validId(), genericMiddleware.existsModelById(User, "user"), userController.deleteUserById);

/*
// Un usuario puede manejar seguidores y seguidos
router.post("/:id/follow/:userToFollowId",genericMiddleware.validId,followerMiddleware.existsUser , followerMiddleware.existsUserToFollow, followerMiddleware.avoidAutoFollow, followerMiddleware.existsFollow,followerController.followUser);
router.delete('/:id/unfollow/:userToFollowId', genericMiddleware.validId, followerMiddleware.existsUser ,  followerMiddleware.existsUserToFollow, followerMiddleware.existsFollow, followerController.unfollowUser);
router.get('/:id/followers', genericMiddleware.validId, followerMiddleware.existsUser, followerController.getFollowers); // seguidores
router.get('/:id/following', genericMiddleware.validId, followerMiddleware.existsUser , followerController.getFollowing);  // seguidos
*/
module.exports = router;