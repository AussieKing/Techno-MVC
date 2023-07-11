//! CHECKS IF USER IS LOGGED IN
const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next(); // If the user is logged in, execute the route function that will allow them to view the page
  }
};

module.exports = withAuth;
