const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "15"],
        answer: "8"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionDisplay = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

function displayQuestion() {
    let q = questions[currentQuestionIndex];
    questionDisplay.textContent = q.question;
    optionsContainer.innerHTML = "";
    selectedAnswer = null; // Reset selection
    nextButton.style.display = "none"; // Hide Next button until an option is selected

    q.options.forEach(option => {
        const div = document.createElement("div");
        div.classList.add("option-box");
        div.textContent = option;
        div.onclick = () => selectOption(div, option);
        optionsContainer.appendChild(div);
    });
}

function selectOption(optionElement, selected) {
    // Remove selection from all options
    document.querySelectorAll(".option-box").forEach(box => box.classList.remove("selected"));
    optionElement.classList.add("selected");
    selectedAnswer = selected; // Store selected answer

    nextButton.style.display = "block"; // Show the Next button after selection
}

function nextQuestion() {
    if (!selectedAnswer) {
        alert("Please select an answer before proceeding!");
        return;
    }

    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionDisplay.textContent = "Quiz Completed!";
        optionsContainer.innerHTML = "";
        scoreDisplay.textContent = `Your score: ${score} / ${questions.length}`;
        nextButton.style.display = "none"; // Hide Next button when quiz is over
    }
}

nextButton.addEventListener("click", nextQuestion);
displayQuestion();
