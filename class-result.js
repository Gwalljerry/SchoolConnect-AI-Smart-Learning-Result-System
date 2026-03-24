function calculateClassResults() {
  const table = document.getElementById("class-result").getElementsByTagName("tbody")[0];
  const rows = table.getElementsByTagName("tr");

  for (let row of rows) {
    const ca1 = Number(row.cells[1].innerText) || 0;
    const ca2 = Number(row.cells[2].innerText) || 0;
    const exam = Number(row.cells[3].innerText) || 0;

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

    row.cells[4].innerText = total;
    row.cells[5].innerText = average.toFixed(2);
    row.cells[6].innerText = grade;
    row.cells[7].innerText = remark;
  }

  alert("All class results calculated!");
}
