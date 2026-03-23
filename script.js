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
function signup() {
    let name = document.getElementById("newName").value;
    let studentClass = document.getElementById("newClass").value;
    let admission = document.getElementById("admission").value;

    if (name === "" || studentClass === "" || admission === "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name,
        class: studentClass,
        admission
    };

    localStorage.setItem("student_" + admission, JSON.stringify(student));

    alert("Account created successfully!");

    window.location.href = "login.html";
}
