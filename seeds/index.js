//! Creates the data for the database via synching the models and the database
const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

// create a function to seed all of the data using the models seeds
const seedAll = async () => {
  await sequelize.sync({ force: true });  // force: true drops the table and re-creates it
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n---- USERS SEEDED -----\n');
  await seedPosts();
  console.log('\n---- POSTS SEEDED -----\n');
  await seedComments();
  console.log('\n---- COMMENTS SEEDED -----\n');
  process.exit(0);
};

// call the function just created
seedAll();
