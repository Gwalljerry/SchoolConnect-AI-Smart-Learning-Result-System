window.onload = function() {
  const tbody = document.getElementById("class-result").getElementsByTagName("tbody")[0];

  const classResults = JSON.parse(localStorage.getItem("classResults")) || [];

  for (let student of classResults) {
    const row = tbody.insertRow();

    row.insertCell().innerText = student.name;
    row.insertCell().innerText = student.ca1;
    row.insertCell().innerText = student.ca2;
    row.insertCell().innerText = student.exam;
    row.insertCell().innerText = student.total;
    row.insertCell().innerText = student.average;
    row.insertCell().innerText = student.grade;
    row.insertCell().innerText = student.remark;
  }
};
