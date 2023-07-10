// To handle the routes for comments
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//! 1) Create a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,  // Spread operator to pass all of the data into the template
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
