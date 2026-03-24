function calculateClassResults() {
  const table = document.getElementById("teacher-result").getElementsByTagName("tbody")[0];
  const rows = table.getElementsByTagName("tr");

  let classResults = [];

  for (let row of rows) {
    const name = row.querySelector("td input[type=text]").value || "Unnamed";
    const ca1 = Number(row.querySelector(".ca1").value) || 0;
    const ca2 = Number(row.querySelector(".ca2").value) || 0;
    const exam = Number(row.querySelector(".exam").value) || 0;

    const total = ca1 + ca2 + exam;
    const average = total / 3;

    let grade = '';
    let remark = '';

    if (average >= 70) {
      grade = 'A';
      remark = 'Excellent';
    } else if (average >= 60) {
      grade = 'B';
      remark = 'Very Good';
    } else if (average >= 50) {
      grade = 'C';
      remark = 'Good';
    } else if (average >= 40) {
      grade = 'D';
      remark = 'Pass';
    } else {
      grade = 'F';
      remark = 'Fail';
    }

    row.querySelector(".total").value = total;
    row.querySelector(".average").value = average.toFixed(2);
    row.querySelector(".grade").value = grade;
    row.querySelector(".remark").value = remark;

    // Push to class results array
    classResults.push({ name, ca1, ca2, exam, total, average: average.toFixed(2), grade, remark });
  }

  // Save class results to localStorage
  localStorage.setItem("classResults", JSON.stringify(classResults));

  alert("Class results calculated and saved!");
}
