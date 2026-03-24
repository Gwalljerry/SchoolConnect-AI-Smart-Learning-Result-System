function calculateRow(element) {
  let row = element.parentElement.parentElement;

  let ca1 = Number(row.querySelector(".ca1").value) || 0;
  let ca2 = Number(row.querySelector(".ca2").value) || 0;
  let exam = Number(row.querySelector(".exam").value) || 0;

  let total = ca1 + ca2 + exam;
  let average = total / 3;

  // Grade calculation
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

  // Fill calculated values
  row.querySelector(".total").value = total;
  row.querySelector(".average").value = average.toFixed(2);
  row.querySelector(".grade").value = grade;
  row.querySelector(".remark").value = remark;
}
