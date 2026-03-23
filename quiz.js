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
        options: ["Hyper Text Markup Language", "High Tech Machine Language", "Home Tool Mark Language", "None"],
        answer: "Hyper Text Markup Language"
    }
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
    let q = questions[currentIndex];
    document.getElementById("question").innerText = q.question;

    let optionsHTML = "";
    q.options.forEach(opt => {
        optionsHTML += `<button onclick="checkAnswer('${opt}')">${opt}</button><br>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(selected) {
    if (selected === questions[currentIndex].answer) {
        score++;
    }
}

function nextQuestion() {
    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").style.display = "none";
        document.getElementById("result").innerText = "Your Score: " + score;

        // Save score
let total = questions.length;

// Save both score and total
localStorage.setItem("lastScore", score);
localStorage.setItem("totalQuestions", total);        

loadQuestion();
