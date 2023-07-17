# Techno MVC: a Tech Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description:
The application is a CMS-style platform whose purpose is to be a blog. It allows people who share a common interest in tech to write and read about it. Techno MVC was Technologies using the Model Controller View model, uses Express.js for authentication, Handlebars.js to render pages, and the chosen ORM is Sequelize.

## Table of Contents:
- [Overview](#Overview)
- [The task](#The-task)
- [Information](#Information)
- [Visuals](#Visuals)
- [Installation](#Installation)
- [Technologies Used](#Technologies-Used)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview

## The task:

We were tasked to build an MVC style blog that focuses on Technology. 
The app needed to allow for authentication (login), CRUD operations, and the ability to comment on other users' posts.
We also had to use the MVC paradigm in our application's architectural structure, as well as use Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Assigned User Story:
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Acceptance Criteria:
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

## Visuals:
### Walkthrough Video and Screenshots:
Here you will be able to see a walkthrough video of the application and screenshots of the deployed application.
[Walkthrough Video](https://drive.google.com/file/d/1fWnqkL1DV0i4V25793N6_kfZZu6JpXEp/view)

### Homepage
![Screen Shot 2023-07-17 at 8 15 53 pm](https://github.com/AussieKing/Techno-MVC/assets/126050763/1d8670f4-6c66-4eaf-a44d-1f0bb9d42d85)

### Sign up
![Screen Shot 2023-07-17 at 8 16 12 pm](https://github.com/AussieKing/Techno-MVC/assets/126050763/135f54ab-73e3-468e-8258-9c53d4a6ceff)

### Login
![Screen Shot 2023-07-17 at 8 16 28 pm](https://github.com/AussieKing/Techno-MVC/assets/126050763/c3ec90cd-69a7-4aee-a901-87da967516c7)

### Dashboard
![Screen Shot 2023-07-17 at 8 16 54 pm](https://github.com/AussieKing/Techno-MVC/assets/126050763/8dfff8b4-7a34-4fa5-9f8f-6571b1c6bb66)

### Create new post
![Screen Shot 2023-07-17 at 8 17 17 pm](https://github.com/AussieKing/Techno-MVC/assets/126050763/58678758-b294-46c2-ae85-96f67533befa)

### Edit/Delete post options
![Screen Shot 2023-07-17 at 8 17 27 pm](https://github.com/AussieKing/Techno-MVC/assets/126050763/9c87477a-37f1-4fbd-8736-d59eb4a33c47)

### Edit post
![Screen Shot 2023-07-17 at 8 17 39 pm](https://github.com/AussieKing/Techno-MVC/assets/126050763/ea6aab68-cc09-4fe5-a186-4f9cf13c724d)



## Instructions:
1. If you do not have an account, you will need to create one. Click on "Sign Up", enter a Username, Email and Password combination and then click "Sign Up".
1. If you already have an account, click on "Login" and enter your Username and Password combination.
2. Once you have an account/are logged in, you can create blog posts, comment on other people' posts and delete your own posts.
3. How to Create a new post: head to the "dashboard" and click "Create a New Post."
4. Fill out the content of your post (title, content) and click "Create Post" to publish the post.
5. To comment, click on any blog post and scroll to the bottom of the page. Enter your comment and click "Add Comment".
7. To Edit and/or delete your post, head to the "dashboard" and select the post you wish to edit or delete.
8. You can also view all posts in "Home".
9. To Log out, simply click on "logout" in the top menu.

## Deployed Application Link:
[Deployed Application](https://technoblog-mvc-e8059046d77a.herokuapp.com/)

## GitHub Repository:
[GitHub Repo](https://github.com/AussieKing/Techno-MVC)

## Installation
1. Clone the Repository from [GitHub](https://github.com/AussieKing/Techno-MVC)
2. Install the required dependencies using the following command:
```npm install``` 
3. Create a .env file in the root of the cloned repository with your MySQL credentials.
4. Create the database using the following command:
```mysql -u root -p``` followed by your MySQL password and ```source schema.sql```
5. Run the following command to seed the database:
```npm run seed```
6. Run the following command to start the application:
```npm start```
7. Navigate to http://localhost:3001/ in your browser to use the application.

## Technologies Used:
- Node.js [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Express.js:[Express.js](https://expressjs.com/en/starter/installing.html)
- Bcrypt: [4.0.1](https://www.npmjs.com)
- Connect Session Store using Sequelizez: [Connect Session Store using Sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- Dotenv: [8.2.0](https://www.npmjs.com/package/dotenv)
- Express: [4.17.1](https://www.npmjs.com/package/express)
- Express Handlebars: [5.2.0](https://www.npmjs.com/package/express-handlebars)
- Express-Session: [1.17.1](https://www.npmjs.com/package/express-session)
- Handlebars.js: [4.7.7](https://www.npmjs.com/package/handlebars)
- Node MySql2: [2.2.5](https://www.npmjs.com/package/mysql2)
- Sequelize: [6.3.5](https://www.npmjs.com/package/sequelize)
- License Badge: [Shields.io](https://shields.io/)

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

### Copyright © 2023
```md
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Author

Follow me on Github at [AussieKing](https://github.com/AussieKing). Feel free to also get in touch at fede.dordoni@gmail.com.
