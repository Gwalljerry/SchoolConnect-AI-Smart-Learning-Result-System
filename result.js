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
let subjects = [
    { name: "English", ca1: 15, ca2: 10, exam: 50 },
    { name: "Mathematics", ca1: 10, ca2: 15, exam: 45 },
    { name: "Biology", ca1: 12, ca2: 12, exam: 40 },
    { name: "Civic Education", ca1: 14, ca2: 13, exam: 42 }
];

let table = document.getElementById("resultTable");

let totalScore = 0;

subjects.forEach(sub => {

    let total = sub.ca1 + sub.ca2 + sub.exam;
    totalScore += total;

    let row = `
        <tr>
            <td>${sub.name}</td>
            <td>${sub.ca1}</td>
            <td>${sub.ca2}</td>
            <td>${sub.exam}</td>
            <td>${total}</td>
        </tr>
    `;

    table.innerHTML += row;
});

// Calculate average
let average = totalScore / subjects.length;

document.getElementById("average").innerText =
    "Average: " + average.toFixed(2);


// Grade system
let grade = "";

if (average >= 75) {
    grade = "A (Excellent)";
} else if (average >= 60) {
    grade = "B (Very Good)";
} else if (average >= 50) {
    grade = "C (Good)";
} else if (average >= 40) {
    grade = "D (Pass)";
} else {
    grade = "F (Fail)";
}

document.getElementById("grade").innerText =
    "Grade: " + grade;
