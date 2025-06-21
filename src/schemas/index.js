const postSchema = require("./post.create.schema");
const postUpdateSchema = require("./post.update.schema")
const commentCreateSchema = require("./comment.create.schema")
const commentUpdateSchema = require("./comment.update.schema")
const postImageSchema = require("./postImageSchema");
const userSchema = require("./user.schema");
const tagSchema = require("./tags.schema");
const tagAssignmentSchema = require("./tagAssigment.schema");

module.exports = {
    postSchema, 
    postUpdateSchema,
    postImageSchema, 
    userSchema, 
    commentCreateSchema,
    commentUpdateSchema,
    tagSchema,
    tagAssignmentSchema
};