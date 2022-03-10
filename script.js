
var quizContent = document.getElementById("#quiz-content")
const startButton = document.getElementById("#start-button");
const questionContainer = document.getElementById("#question-card");
const questionEl = Array.from(document.querySelectorAll("#question-choices");
var latestTime = document.querySelector("#latestTime");
var wrap = document.querySelector("#wrap");

var questionIdx = 0;
var score = 0;

var questionTypes = [
  {
    question: "",
    choices: ["", "", "", ""],
    answer: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    answer: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    answer: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    answer: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    answer: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    answer: ""
  },

];




startButton.addEventListener("click", function(){
  if(timeLeft === 0){
    var timeInterval = setInterval(function(){
      latestTime.textContent = "Timer: " + timeLeft;
      timeLeft--;
      
      
      if (timeLeft <= 0){
        clearInterval(timeInterval);
        latestTime.textContent = "Done!"

        //timer reaches 0
        countdown();
      }
    }, 1000);
  }
  render(questionIdx);
});


function render(questionIdx){
  quizContent.innerHTML = "";
  questionContainer.innerHTML = "";
  

  for (let i = 0; i < questionType.length; i++){
    let typeOfQuestion = questionTypes[questionIdx].question;
    let typeOfChoices = questionTypes[questionIdx].choices;
    quizContent.textContent = typeOfQuestion;
  }

  typeOfChoices.forEach(function (newChoices){
    var listOfChoices = document.createElement
  })
}











// first question is presented
function questionStarts(){
  resetState()
  
}



//prompts another question
function nextQuestion(question){
  button.addEventListener("click", answerSelected)

}
  



//answers question by clicking on it
function answerSelected(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

}


//shows question is correct or incorrect
function setStatusClass(element, correct){
  clearStatusClass(element)
  
}


function clearStatusClass(element){

  
}



//answering the question incorrectly, reduces time by 10 seconds
function timeReduced(){

}


//time reaches zero or questions are all answered

//game is over
function gameOver(){

}


//save the score with initials
function saveScore(){

}


//Quiz resets and goes back to home page
function resetState(){
  
}

