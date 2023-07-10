const router = require('express').Router();
const { User } = require('../../models');

//! 1) GET all users
// getting all users, excluding the password attribute and returning the rest. 
router.get('/', async (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//! 2) POST request to Create a new user
// creating a new user by passing in the username, email and password
router.post('/signup', async (req, res) => {
  try {
    const newUser = new User();   // creating a new user object
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.save(function (err, savedUser) { // here we are saving the user to the database
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      return res.status(200).send();
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


//! POST route request to login
// logging in a user by finding the user by email and checking the password
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } }); // finding the user by email
    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password); // checking the password
    if (!validPassword) {   // if the password is not valid, return an error
      res.status(400).json({ message: 'Incorrect password/email, please try again!' });
      return;
    }
    req.session.save(() => { // saving the session in the database
      req.session.user_id = userData.id;
      req.session.logged_in = true;  // setting the logged_in to true
      res.json({ user: userData, message: 'You have successfully logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


//! POST route request to logout
// logging out a user by destroying the session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {  // if the user is logged in, destroy the session
    req.session.destroy(() => {
      res.status(204).end(); // sending a 204 status
    });
  } else {  // otherwise, return a 404 status
    res.status(404).end();
  }
});

module.exports = router;
