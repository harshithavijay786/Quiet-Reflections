const registerForm = document.getElementById("register-form");

registerForm.addEventListener('submit', register);

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

function register(event) {
    event.preventDefault();

    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userDetails = {
        firstName,
        lastName,
        userName,
        password
    };

    fetchData('/users/register', userDetails, 'POST')
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