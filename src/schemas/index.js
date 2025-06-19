const postSchema = require("./post.create.schema");
const postUpdateSchema = require("./post.update.schema")
const postImageSchema = require("./postImageSchema");
const userSchema = require("./user.schema");
const commentSchema = require("./comment.schema");
const tagSchema = require("./tags.schema");

module.exports = {
    postSchema, 
    postUpdateSchema,
    postImageSchema, 
    userSchema, 
    commentSchema, 
    tagSchema
};