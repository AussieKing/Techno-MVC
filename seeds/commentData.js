const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "This article provided valuable insights. Well done!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I found your analysis to be thorough and accurate.",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "I have a different perspective on this topic. Let's discuss!",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Your points are well-reasoned and convincing.",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "I appreciate your effort in researching and presenting this information.",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "I enjoyed reading your second blog post. Keep up the good work!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Your insights align with my own thoughts on the subject.",
    user_id: 2,
    post_id: 2,
  }
];


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
