//! PUBLIC JS FILE FOR EDITING A POST
// This file is used to edit a post

const post_id = window.location.toString().split("/")[  // using the window.location object to get the post_id
  window.location.toString().split("/").length - 1  // we are using the split method to split the url
];

//! UPDATING the post with the new title and content
const updateBlogPostFormHandler = async (event) => {  // This function will handle the update post event
  event.preventDefault();  // we are using the preventDefault method to prevent the default behavior of the browser (reloading)

  const title = document.querySelector("#title-update-Blog-post").value.trim();  // getting the title and content from the form and trimming the whitespace
  const content = document
    .querySelector("#content-update-Blog-post")  // getting the title and content from the form and trimming the whitespace via the querySelector method
    .value.trim();

  if (title && content) {  // if the title and content are not empty
    const response = await fetch(`/api/posts/${post_id}`, {  // fetch a request to the server
      method: "PUT",  // by using the PUT method
      body: JSON.stringify({ title, content }),  // and transforming the data into a JSON string
      headers: { "Content-Type": "application/json" },  // with the application/json header
    });

    if (response.ok) {  //  if the response is ok, then reload the page
      document.location.replace("/dashboard");
    } else {
      alert("Couldn't update the post."); // otherwise, display an error message
    }
  }
};

//! DELETING the post
const deleteBlogPostFormHandler = async (event) => {  // This function will handle the delete post event
  event.preventDefault();

  const response = await fetch(`/api/posts/${post_id}`, {  // fetch a request to the server
    method: "DELETE", // by using the DELETE method
  });

  if (response.ok) {  // if the response is ok, then reload the page  
    document.location.replace("/dashboard"); 
  } else {
    alert("Couldn't delete the post."); // otherwise, display an error message
  }
};

//! Add event listeners to the buttons
const updateBlogPostButton = document.querySelector("#update-Blog-post");

if (updateBlogPostButton) {
  updateBlogPostButton.addEventListener("click", updateBlogPostFormHandler);  // on click event, call the updateBlogPostFormHandler function
}

const deleteBlogPostButton = document.querySelector("#delete-Blog-post");

if (deleteBlogPostButton) {
  deleteBlogPostButton.addEventListener("click", deleteBlogPostFormHandler);  // on click event, call the deleteBlogPostFormHandler function
}
