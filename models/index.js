// Import the models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, { // What is the relationship between the models?
  foreignKey: "user_id", // foreign key is the matching key in the other model
});

Post.belongsTo(User, {  // `Post` belongs to `User` through `user_id`
  foreignKey: "user_id", 
});

Comment.belongsTo(User, {  // `Comment` belongs to `User` through `user_id`
  foreignKey: "user_id", 
});

Comment.belongsTo(Post, {  // `Comment` belongs to `Post` through `post_id`
  foreignKey: "post_id", 
});

Post.hasMany(Comment, {  // `Post` has many `Comment`s through `post_id`
  foreignKey: "post_id", 
});

User.hasMany(Comment, {  // `User` has many `Comment`s through `user_id`
  foreignKey: "user_id", 
});

module.exports = { User, Post, Comment };