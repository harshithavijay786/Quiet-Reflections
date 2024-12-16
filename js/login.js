const loginForm = document.getElementById("login-form");

loginForm.addEventListener('submit', login);

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

function login(event) {
    event.preventDefault();

    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userDetails = {
        userName,
        password
    };

    fetchData('/users/login', userDetails, 'POST')
    .then(data => {
      if (!data.message) {
        localStorage.setItem("userId", data.user_id);
        window.location.href = "home.html"
      }
    })
    .catch(err => {
      console.log(err.message)
    })
}