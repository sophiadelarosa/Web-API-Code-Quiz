//Declaring the elements
let start_btn = document.getElementById("start-btn");
let submit_btn = document.getElementById("submit");

let box = document.getElementById("box");
let result_box = document.getElementById("result-box");
let highscore_box = document.getElementById("highscore-box");

//question iterator
let qi = -1;

let score = 0;

//creating an array for questions and stuff
let questions = [
    {
        question: "Commonly used data types do NOT include:",
        options: ["A. Strings", "B. Booleans", "C. Alerts", "D. Numbers"],
        answer: "C",
    },
    {
        question: "The condition of an if/else statement is enclosed within:",
        options: ["A. Quotes", "B. Curly Brackets", "C. Parentheses", "D. Square Brackets"],
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
    box.innerHTML += `<h2> Your score is: ` + score + `</h2>`;
    //make initial box
    box.innerHTML += `<input type="text" id="initials" placeholder = "Please enter your initials"> 
        <button id="submit" onClick="submitScore()"> Submit </button>`
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
    box.innerHTML = `<h1 class="question">${question}</h1>`;
    box.innerHTML += `<button value= "A" onclick="checkAnswer(event, qi)" class="option"> ${options[0]} </button>`;
    box.innerHTML += `<button value= "B" onclick="checkAnswer(event, qi)" class="option"> ${options[1]} </button>`;
    box.innerHTML += `<button value= "C" onclick="checkAnswer(event, qi)" class="option"> ${options[2]} </button>`;
    box.innerHTML += `<button value= "D" onclick="checkAnswer(event, qi)" class="option"> ${options[3]} </button>`;
}

function checkAnswer(event, qi) {
    var element = event.target;
    if (element.value == questions[qi].answer) {
        score = score + 10;
        console.log(score);
        //createDiv.textContent = "Correct! The answer is: " + questions[qi].answer;
    } else {
        //don't let score get less than 0
        score = score - 10;
        if (score <= 0) {
            score = 0;
        }
        console.log(score);
        //createDiv.textContent = "Wrong! The correct answer is: " + questions[qi].answer;
    }
    questionLooper();
}


//function for submit button
function submitScore () {
    let initials = document.getElementById("initials").value;
    box.innerHTML = `<h1>Highscores</h1>`;
    box.innerHTML += initials + score;
    console.log(initials + score);
}










