function loginUser(event) {
  event.preventDefault();

  let username = document.getElementById("username").value.toLowerCase();
  let password = document.getElementById("password").value;

  // Save logged-in user
  localStorage.setItem("loggedInUser", username);

  if (username === "admin" && password === "1234") {
    window.location.href = "dashboard.html";
  } 
  else {
    // Treat any other login as student
    window.location.href = "my-result.html";
  }
}
