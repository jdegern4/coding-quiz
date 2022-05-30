const quizStartButton = document.getElementById("start-quiz");
var time = 60;
var timer = document.getElementById("time-remaining");
timer.innerHTML = time;
var score = "";
var questionNumber = 0;
var questionSequence = [];
const choices = Array.from(document.getElementsByClassName('answer-box'));

var questions = [
    {
        question: "In the context of web APIs, what does DOM stand for?",
        answers: ["Darkest Ominous Malevolence", "Dominant Octopus Minds", "Document Operator Model", "Document Object Model"],
        correct: "Document Object Model"
    },

    {
        question: "Where should a CSS file be referenced in an HTML file?",
        answers: ["Before any HTML code", "After any HTML code", "Inside the head section", "Inside the body section"],
        correct: "Inside the head section"
    },

    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: ["<br>", "<break>", "<brk>", "<linebreak>"],
        correct: "<br>"
    },

    {
        question: "How do you display hyperlinks without an underline?",
        answers: ["a {text-decoration:none;}", "a {underline:none;}", "a {text-decoration:no-underline;}", "a {decoration:no-underline;}"],
        correct: "a {text-decoration:none;}"
    },

    {
        question: "What is the correct syntax for a JavaScript array?",
        answers: ["var flavors = 1(vanilla), 2(chocolate), 3(strawberry)", "var flavors = ['vanilla', 'chocolate', 'strawberry']", "var flavors = (1:'vanilla', 2:'chocolate', 3:'strawberry')", "var flavors = 'vanilla', 'chocolate', 'strawberry'"],
        correct: "var flavors = ['vanilla', 'chocolate', 'strawberry']"
    }
]


var startQuiz = function () {
    quizStartButton.hidden = true;
    timerCountdown();
    questionSequence = [...questions];
    if (questionNumber > 4 || time < 1) {
        endQuiz();
    } else {
        newQuestion();
    }
}

var newQuestion = function () {
    // CLEAR QUESTION AND ANSWERS
    // LOAD CURRENT QUESTION
    var currentQuestion = questions[questionNumber];
    var questionField = document.getElementById("question-box");
    questionField.innerText = currentQuestion.question;
    console.log(currentQuestion);

    // LOAD CURRENT QUESTION'S CHOICES
    var choice1 = document.getElementById("answer-box-1");
    var choice2 = document.getElementById("answer-box-2");
    var choice3 = document.getElementById("answer-box-3");
    var choice4 = document.getElementById("answer-box-4");
    choice1.textContent = currentQuestion.answers[0];
    choice2.textContent = currentQuestion.answers[1];
    choice3.textContent = currentQuestion.answers[2];
    choice4.textContent = currentQuestion.answers[3];
    var correctAnswer = currentQuestion.correct;
    var selectedAnswer = 0;
    // DETECT THAT AN ANSWER HAS BEEN SELECTED
    var answers = document.querySelectorAll('.answer-box');
    answers.forEach(function (select) {
        select.addEventListener('click', (e) => {
            //debugger;
            selectedAnswer = event.target.innerText;
            console.log(selectedAnswer, correctAnswer);
            checkAnswer(correctAnswer);
        });
    });

    function checkAnswer() {
        // ALERT WRONG ANSWER AND DEDUCT TIME FROM TIMER
        if (selectedAnswer != correctAnswer) {
            window.alert("Incorrect. Try again!");
            time = time - 5;
            return;
            // OTHERWISE, IF CORRECT ANSWER SELECTED, ADD POINTS AND ALERT
        } else if (selectedAnswer === correctAnswer) {
            window.alert("Correct!");
            // ADD POINTS
            nextQuestion();
        }


    };
}
// UPON CORRECT ANSWER AND CORRECT ALERT, LOAD NEXT QUESTION
// nextQuestion();

var nextQuestion = function () {
    //debugger;
    questionNumber++;
    console.log("Next question: ", questionNumber);

    newQuestion();
}

function timerCountdown() {
    setInterval(secondDecrease, 1000);
    function secondDecrease() {
        time--;
        document.getElementById("time-remaining").innerHTML = time;
    }
}

function endQuiz() {
    clearInterval(secondDecrease);
    score = time;
    localStorage.setItem("newScore", score);
    window.alert(score);
    return window.location.assign("/high-scores.html");
}

quizStartButton.addEventListener("click", startQuiz);

const playerInitials = document.getElementById("initials");
const saveScoreButton = document.getElementById("saveScore");
playerInitials.addEventListener("keyup", function() {
    saveScoreButton.disabled = !playerInitials.nodeValue;
})
function saveScore() {
    event.preventDefault();
}