// Defining the routes for the API
const router = require('express').Router();
const userRoutes = require('./user-routes');  // for the user-routes.js file
const postRoutes = require('./post-routes');  // for the post-routes.js file
const commentRoutes = require('./comment-routes');  // for the comment-routes.js file

// Adding the routes to the router
router.use('comments', commentRoutes);  // for comments related routes
router.use('/users', userRoutes);  // for users related functions
router.use('/posts', postRoutes);  // for posts related routes

module.exports = router;
