let questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Capital of Nigeria?",
        options: ["Lagos", "Abuja", "Kano", "Kaduna"],
        answer: "Abuja"
    }
];

let index = 0;
let score = 0;
let selected = null;

function loadQuestion() {
    let q = questions[index];

    document.getElementById("question").innerText = q.question;

    let html = "";
    q.options.forEach(opt => {
        html += `<button class="option-btn" onclick="select(this,'${opt}')">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = html;
    selected = null;
}

function select(btn, value) {
    selected = value;
    let all = document.querySelectorAll(".option-btn");
    all.forEach(b => b.style.background="#004aad");
    btn.style.background="green";
}

function nextQuestion() {
    if (!selected) {
        alert("Select an answer");
        return;
    }

    if (selected === questions[index].answer) score++;

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").style.display="none";
        document.getElementById("result").innerText="Score: "+score;
    }
}

loadQuestion();
