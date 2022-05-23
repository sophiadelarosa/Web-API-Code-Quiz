//Declaring the elements
let start_btn = document.getElementById("start-btn");
let submit_btn = document.getElementById("submit");
let timer = document.getElementById("timer");

let box = document.getElementById("box");
let result_box = document.getElementById("result-box");
let highscore_box = document.getElementById("highscore-box");

//question iterator
let qi = -1;
let score = 0;

//function for timer
function countdown() {
    var timeLeft = 15;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timer` to show the remaining seconds
        timer.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timer.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timer.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `endQuiz()` function
        endQuiz();
      }
    }, 1000);
  }

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
    countdown();
    questionLooper();
    console.log("Why are you looking down here? Focus on the quiz.");
}

//function to end the quiz
function endQuiz() {
    box.innerHTML = `<h1 class="box-label">Quiz Complete</h1>`;
    box.innerHTML += `<h2 class="list-item"> Your score is: ` + score + " " + `out of 100` + `</h2>`;

    if (score < 80) {
        box.innerHTML += `<h2 class="ending-text"> Your soul is mine </h2>`;
    } else {
        box.innerHTML += `<h2 class="ending-text"> You can go. But I'll still remember you... </h2>`;
    }
    
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
        score = score + 20;
        console.log(score);
    } else {
        //score cannot be less than 0
        score = score - 20;
        if (score <= 0) {
            score = 0;
        }
        console.log(score);
    }
    questionLooper();
}


//function for submit button
function submitScore () {
    //establishing variables for the function
    let initials = document.getElementById("initials").value;
    let leaderboardItem = " " + initials + " " + score;

    //on submit, showing high scores array from local storage
    box.innerHTML = `<h1 class="box-label">Highscores</h1>`;
    
    //logs leaderboard item from most recent result
    console.log(leaderboardItem);
    
    //if there is nothing saved at the start then save an empty array
    if(localStorage.getItem('leaderboardItem') == null) {
        localStorage.setItem('leaderboardItem', '[]');
    }
    
    //get old leaderboard item and slap it to the new data
    let oldLeaderboardItem = JSON.parse(localStorage.getItem('leaderboardItem'));
    oldLeaderboardItem.push(leaderboardItem);

    //save the old and new leaderboard item in local storage
    localStorage.setItem('leaderboardItem', JSON.stringify(oldLeaderboardItem));

    //if local storage leaderboardItem is not empty, show contents
    if(localStorage.getItem('leaderboardItem') != null) {
        box.innerHTML += `<h4 class="list-item">`+JSON.parse(localStorage.getItem('leaderboardItem')) +`</h4>`;
    }
}


//if highscore list is > 5, delete the rest
//if(localStorage.getItem('leaderboardItem').length > 5) {

//}









