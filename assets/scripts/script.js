const quizStartButton = document.getElementById("start-quiz");
var time = 60;
var timer = document.getElementById("time-remaining");
var score = 100;
var questionNumber = 0;
var questionSequence = [];
const choices = Array.from(document.getElementsByClassName('answer-box'));

var questions = [
    {
        question: "In the context of web APIs, what does DOM stand for?",
        ans1: "Darkest Ominous Malevolence",
        ans2: "Dominant Octopus Minds",
        ans3: "Document Operator Model",
        ans4: "Document Object Model",
        correct: "4"
    },

    {
        question: "Where should a CSS file be referenced in an HTML file?",
        ans1: "Before any HTML code",
        ans2: "After any HTML code",
        ans3: "Inside the head section",
        ans4: "Inside the body section",
        correct: "3"
    },

    {
        question: "What is the correct HTML element for inserting a line break?",
        ans1: "<br>",
        ans2: "<break>",
        ans3: "<brk>",
        ans4: "<linebreak>",
        correct: "1"
    },

    {
        question: "How do you display hyperlinks without an underline?",
        ans1: "a {text-decoration:none;}",
        ans2: "a {underline:none;}",
        ans3: "a {text-decoration:no-underline;}",
        ans4: "a {decoration:no-underline;}",
        correct: "1"
    },

    {
        question: "What is the correct syntax for a JavaScript array?",
        ans1: "var flavors = 1(vanilla), 2(chocolate), 3(strawberry)",
        ans2: "var flavors = ['vanilla', 'chocolate', 'strawberry']",
        ans3: "var flavors = (1:'vanilla', 2:'chocolate', 3:'strawberry')",
        ans4: "var flavors = 'vanilla', 'chocolate', 'strawberry'",
        correct: "2"
    }
]


var startQuiz = function () {
    quizStartButton.hidden = true;
    questionSequence = [...questions];
    if (questionNumber > 4) {
        endQuiz();
    } else {
        newQuestion();
    }
}

var newQuestion = function () {
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
    choice1.textContent = currentQuestion.ans1;
    choice2.textContent = currentQuestion.ans2;
    choice3.textContent = currentQuestion.ans3;
    choice4.textContent = currentQuestion.ans4;

    var correctAnswer = currentQuestion.correct;
    var selectedAnswer = 0;
    // DETECT THAT AN ANSWER HAS BEEN SELECTED
    var answers = document.querySelectorAll('.answer-box');
    answers.forEach(function (select) {
        select.addEventListener('click', (e) => {
            selectedAnswer = event.target.getAttribute("data-number");
            console.log(selectedAnswer, currentQuestion["correct"]);
            checkAnswer();
        });
    });

    function checkAnswer() {
        // ALERT WRONG ANSWER AND DEDUCT TIME FROM TIMER
        if (selectedAnswer !== currentQuestion["correct"]) {
            window.alert("Incorrect. Try again!");
            time = time - 5;
            return;
            // OTHERWISE, IF CORRECT ANSWER SELECTED, ADD POINTS AND ALERT
        } else if (selectedAnswer == currentQuestion["correct"]) {
            window.alert("Correct!");
            // ADD POINTS
            nextQuestion();
        }


    };
}
// UPON CORRECT ANSWER AND CORRECT ALERT, LOAD NEXT QUESTION
// nextQuestion();

var nextQuestion = function () {
    ++questionNumber;
    console.log("Next question: ", questionNumber);
    newQuestion();
}

function timer() {

}

function endQuiz() {

}

quizStartButton.addEventListener("click", startQuiz);