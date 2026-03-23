function saveResult() {
    let name = document.getElementById("studentName").value;
    let studentClass = document.getElementById("studentClass").value;
    let ca1 = Number(document.getElementById("ca1").value);
    let ca2 = Number(document.getElementById("ca2").value);
    let exam = Number(document.getElementById("exam").value);

    if (!name) {
        alert("Enter student name");
        return;
    }

    let total = ca1 + ca2 + exam;

    let result = {
        name: name,
        class: studentClass,
        ca1: ca1,
        ca2: ca2,
        exam: exam,
        total: total
    };

    localStorage.setItem("studentResult_" + name, JSON.stringify(result));

    alert("Result saved successfully!");
}
