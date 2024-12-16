const postForm = document.getElementById("post-form");

postForm.addEventListener('submit', post);

var userDetails = {};

async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
}

function post(event) {
    event.preventDefault();

    const postContent = document.getElementById("post-content").value;
    const userId = localStorage.getItem('userId');

    console.log(userId);

    const postDetails = {
        userId,
        notes: postContent
    }

    fetchData('/post/create', postDetails, 'POST')
    .then(data => {
      if (!data.message) {
        console.log("Post saved Successfully!");
      }
    })
    .catch(err => {
      console.log(err.message)
    })
}