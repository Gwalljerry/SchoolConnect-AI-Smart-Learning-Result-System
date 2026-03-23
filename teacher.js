let approved = localStorage.getItem("teacherApproved");

if (approved !== "true") {
    alert("Access denied. Admin approval required.");
    window.location.href = "portal.html";
}
function saveResult() {

    let name = document.getElementById("studentName").value;
    let studentClass = document.getElementById("studentClass").value;

    if (!name) {
        alert("Enter student name");
        return;
    }

    function getTotal(prefix) {
        let ca1 = Number(document.getElementById(prefix + "_ca1").value) || 0;
        let ca2 = Number(document.getElementById(prefix + "_ca2").value) || 0;
        let exam = Number(document.getElementById(prefix + "_exam").value) || 0;
        return { ca1, ca2, exam, total: ca1 + ca2 + exam };
    }

    let subjects = {
        English: getTotal("eng"),
        Mathematics: getTotal("math"),
        Science: getTotal("sci"),
        Civic: getTotal("civ")
    };

    let totalScore = 0;
    let count = 0;

    for (let sub in subjects) {
        totalScore += subjects[sub].total;
        count++;
    }

    let average = totalScore / count;

    let result = {
        name,
        class: studentClass,
        subjects,
        average
    };

    localStorage.setItem("studentResult_" + name, JSON.stringify(result));

    alert("Full result saved successfully!");
}
