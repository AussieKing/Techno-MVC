
const { User } = require("../models");

const userData = [
  {
    username: "freddy",
    email: "freddy@example.com",
    password: "freddy123",
  },
  {
    username: "jane",
    email: "jane@example.com",
    password: "jane123",
  },
  {
    username: "michael",
    email: "michael@example.com",
    password: "mike123",
  },
  {
    username: "john",
    email: "john@example.com",
    password: "john123",
  },
  {
    username: "simone",
    email: "simone5@example.com",
    password: "simone123",
  },

];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
