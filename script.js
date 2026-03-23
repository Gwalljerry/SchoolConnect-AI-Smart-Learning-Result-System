function login() {
    let name = document.getElementById("name").value;
    let studentClass = document.getElementById("class").value;

    if (name === "" || studentClass === "") {
        alert("Please fill all fields");
        return;
    }

    // Save to localStorage
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentClass", studentClass);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
}
