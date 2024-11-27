const postForm = document.getElementById("post-form");

postForm.addEventListener('submit', post);

var userDetails = {};

function post(event) {
    event.preventDefault();

    const postContent = document.getElementById("post-content").value;

    console.log(postContent); 
}