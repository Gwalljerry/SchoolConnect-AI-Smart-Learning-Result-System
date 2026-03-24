let name = localStorage.getItem("studentName");

if (!name) {
    alert("Login first");
    window.location.href = "login.html";
}

document.getElementById("studentInfo").innerText = name;

let data = JSON.parse(localStorage.getItem("result_" + localStorage.getItem("studentAdmission")));

if (!data) {
    document.getElementById("studentInfo").innerText = "No result available";
} else {

    let table = document.getElementById("resultTable");

    let total = 0;
    let count = 0;

    for (let sub in data.subjects) {
        let s = data.subjects[sub];
        total += s.total;
        count++;

        table.innerHTML += `
        <tr>
        <td>${sub}</td>
        <td>${s.ca1}</td>
        <td>${s.ca2}</td>
        <td>${s.exam}</td>
        <td>${s.total}</td>
        </tr>`;
    }

    let avg = total / count;

    document.getElementById("average").innerText = "Average: " + avg;

    document.getElementById("grade").innerText =
        avg >= 75 ? "Grade A" :
        avg >= 60 ? "Grade B" :
        avg >= 50 ? "Grade C" :
        avg >= 40 ? "Grade D" : "Fail";
}
