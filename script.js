//Define variables
var viewhighscores = document.getElementById("viewhighscores");
var timer = document.getElementById("timer");
var timerId, timerId2;
var start;
var seconds;
var timeLeft = 60;
var score = 0;
var currentQuestion = 0;
var title;
var chocies;
var answer;
var alert = document.getElementById("alert");
var landingDiv = document.getElementById("landing");
var gameDiv = document.getElementById("game");
var closingDiv = document.getElementById("closing");


//  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).


function highscoreform () {
  closingDiv.setAttribute("class", "hide");
}
highscoreform();


document.getElementById('start').addEventListener("click", start);

function start() {
  landingDiv.setAttribute("class", "hide");
  gameDiv.removeAttribute("class");
  createButtons();
  timerId = startTimer(1, "timer", timerId);
}


function createButtons() {
  let question = questions[currentQuestion];
  let text1 = document.getElementById("question");
  text1.textContent = question.title;
  document.getElementById("choices").innerHTML = '';
  for (let i = 0; i < question.choices.length; i++) {

    let buttonchoice = document.createElement('button')
    buttonchoice.setAttribute("class", "button");
    buttonchoice.setAttribute("value", question.choices[i])
    buttonchoice.onclick = answerClick
    // buttonchoice.addEventListener("click", function (event) {
    //   console.log(event.target)
    //   currentQuestion++;

    //     createButtons();
    //   }
    buttonchoice.textContent = question.choices[i]
    document.getElementById("choices").appendChild(buttonchoice)
  }

}
function answerClick() {
  if (currentQuestion === questions.length) {
  
    gameDiv.setAttribute("class", "hide");  
    closingDiv.removeAttribute("class","hide");
      return wereDone();
  }

  
  if (this.value === questions[currentQuestion].answer) {
    AdvanceGame(true, "Correct!");
  } else {
    AdvanceGame(false, "Wrong!");
  }
}

function AdvanceGame(isCorrect, text) {
  if (isCorrect) {
    score++;
  } else {
    score--
    timeLeft -= 5;
  }
  alert.textContent = text;
  currentQuestion++;
  createButtons();
}

function wereDone() {
}

function quizorder() {
  questions.title[i]
}


//create function for timer 
function startTimer(val, id, intervalId) {
  clearInterval(intervalId)
  intervalId = setInterval(function () {

    //Display timer on screen
    timeLeft--;
    document.getElementById(id).innerHTML = timeLeft;

    //Notfiy player that there is no time left, move onto next question, stop quiz.
    if (timeLeft === 0 || currentQuestion === questions.length) {
      clearInterval(timerId);
      document.getElementById(id).innerHTML = "Time's Up!";
    }
  }, val * 1000);
  return intervalId;
}




function playerscores() {

  localStorage.setItem("player", getElementById("InputInitials"));
  document.getElementById('submit').addEventListener("click", submit);
}

playerscores();

