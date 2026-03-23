let name = localStorage.getItem("studentName");
let studentClass = localStorage.getItem("studentClass");

if (!name) {
    alert("Please login first");
    window.location.href = "login.html";
}

// Display student info
document.getElementById("studentInfo").innerText =
    "Name: " + name + " | Class: " + studentClass;


// Sample subjects (we will upgrade later)
let saved = JSON.parse(localStorage.getItem("studentResult_" + name));

if (!saved) {
    document.getElementById("studentInfo").innerText =
        "No result available. Please contact your teacher.";
} else {

    let table = document.getElementById("resultTable");

    let totalScore = 0;
    let count = 0;

    for (let sub in saved.subjects) {

        let s = saved.subjects[sub];

        totalScore += s.total;
        count++;

        let row = `
        <tr>
            <td>${sub}</td>
            <td>${s.ca1}</td>
            <td>${s.ca2}</td>
            <td>${s.exam}</td>
            <td>${s.total}</td>
        </tr>
        `;

        table.innerHTML += row;
    }

    let avg = totalScore / count;

    document.getElementById("average").innerText =
        "Average: " + avg.toFixed(2);

    let grade = "";

    if (avg >= 75) grade = "A (Excellent)";
    else if (avg >= 60) grade = "B (Very Good)";
    else if (avg >= 50) grade = "C (Good)";
    else if (avg >= 40) grade = "D (Pass)";
    else grade = "F (Fail)";

    document.getElementById("grade").innerText =
        "Grade: " + grade;

    // AI Advice
    let advice = "";

    if (avg >= 75) advice = "Outstanding performance!";
    else if (avg >= 50) advice = "Good effort, keep improving.";
    else advice = "Needs serious improvement.";

    let ai = document.createElement("p");
    ai.innerText = "🤖 AI Insight: " + advice;

    document.querySelector(".portal-container").appendChild(ai);
}
