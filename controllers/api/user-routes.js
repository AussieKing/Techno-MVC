const router = require("express").Router();
const { User } = require("../../models");

//! GET request to find ALL users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },  // excluding the password field from the response
  })
    .then((dbUserData) => res.json(dbUserData))  // returning the user data as JSON
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//! POST request to create a new user
router.post("/signup", async (req, res) => {  // assigning the async function to the POST request and the signup route
  try {
    const newUser = new User();
    newUser.username = req.body.username;  // assigning the username, email, and password from the req.body
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    const userData = await newUser.save();  // saving the new user data

    req.session.save(() => {  // saving the session as the user_id and logged_in for cookies
      req.session.user_id = userData.id;  // setting the user_id to the id of the user
      req.session.logged_in = true; // setting the logged_in to true so the user can access the site

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//! POST request to login a user
router.post("/login", async (req, res) => {  // posting in the login route
  try {
    const userData = await User.findOne({ where: { username: req.body.username } }); // finding the user by the username

    if (!userData) {  // if there is no user with that username, return an error message
      res
        .status(400)
        .json({ message: "Username/Password combination not found" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);  // checking the password using the checkPassword method from the User model

    if (!validPassword) {  // if the password is not valid, return an error message
      res
        .status(400)
        .json({ message: "Username/Password combination not found" });
      return;
    }

    req.session.save(() => {  // if the password is valid, save the session as the user_id and logged_in for cookies
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res
        .status(200)
        .json({ user: userData, message: "You're logged in!" });  // returning the user data and a message that the user is logged in
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//! POST request to logout a user
router.post("/logout", (req, res) => {  // posting in the logout route
  if (req.session.logged_in) {  // if the user is logged in, destroy the session and return a 204 status
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();  // otherwise, return a 404 status
  }
});

module.exports = router;
