//! CREATING SEED DATA FOR USERS
const { User } = require('../models');

const userData = [
    {
        username: "johndoe",
        email: "johndoe@test.com",
        password: "password123"
    },

    {
        username: "janedoe",
        email: "janedoe@jest.com.au",
        password: "password321"
    },

    {
        username: "jimdoe",
        email: "jimdoe@zumba.com",
        password: "password456"
    }
];

// bulkCreate() is a Sequelize method that takes in an array of data and creates records in the database
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
