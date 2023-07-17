const { Post } = require("../models");

const postData = [
  {
    title: "Introduction to Artificial Intelligence",
    content: "In this blog post, we will explore the basics of Artificial Intelligence (AI) and its applications in various industries.",
    user_id: 1,
  },
  {
    title: "The Rise of Blockchain Technology",
    content: "Blockchain technology has gained significant popularity in recent years. In this post, we will discuss its underlying principles and potential use cases.",
    user_id: 2,
  },
  {
    title: "Machine Learning Algorithms: A Comprehensive Guide",
    content: "Machine learning algorithms are at the heart of many AI applications. This article will provide an overview of popular ML algorithms and their strengths.",
    user_id: 3,
  },
  {
    title: "Exploring Quantum Computing",
    content: "Quantum computing has the potential to revolutionize the field of computing. In this blog post, we will dive into the world of quantum mechanics and its implications for computing.",
    user_id: 4,
  },
  {
    title: "Cybersecurity Best Practices for Businesses",
    content: "In an increasingly connected world, cybersecurity is of utmost importance. This post will discuss essential security measures that businesses should implement to protect their data.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
