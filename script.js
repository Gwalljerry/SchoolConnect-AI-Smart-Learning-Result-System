function loginUser(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // SIMPLE DEMO LOGIN
  if (username === "admin" && password === "1234") {
    window.location.href = "dashboard.html";
  } 
  else if (username === "student" && password === "1234") {
    alert("Student login successful");
  } 
  else {
    document.getElementById("error").innerText = "Invalid login details!";
  }
}
