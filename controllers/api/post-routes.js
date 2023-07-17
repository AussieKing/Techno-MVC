const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//! GET request for ALL posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//! GET request for a SINGLE post
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {  // using the findByPk method to get a single post by its primary key
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "No post found, sorry!" });  // error message if no post is found
      return;
    }
    res.status(200).json(postData);  // if a post is found, return the post data
  } catch (err) {
    res.status(500).json(err);  // if there is an error, return the error
  }
});

//! POST request to create a new post with authenticated user (logged in)
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({  // using the create method to create a new post
      ...req.body,  // sprading the req.body to copy all properties
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//! PUT request to update a post with authenticated user
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedPost) {  // if there is no updated post, return an error message
      res.status(404).json({ message: "No post found, sorry!" });
      return;
    }
    res.status(200).json(updatedPost);  // otherwise, return the updated post
  } catch (err) {
    res.status(500).json(err);
  }
});

//! DELETE request to delete a post with authenticated user
router.delete("/:id", withAuth, async (req, res) => {
  try {
    await Comment.destroy({  // if a post is deleted, delete all comments associated with that post
      where: { post_id: req.params.id },
    });

    const deletedPost = await Post.destroy({  // delete the post
      where: { id: req.params.id },
    });

    if (!deletedPost) {  // if can't find the post, return an error message
      res.status(404).json({ message: "No post found, sorry!" });
      return;
    }
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
