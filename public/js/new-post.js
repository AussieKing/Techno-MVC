//! PUBLIC JS FILE FOR NEW POST PAGE
// This file is used to create a new post

const newBlogPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-Blog-post').value.trim();  // getting the title and content from the form and trimming the whitespace
  const content = document.querySelector('#content-new-Blog-post').value.trim();

  if (title && content) {  // if thr title and content are not empty, fetch a request to the server to create a new post
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard'); 
    } else {
      alert('Failed to create a new post.'); 
    }
  }
};


//! EVENT LISTENER
const newBlogPostForm = document.querySelector('.new-Blog-post-form');
if (newBlogPostForm) {
  newBlogPostForm.addEventListener('submit', newBlogPostFormHandler);
}
