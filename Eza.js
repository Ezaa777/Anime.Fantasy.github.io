function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMsg = document.getElementById("error-msg");

  if (username === "ALL" && password === "EZA") {
    window.location.href = "Eza-Xz.html";
  } else {
    errorMsg.innerText = "Username atau password salah!";
  }
}