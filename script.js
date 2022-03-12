var startSection = document.querySelector(".start");
var startBtn = document.querySelector("#start-button");
var questionSection = document.querySelector(".questions");
var choicesBtns = document.querySelectorAll(".choices");
var questionH2 = document.querySelector(".question")
var scoreDisplay = document.querySelector(".score");
var countdownDisplay = document.querySelector("#countdown");
var initialsSection = document.querySelector(".user-initials");
var input = document.querySelector(".user-input");
var submitBtn = document.querySelector(".submit");
const mostRecentScore = localStorage.getItem("mostRecentScore");
var HIGH_SCORES = document.querySelector("#high-scores");

var currentIndex = 0;
var score = 0;
var countdown = 60;
var NO_OF_HIGH_SCORES = 10;



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



startBtn.addEventListener("click", function() {

  startSection.classList.remove("active");
  questionSection.classList.add("active");

  scoreDisplay.textContent = score;

  startTimer();
  showQuestions();
})

function showQuestions() {
  questionH2.textContent = questions[currentIndex].question;

  choicesBtns.forEach((btn, index) => {
    btn.textContent = questions[currentIndex].choices[index];

    btn.addEventListener("click", function() {

        if (btn.textContent === questions[currentIndex].answer) {
            score++;
            scoreDisplay.textContent = score;
            nextQuestion();
            // console.log(score);
        } else {
            countdown -= 10;
        }
        
    })

  })


}


function nextQuestion() {

  if (currentIndex === (questions.length - 1)) {
      console.log("no more questions")
      // insert function to stop quiz
      askInitials();


  } else {
      currentIndex++;

      questionH2.textContent = questions[currentIndex].question;

      choicesBtns.forEach((btn, index) => {
      btn.textContent = questions[currentIndex].choices[index];
      })

  }
}


function startTimer() {
  countdownDisplay.textContent = countdown;

  var countdownTimer = setInterval(function() {
      countdown--;
      countdownDisplay.textContent = countdown;

      if (countdown <= 0) {
          clearInterval(countdownTimer)
      }
  }, 1000)

}


function askInitials() {
  questionSection.classList.remove("active");
  initialsSection.classList.add("active");
}


submitBtn.addEventListener("click", function() {
  var initials = input.value;
  console.log(initials);

  saveHighScore();
})


initialsSection.addEventListener("keyup", () => {
  console.log(input.value)
  submitBtn = input.value;
})



// function saveHighScore(score, initials) {
  
//   const scoresString = localStorage.getItem('userscores');
  
//   const highScores = JSON.parse(scoresString) || [];
  
//   const newScore = { 
//     score: score, 
//     initials: initials 
//   }
//   // Add to list
//   highScores.push(newScore);
  
//   // Sort the list
//   highScores.sort((a, b) => b.score - a.score);
  
//   // 3. Select new list
//   highScores.splice(NO_OF_HIGH_SCORES);
  
  
//   // Save to local storage
//   localStorage.setItem('userscores', JSON.stringify(highScores));
  
//   console.log(localStorage)
  
// }

// const highScoreString = localStorage.getItem(HIGH_SCORES);
// const highScores = JSON.parse(highScoreString) || [];




// function checkHighScore(score) {
//   const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) || [];
//   const lowestScore = highScores[NO_OF_HIGH_SCORES -1 ].score || 0;
  
//     if (score > lowestScore) {
//       saveHighScore(score, highScores); // TODO
//       showHighScores(); // TODO
//     }
//   }
// highScores.map((score) => `<li>${score.score} — ${score.name}`);

// const highScoreList = document.getElementById(HIGH_SCORES);

// highScoreList.innerHTML = highScores.map((score) => 
//   `<li>${score.score} - ${score.name}`
// );

// function showHighScores() {
//   const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) || [];
//   const highScoreList = document.getElementById(HIGH_SCORES);
  
//   highScoreList.innerHTML = highScores
//     .map((score) => `<li>${score.score} - ${score.name}`)
//     .join('');
// }




















