//! CHECKS IF USER IS LOGGED IN

const withAuth = (req, res, next) => {  // middleware function if te user is logged in, continue with the request to the restricted route
  if (!req.session.logged_in) {
    res.redirect("/login");  // and if the user is not logged in, redirect the user to the login page
  } else {  // otherwise, continue with the request to the restricted route
    next();
  }
};

module.exports = withAuth;

