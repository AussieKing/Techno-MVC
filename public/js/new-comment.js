//! PUBLIC JS FILE FOR NEW COMMENT FORM
// This file is used to create a new comment

const newBlogCommentFormHandler = async (event) => {
  event.preventDefault();

  const post_id = parseInt(window.location.pathname.split('/').pop()); // getting the post_id from the URL path by splitting the URL path and popping the last element

  const content = document.querySelector('#content-new-Blog-comment').value.trim();  // getting the content from the form and trimming the whitespace

  if (content) {
    const response = await fetch(`/api/comments`, {  // if thr content is not empty, fetch a request to the server
      method: 'POST',
      body: JSON.stringify({ comment_text: content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload(); // if the response is ok, reload the page
    } else {
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
      alert("Comment couldn't be posted."); // otherwise, display an error message
    }
  }
};



//! EVENT LISTENER
const newBlogCommentForm = document.querySelector('.new-Blog-comment-form');
if (newBlogCommentForm) {
  newBlogCommentForm.addEventListener('submit', newBlogCommentFormHandler);
}
