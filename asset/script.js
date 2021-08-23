let loginButton = document.getElementById("login-btn");
let registerButton = document.getElementById("register-btn");
let button = document.getElementById("btn");
let login = document.getElementById("login");
let register = document.getElementById("register");

registerButton.addEventListener('click', function() {
  login.style.left = "-400px";
  register.style.left = "50px";
  button.style.left = "110px";
})

loginButton.addEventListener('click', function() {
  login.style.left = "50px";
  register.style.left = "450px";
  button.style.left = "0";
})
