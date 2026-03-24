function save() {

let admission = prompt("Enter Admission Number");

let student = localStorage.getItem("student_" + admission);

if (!student) {
    alert("Student not found");
    return;
}

let result = {
    subjects: {
        English: {ca1:10, ca2:10, exam:50, total:70},
        Math: {ca1:15, ca2:10, exam:50, total:75}
    }
};

localStorage.setItem("result_" + admission, JSON.stringify(result));

alert("Saved");
}
