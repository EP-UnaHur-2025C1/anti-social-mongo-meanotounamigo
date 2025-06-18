const genericMiddleware = require("./generic.middleware");
const userPostComment = require("./userPostComment.middleware");
const followerMiddleware = require("./follower.middleware");
const postTagMiddleware = require("./postTag.middleware")

module.exports = { 
    genericMiddleware, 
    followerMiddleware,
    userPostComment, 
    postTagMiddleware 
};