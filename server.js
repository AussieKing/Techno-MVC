//! SERVER.JS IS THE ENTRY POINT FOR THE APPLICATION
// Requiring necessary npm packages and files
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers: require("./utils/helpers") });

// Declaring the app variable and setting up port 3001 for server
const app = express();
const PORT = process.env.PORT || 3001;

// Session is a middleware that allows us to store session data on the client side using cookies
const sess = {
  secret: 'Secret session key',
  cookie: {}, // {} means that the cookie will expire at the end of the session (when the browser is closed) 
  resave: false,  // Forces the session to be saved back to the session store, even if the session was never modified during the request
  saveUninitialized: true,  // Forces a session that is "uninitialized" to be saved to the store
  store: new SequelizeStore({  // Store is where the session data is held
    db: sequelize,  
  }),
};

// Tells the app to use the session middleware
app.use(session(sess));

// Setting up middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up middleware for static assets and handlebars engine
app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Setting up middleware for routes
app.use(
  session({
    secret: process.env.SECRET,  // Secret is used to sign the session ID cookie
    store: new SequelizeStore({ db: sequelize }),  // Store is where the session data is held
    resave: false,  // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false,  // Forces a session that is "uninitialized" to be saved to the store
  })
);

// tells the app to use the routes
app.use(routes);

// and finally, we sync our sequelize models to the database, then turn on the server (IMPORTANT!)
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});