// Importing the router and all API routes
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

// Setting up the router
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

// Setting up a 404 error if the user tries to navigate to a route that doesn't exist
router.use((req, res) => {
    res.status(404).end();
});

// Exporting the router
module.exports = router;
