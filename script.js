//Define variables
var viewhighscores = document.getElementById("viewhighscores");
var timer = document.getElementById("timer");
var minutes;
var timeLeft;
var start;
var seconds;
var timeLeft;
var score;

//create function for timer 
var timer = setInterval(
function prepareQuiz() {
var timeLeft = 5;


//  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.



//conversion miliseconds to minutes 
var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); 
  if (minutes < 10) minutes="0"+minutes;
//conversion miliseconds to seconds
var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  if (seconds < 10) seconds="0"+seconds;

//Display timer on screen
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s"; 

//Notfiy player that there is no time left, move onto next question, stop quiz.
  if (timeLeft === 0) {
    clearInterval(timing);
    document.getElementById("timer").innerHTML = "Time's Up!"; 
  }
}, 1000);

//create for loop to go through all questions 
for (var i = 0; i < questions.length; i++) {
    let question = questions[i];
    findAnswer= confirm(question.title);
     
    if (findAnswer === question.answer) {
     score++;
     
    alert("Correct" + score);
    // alert(`You are right! Score ${wins}`);
    }
     
    else {
    score--;
    alert("Incorrect!" + score);
     }
    }

//  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

