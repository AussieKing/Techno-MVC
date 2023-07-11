//! CREATING SEED DATA FOR COMMENTS
const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "I think AI is the future, if used right!",
        user_id: 1,
        post_id: 1
    },

    {
        comment_text: "Becoming a Dev definitely helps you prepare on what's coming, for sure.",
        user_id: 2,
        post_id: 2
    },

    {
        comment_text: "I think it's a great idea to learn how to code, but it's not for everyone.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;