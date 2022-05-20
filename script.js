//Declaring the elements
let start_btn = document.getElementById("start-btn");

let box = document.getElementById("box");
let result_box = document.getElementById("result-box");
let highscore_box = document.getElementById("highscore-box");

//question iterator
let qi = -1;

//creating an array for questions and stuff
let questions = [
    {
        question: "Commonly used data types do NOT include:",
        options: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
        answer: "C",
    },
    {
        question: "The condition of an if/else statement is enclosed within:",
        options: ["A. Quotes", "B. Curly Brackets", "C. Parantheses", "D. Square Brackets"],
        answer: "B",
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        options: ["A. Numbers and strings", "B. Other arrays", "C. Booleans", "D. All of the above"],
        answer: "D",
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables",
        options: ["A. Commas", "B. Curly brackets", "C. Quotes", "D. Parentheses"],
        answer: "C",
    },
    {
        question: "A very useful tool during development for debugging and printing content to the debugger is:",
        options: ["A. JavaScript", "B. Terminal/Bash", "C. console.log", "D. for loops"],
        answer: "C",
    },
]

//If start button is clicked
start_btn.addEventListener("click", createQuiz);

//start the quiz
function createQuiz() {
    questionLooper();
    console.log("quiz time!");
}

//function to end the quiz
function endQuiz() {
    box.innerHTML = `<h1>Quiz Complete</h1>`;
}

//function to loop through the questions
function questionLooper() {
    qi++
    if (qi >= questions.length) {
        endQuiz();
        return;
    }

    //Puts quiz questions in the main box on the page
    let { question, options, answer } = questions[qi];
    box.innerHTML = `<h1>${question}</h1>`;
    box.innerHTML += `<button value= "A" onclick="checkAnswer(event, qi)"> ${options[0]} </button>`;
    box.innerHTML += `<button value= "B" onclick="checkAnswer(event, qi)"> ${options[1]} </button>`;
    box.innerHTML += `<button value= "C" onclick="checkAnswer(event, qi)"> ${options[2]} </button>`;
    box.innerHTML += `<button value= "D" onclick="checkAnswer(event, qi)"> ${options[3]} </button>`;
}

function checkAnswer() {
    questionLooper();
}
