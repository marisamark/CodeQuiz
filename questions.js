//Define variables
var viewhighscores = document.getElementById("viewhighscores");
var timer = document.getElementById("timer");
var start;
var seconds;
var timeLeft = 45;
var score = 0;
var currentQuestion = 0;
var title;
var chocies;
var answer;
var alert = document.getElementById("alert");
var questions = [
    {
        title: "Which of the following is another way of defining a variable?",
        choices: ["let", "foo", "varsity", "given"],
        answer: "let"
    },
    {
        title: "What is the default value of a variable?",
        choices: ["12", "1", "undefined", "10"],
        answer: "undefined"

    },
    {
        title: "How do you do create an element in JavaScript?",
        choices: ["document.createElement", "document.addelement", "document.appendchild", "document.list"],
        answer: "document.createElement"

    },
    {
        title: "Which is an example of a boolean value?",
        choices: ["3", "5", "1", "14"],
        answer: "1"

    },
    {
        title: "Which allows you to multiply elements?",
        choices: ["+", "=", "&", "*"],
        answer: "*"

    },
    {
        title: "body.appendChild(kittenEl); means what",
        choices: ["the element kitten was added to the body", "there is a kitten element that has been created", "the index of kitten is E1", "the child element of kitten is body"],
        answer: "the element kitten was added to the body"

    },
    {
        title: "'function red (music)' the name of this function is... ",
        choices: ["music", "function", "red", "no name"],
        answer: "red"

    },
    {
        title: "Which variable is almost always used for for loops? ",
        choices: ["i", "f", "m", "none of the above"],
        answer: "red"
    },
    {
        title: "How would you write 'or' in JavaScript syntax? ",
        choices: ["||", "&", "%", "none of the above"],
        answer: "||"
    },
    {
        title: "JSON.stringify() does what",
        choices: ["creates a string called stringify", "converts a JavaScript object or value to a JSON string", "makes JSON a variable", "makes all elements of a page into strings"],
        answer: "converts a JavaScript object or value to a JSON string"
    },
]
//  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

function createButtons() {
    let question = questions[currentQuestion];
    let text1 = document.getElementById("question");
    text1.textContent = question.title;
    document.getElementById("choices").innerHTML = '';
    for (let i = 0; i < question.choices.length; i++) {

        let buttonchoice = document.createElement('button')
        buttonchoice.addEventListener("click", function (event) {
            console.log(event.target)
            currentQuestion++;
            if (currentQuestion === questions.length) {
                wereDone();
            } else {
                console.log(event.target.textContent, question.answer);
                console.log(alert)
                if (event.target.textContent === question.answer) {
                    score++;
                    alert.innerHTML = "<p>Correct!</p>";
                } else {
                    score--;
                    alert.textContent = "Wrong!";
                    timeLeft -= 15;
                }

                createButtons();
            }
        })

        buttonchoice.textContent = question.choices[i]
        document.getElementById("choices").appendChild(buttonchoice)
    }
}
createButtons();

function wereDone() {
}

function quizorder() {
    questions.title[i]
}


//create function for timer 
var timer = setInterval(
    function prepareQuiz() {
        // var timestart;


        // //  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.
        //        document.createElement("button").innerHTML


        //Display timer on screen
        timeLeft--;
        document.getElementById("timer").innerHTML = "Timer: " + timeLeft + "s";

        //Notfiy player that there is no time left, move onto next question, stop quiz.
        if (timeLeft === 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Time's Up!";
        }
    }, 1000);








