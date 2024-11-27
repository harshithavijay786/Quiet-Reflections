const registerForm = document.getElementById("register-form");

registerForm.addEventListener('submit', register);

var userDetails = {};

function register(event) {
    event.preventDefault();

    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    userDetails = {
        firstName,
        lastName,
        userName,
        password
    };

    console.log(userDetails);
}