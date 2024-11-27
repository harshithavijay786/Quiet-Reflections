const loginForm = document.getElementById("login-form");

loginForm.addEventListener('submit', login);

var userDetails = {};

function login(event) {
    event.preventDefault();

    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    userDetails = {
        userName,
        password
    };

    console.log(userDetails);
}