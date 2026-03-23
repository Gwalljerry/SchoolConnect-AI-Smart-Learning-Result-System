function login() {
    let admission = document.getElementById("admission").value;

    let saved = JSON.parse(localStorage.getItem("student_" + admission));

    if (!saved) {
        alert("Invalid Admission Number");
        return;
    }

    localStorage.setItem("studentName", saved.name);
    localStorage.setItem("studentClass", saved.class);
    localStorage.setItem("studentAdmission", admission);

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
