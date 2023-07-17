const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//! GET request for ALL posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({  // finding all posts with the findAll method by searching the user model
      include: [{ model: User, attributes: ["username"] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));  // mapping over the posts and returning the post data as plain JavaScript objects

    res.render("homepage", {  // rendering the homepage template with the posts and login status
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//! GET request for a SINGLE post
router.get("/post/:id", withAuth, async (req, res) => {
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
    const post = postData.get({ plain: true });

    res.render("post", {  // once the post is found, render the post template with the post data and login status
      ...post,  // and spread the post data into the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//! GET request for ALL posts by a SINGLE user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({  // finding all posts with the findAll method by searching the user model
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ["username"] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));  // and mapping over the posts and returning the post data as plain JavaScript objects

    res.render("dashboard", {  // redering the dashboard template with the posts and login status
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//! GET request for the login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {  // if the user is logged in, redirect them to the dashboard
    res.redirect("/dashboard");
    return;
  }
  res.render("login");  // otherwise, render the login template
});

//! GET request for the signup page
router.get("/signup", (req, res) => {  // if the user is logged in, redirect them to the dashboard
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");  // otherwise, render the signup template
});

//! GET request for the new post page
router.get("/newpost", (req, res) => {  // if the user is logged in, render the new post template
  if (req.session.logged_in) {
    res.render("newpost"); 
    return;
  }
  res.redirect("/login");  // otherwise, redirect them to the login page
});


//! GET request for the edit post page 
router.get("/editpost/:id", async (req, res) => {  // if the user is logged in, render the edit post template using the :id parameter from the URL
  try {
    const postData = await Post.findByPk(req.params.id, {  // we have to use the findByPk method to get a single post by its primary key
      include: [
        { model: User, attributes: ["username"] }, // and include the user model
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });

    const post = postData.get({ plain: true }); // and get the post data as a plain JavaScript object

    res.render("editpost", {   // then render the edit post template with the post data and login status
      ...post,    // and spread the post data into the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
