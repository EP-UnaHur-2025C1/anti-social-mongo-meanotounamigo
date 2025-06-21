const genericMiddleware = require("./generic.middleware");
const followerMiddleware = require("./follower.middleware");
const postTagMiddleware = require("./postTag.middleware")

module.exports = { 
    genericMiddleware, 
    followerMiddleware, 
    postTagMiddleware 
};