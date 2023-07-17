const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//! IMPORTANT: This file is to create the associations between the models
// Create associations
User.hasMany(Post, {  
  foreignKey: "user_id", // The user has many posts, and the foreign key is the user_id
});

Post.belongsTo(User, {
  foreignKey: "user_id", // The post belongs to the user, and the foreign key is the user_id
});

Comment.belongsTo(User, {
  foreignKey: "user_id", // The comment belongs to the user, and the foreign key is the user_id
});

Comment.belongsTo(Post, {
  foreignKey: "post_id", // The comment belongs to the post, and the foreign key is the post_id
});

Post.hasMany(Comment, {
  foreignKey: "post_id", // The post has many comments, and the foreign key is the post_id
});

User.hasMany(Comment, {
  foreignKey: "user_id", // The user has many comments, and the foreign key is the user_id
});

module.exports = { User, Post, Comment };
