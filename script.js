// Variables
var startSection = document.querySelector(".start");
var startBtn = document.querySelector("#start-button");
var questionSection = document.querySelector(".questions");
var choicesBtns = document.querySelectorAll(".choices");
var questionH2 = document.querySelector(".question")
var scoreDisplay = document.querySelector(".score");
var countdownDisplay = document.querySelector("#countdown");
var initialsSection = document.querySelector(".user");
var input = document.querySelector(".user-input");
var submitBtn = document.querySelector(".submit");
var highscoreSection = document.querySelector(".high-scores");


var currentIndex = 0;
var score = 0;
var countdown = 60;
var NO_OF_HIGH_SCORES = 10;
var HIGH_SCORES = 0;


//Variables with questions listed.
var questions = [
  {
    question: "What kind of language is JavaScript?",
    choices: ["Hypertext Markup Language", "Object-based", "Object-Oriented", "Cascading Style Sheet"],
    answer: "Object-Oriented"
  },
  {
    question: "Which function is used to serialize an object into JSON string in JavaScript?",
    choices: ["parse()", "stringify()", "array()", "parseInt()"],
    answer: "stringify()"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    choices: ["Spark", "Django", "Spring", "React"],
    answer: "React"
  },
  {
    question: "Which of the following are not server-side JavaScript objects?",
    choices: ["Date", "FileUpload", "Function", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following is not a method?",
    choices: ["toLowerCase()", ".length", "push()", "sort()"],
    answer: ".length"
  },
  {
    question: "Which of the following methods can be used to display data in some form using JavaScript?",
    choices: ["document.write()", "console.log", "window.alert", "All of the above"],
    answer: "All of the above"
  },
  
]


//Start button that shows question section.
startBtn.addEventListener("click", function() {

  startSection.classList.remove("active");
  questionSection.classList.add("active");

  scoreDisplay.textContent = score;

  startTimer();
  showQuestions();
})

// Displays question with choices, score addition, and countdown penalty.
function showQuestions() {
  questionH2.textContent = questions[currentIndex].question;

  choicesBtns.forEach((btn, index) => {
    btn.textContent = questions[currentIndex].choices[index];

    btn.addEventListener("click", function() {

        if (btn.textContent === questions[currentIndex].answer) {
            score++;
            scoreDisplay.textContent = score;
            nextQuestion();
           
        } else {
            countdown -= 10;
        }
        
    })

  })


}

//If there are no more questions, ask the initials. If not, keep asking next question.
function nextQuestion() {

  if (currentIndex === (questions.length - 1)) {
      
      askInitials();


  } else {
      currentIndex++;

      questionH2.textContent = questions[currentIndex].question;

      choicesBtns.forEach((btn, index) => {
      btn.textContent = questions[currentIndex].choices[index];
      })

  }
}

//Start countdown timer. Once time ends, ask initials.
function startTimer() {
  countdownDisplay.textContent = countdown;

  var countdownTimer = setInterval(function() {
      countdown--;
      countdownDisplay.textContent = countdown;

      if (countdown <= 0) {
          clearInterval(countdownTimer)
          askInitials();
      }
  }, 1000)

}

//Initials section 
function askInitials() {
  questionSection.classList.remove("active");
  initialsSection.classList.add("active");

  getScore();

}

//saves score with initials section
submitBtn.addEventListener("click", function() {
  var userInitials = input.value;
  
  initialsSection.classList.remove("active");
  highscoreSection.classList.add("active");
  
  setScore(score, userInitials);
})


function setScore() {
  
  localStorage.setItem("highscore", score);
  localStorage.setItem("userInitials", document.getElementById('user-input').value);

  getScore();
}

function getScore() {
  var scoreSummary = `
  <h2>` + localStorage.getItem("userInitials") + `'s highscore: <h2>
  <h1>` + localStorage.getItem("highscore") + `</h1>
  
  <button onclick="clearScore()">Reset Score</button><button onclick="resetGame()">Replay</button>`;

  document.getElementById(".high-scores").innerHTML = scoreSummary;
}

function clearScore(){
  localStorage.setItem("highscore", "");
  localStorage.setItem("user-input", "");

}





// function setScore() {
//   local
// }























