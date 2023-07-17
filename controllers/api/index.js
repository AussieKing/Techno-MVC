//! STEP 1: import the routes
const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

// Defining the routes to USE for users, posts, and comments
router.use("/users", userRoutes); 
router.use("/posts", postRoutes); 
router.use("/comments", commentRoutes); 

module.exports = router;
