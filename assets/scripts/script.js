const question = document.getElementById("question");
var timer = 60;
var score = 100;
var questionNumber = 0;
var availableQuestions = [];

var questions = [
    {
        question: "In the context of web APIs, what does DOM stand for?",
        ans1: "Darkest Ominous Malevolence",
        ans2: "Dominant Octopus Minds",
        ans3: "Document Operator Model",
        ans4: "Document Object Model",
        correct: "4"
    }

    {
        question: "Where should a CSS file be referenced in an HTML file?",
        ans1: "Before any HTML code",
        ans2: "After any HTML code",
        ans3: "Inside the head section",
        ans4: "Inside the body section",
        correct: "3"
    }

    {
        question: "What is the correct HTML element for inserting a line break?",
        ans1: "<br>",
        ans2: "<break>",
        ans3: "<brk>",
        ans4: "<linebreak>",
        correct: "1"
    }
]


var startQuiz = function() {
    availableQuestions = [...questions];
    console.log(availableQuestions);
}