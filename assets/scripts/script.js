const question = document.getElementById("question");
const quizStartButton = document.getElementById("start-quiz");
var timer = 60;
var score = 100;
var questionNumber = 0;
var questionSequence = [];

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


var startQuiz = function() {
    questionSequence = [...questions];
    console.log(questionSequence);
    nextQuestion();
}

var nextQuestion = function() {
    questionNumber++;
}

quizStartButton.addEventListener("click", startQuiz);