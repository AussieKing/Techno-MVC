//! PUBLIC SIGNUP PAGE
// This file is used to sign up a user

const BlogSignupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();   // getting the username, email, and password from the form and trimming the whitespace
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && email && password) {  // if the username, email, and password are not empty
    const response = await fetch('/api/users/signup', {  // fetch a request to the server
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.'); 
    }
  }
};


//! EVENT LISTENER
const BlogSignupForm = document.querySelector('#signup-form');
if (BlogSignupForm) {
  BlogSignupForm.addEventListener('submit', BlogSignupFormHandler);
}

