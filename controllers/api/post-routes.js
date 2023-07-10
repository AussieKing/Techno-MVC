const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//! 1) GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,  // for the User model
          attributes: ['username'],  // to get the username of the user
        }
      ]
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);  // 500 = Internal Server Error
  }
});

//! 2) GET a post by id via the username
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username'],
            }
          ]
        }
      ]
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with the id you have provided' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err); 
  }
});

//! 3) CREATE a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

//! 4) UPDATE a post by id
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedPost) {
      res.status(404).json({ message: 'No post found with the id you have provided' });
      return;
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//! 5) DELETE a post by user
router.delete('/:id', withAuth, async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        post_id: req.params.id,
      },
    });

    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedPost) {
      res.status(404).json({ message: 'No post found with the id you have provided' });
      return;
    }

    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
