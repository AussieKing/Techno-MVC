//! PUBLIC JS FILE
// This file is used to delete a post

const deletePost = async (post_id) => {  // This function will delete a post
  const response = await fetch(`/api/posts/${post_id}`, {  // by using the post_id
    method: "DELETE",  // using the DELETE method
    headers: { "Content-Type": "application/json" },  // with the application/json header
  });

  if (response.ok) {
    document.location.reload(); // When deleted, reload the page
  } else {
    alert("Couldn't delete post."); // Display error message if the post couldn't be deleted
  }
};

// This function will handle the delete post event
const deletePostHandler = (event) => {
  if (event.target.matches(".delete-post")) {  // if the delete-post button is clicked
    const post_id = event.target.getAttribute("data-post-id");  // get the post_id
    deletePost(post_id);  // and delete the post
  }
};

// addEventListener will listen for the click event on the document
document.addEventListener("click", deletePostHandler);
