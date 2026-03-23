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
    alert("No result found");
} else {

    let table = document.getElementById("resultTable");

    let row = `
        <tr>
            <td>General</td>
            <td>${saved.ca1}</td>
            <td>${saved.ca2}</td>
            <td>${saved.exam}</td>
            <td>${saved.total}</td>
        </tr>
    `;

    table.innerHTML += row;

    let average = saved.total;

    document.getElementById("average").innerText =
        "Total Score: " + average;

    let grade = "";

    if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else if (average >= 40) grade = "D";
    else grade = "F";

    document.getElementById("grade").innerText =
        "Grade: " + grade;
}

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
let advice = "";

if (average >= 75) {
    advice = "Excellent performance! Keep it up.";
} else if (average >= 50) {
    advice = "Good effort. You can do even better.";
} else {
    advice = "Needs improvement. Study harder and practice more.";
}

let adviceBox = document.createElement("p");
adviceBox.innerText = "Advice: " + advice;

document.querySelector(".portal-container").appendChild(adviceBox);
let all = JSON.parse(localStorage.getItem("allResults")) || [];

all.sort((a, b) => b.total - a.total);

let position = all.findIndex(r => r.name === name) + 1;

let pos = document.createElement("h3");
pos.innerText = "Position: " + position;

document.querySelector(".portal-container").appendChild(pos);
