//! CREATING SEED DATA FOR POSTS
const { Post } = require('../models');

const postData = [
    {
        title: "AI is the future",
        content: "AI: what to expect in the future",
        user_id: 1
    },

    {
        title: "How to prepare for the future",
        content: "How to prepare for the future of AI",
        user_id: 2
    },

    {
        title: "Is coding for everyone?",
        content: "Is coding for everyone? Let's find out!",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
