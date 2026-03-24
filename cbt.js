let questions = [
  {
    question: "What is 2 + 2?",
    options: ["1", "2", "3", "4"],
    answer: 3
  },
  {
    question: "Capital of Nigeria?",
    options: ["Lagos", "Abuja", "Kano", "Kaduna"],
    answer: 1
  },
  {
    question: "Which is a programming language?",
    options: ["HTML", "CSS", "Python", "Photoshop"],
    answer: 2
  }
];

let current = 0;
let timeLeft = 600; // 10 minutes

function showQuestion() {
  if (current >= questions.length) {
    alert("Exam completed!");
    return;
  }

  document.getElementById("question").innerText = questions[current].question;

  let opts = document.querySelectorAll(".options button");
  for (let i = 0; i < opts.length; i++) {
    opts[i].innerText = questions[current].options[i];
  }
}

function checkAnswer(index) {
  if (index === questions[current].answer) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  current++;
  showQuestion();
}

function startTimer() {
  let timerEl = document.getElementById("timer");
  let interval = setInterval(() => {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    timerEl.innerText = `Time Left: ${min}:${sec < 10 ? '0' : ''}${sec}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      alert("Time over!");
    }
  }, 1000);
}

showQuestion();
startTimer();
