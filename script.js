var startSection = document.querySelector(".start");
var startBtn = document.querySelector("#start-button");
var questionSection = document.querySelector(".questions");
var choicesBtns = document.querySelectorAll(".choices");
var questionH2 = document.querySelector(".question")
var scoreDisplay = document.querySelector(".score");
var countdownDisplay = document.querySelector("#countdown");


var currentIndex = 0;
var score = 0;
var countdown = 60;



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