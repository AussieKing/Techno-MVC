//! API Routes for Comments
// Import the express router and the models
const router = require("express").Router();
const { Comment } = require("../../models");  // using the Comment model
const withAuth = require("../../utils/auth");  // using the withAuth middleware (for when a user is logged in)

//! GET request for all comments
router.post("/", withAuth, async (req, res) => {  // try catch method to get all comments
  try {    
    const newComment = await Comment.create({
      ...req.body,  // ... spread operator to copy all properties from req.body
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);  // passing the new comment as JSON
  } catch (err) {
    res.status(400).json(err);  // if there is an error, return the error
  }
});

module.exports = router;
