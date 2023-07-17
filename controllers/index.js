const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

//! declaring the routes to use
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
