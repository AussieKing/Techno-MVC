//! PUBLIC JS FILE FOR SIGNING UP
// This file is used to sign up a user

const BlogLoginFormHandler = async (event) => {  // This function will handle the login event
  event.preventDefault();

  const username = document.querySelector('#username-Blog-login').value.trim();  // getting the username and password from the form and trimming the whitespace
  const password = document.querySelector('#password-Blog-login').value.trim();

  if (username && password) {  // if the username and password are not empty

    const response = await fetch('/api/users/login', { // fetch a request to the server
      method: 'POST',  // by using the POST method
      body: JSON.stringify({ username, password }),  // and transforming the data into a JSON string
      headers: { 'Content-Type': 'application/json' },  // with the application/json header
    });

    if (response.ok) {
      document.location.replace('/'); // once the user is logged in, redirect to the homepage
    } else {
            
      alert("Couldn't login."); 
    }
  }
};

//! EVENT LISTENER
const BlogLoginForm = document.querySelector('.Blog-login-form');  // addEventListener will listen for the submit event on the form
if (BlogLoginForm) {  // if the form exists
  BlogLoginForm.addEventListener('submit', BlogLoginFormHandler);  // on submit event, call the BlogLoginFormHandler function
}
