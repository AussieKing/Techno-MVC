//! PUBLIC JS FILE FOR LOGGING OUT
// This file is used to log out a user

const BlogLogout = async () => {  // This function will handle the logout event
  const response = await fetch('/api/users/logout', {  // fetch a POST request to the server
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/'); 
  } else {
    alert('Failed to log out.'); 
  }
};

//! EVENT LISTENER
const BlogLogoutButton = document.querySelector('#Blog-logout');  // addEventListener will listen for the click event on the logout button
if (BlogLogoutButton) {   // if the logout button exists
  BlogLogoutButton.addEventListener('click', BlogLogout); // on click event, call the BlogLogout function to log out the user
}
