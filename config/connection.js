//! STEP 1: Create a connection to the database and personal information is hidden in the .env file
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL 
  ? new Sequelize(process.env.JAWSDB_URL)
  // using JAWSDB for Heroku deployment and local MySQL database for local development 
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
