// //! SEED
// // Declaring the seed functions for each of the models
// const seedUsers = require("./userData");
// const seedPosts = require("./postData");
// const seedComments = require("./commentData");

// const sequelize = require("../config/connection");

// const seedAll = async () => {  // seeding all of the models by using the sync method
//   await sequelize.sync({ force: true });  // passing in the force: true option as an object to drop all of the tables in the database and re-create them  when the application starts
//   await seedUsers();
//   await seedPosts();
//   await seedComments();
//   process.exit(0);  // once the seeding is complete, exit the process
// };

// seedAll(); // Don't forget to call the function!

// Importing the seed data functions
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

const sequelize = require("../config/connection");

const seedAll = async () => {

  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();
