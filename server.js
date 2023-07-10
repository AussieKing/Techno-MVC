const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'ABCDEFG',
  cookie: {
    maxAge: 300000, // 5 minutes
    httpOnly: true, // means that the cookie is not accessible via JavaScript
    secure: false, // means that the cookie will only be used over HTTPS (not HTTP)
    sameSite: 'lax', // meaning that the cookie can only be accessed on pages that were loaded from the same domain
  },
  resave: false, // forces the session to be saved back to the session store, even if the session was never modified during the request
  saveUninitialized: true, // forces a session that is "uninitialized" to be saved to the store
  store: new SequelizeStore({
    db: sequelize
  }) // tells the session to store the session data in our Sequelize database
};

// tells our application to use the session package
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
