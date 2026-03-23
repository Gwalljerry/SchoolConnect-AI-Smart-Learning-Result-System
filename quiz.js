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
    },
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Machine Language",
            "Home Tool Mark Language",
            "None"
        ],
        answer: "Hyper Text Markup Language"
    }
];

let currentIndex = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
    let q = questions[currentIndex];

    document.getElementById("question").innerText = q.question;

    let optionsHTML = "";

    q.options.forEach(opt => {
        optionsHTML += `
        <button class="option-btn" onclick="selectAnswer(this, '${opt}')">
            ${opt}
        </button><br>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;

    selectedAnswer = null;
}

function selectAnswer(button, value) {
    selectedAnswer = value;

    // remove previous selection
    let all = document.querySelectorAll(".option-btn");
    all.forEach(btn => btn.style.background = "#004aad");

    // highlight selected
    button.style.background = "green";
}

function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer");
        return;
    }

    if (selectedAnswer === questions[currentIndex].answer) {
        score++;
    }

    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {

        document.getElementById("quiz-box").style.display = "none";

        let total = questions.length;

        document.getElementById("result").innerText =
            "Your Score: " + score + " / " + total;

        // SAVE RESULT
        localStorage.setItem("lastScore", score);
        localStorage.setItem("totalQuestions", total);
    }
}

loadQuestion();
