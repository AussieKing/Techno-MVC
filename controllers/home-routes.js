const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//! 1) Display the home page
router.get('/', async (req, res) => {
  try {
    // Get all posts by username data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Using the map method to loop over the array of posts and serialize each one. Then, we return the Sequelize object's data as plain objects.
    const posts = postData.map((post) => post.get({ plain: true }));  

    // Pass serialized data and session flag into template, if we have a logged in user, we pass the loggedIn flag as true to the template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//! 2) Displaying the single post page (via the id)
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {  // Find a single project by its `id`, include the user who posted it
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
            },
          ],
        }
      ],
    });

    // using the get method to serialize the data, or store it in a variable called post
    const posts = postData.get({ plain: true });

    res.render('post', {
      ...project,   // Spread operator to pass all of the data into the template
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//! 3) Displaying the dashboard page
// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {  
  try {
    const postData = await Post.findAll({  // Find all projects by the logged in user
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));  // Serialize data before passing to template

    res.render('dashboard', {  // Pass serialized data and session flag into template
      posts,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//! 4) Displaying the login page
// If the user is already logged in, redirect the request to the dashboard route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to the dashboard route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

//! 5) Displaying the signup page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) { 
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

//! 6) Display the new post page
router.get('/newpost', (req, res) => {
  if (req.session.logged_in) {  // If the user is already logged in, they can post
    res.render('newpost');
    return;
  }
});

//! 7) Display the edit post page
// We are using the withAuth middleware to ensure that only logged in users can edit a post
router.get('/editpost/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {  // Find a single project by its `id`, include the user who posted it
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
            },
          ],
        }
      ],
    });

    // using the get method to serialize the data, or store it in the post variable 
    const post = postData.get({ plain: true }); 
    
    // render the editpost template with the post data
    res.render('editpost', {
      ...post,  // Spread operator to pass all of the data into the template
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
