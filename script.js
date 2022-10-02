//create questions and answers
let myQuestions = [ 
    {
        question: "Which planet is the furthest from the sun?",
        answers: ["Neptune", "Jupitor", "Earth", "Uranus"],
        correctAnswer: "Neptune",
    },
    {
        question: "Which planet is the smallest?"  ,
        answers: ["Mercury", "Venus", "Earth", "Saturn"],
        correctAnswer: "Mercury",
    },
    {
        question: "Which planet has supersonic winds?",
        answers: ["Saturn", "Venus", "Neptune", "Uranus"],
        correctAnswer: "Neptune"
    },
    {
        question: "Which is the oldest plannet in our solar system?",
        answers: ["Saturn", "Venus", "Earth", "Jupiter"],
        correctAnswer: "Jupiter"
    }
    ]

// global variables
let startBtn = document.querySelector("#start-quiz");
let timerEl = document.querySelector("#timer");
let questionNumber = 0;
let questionDiv = document.querySelector("#quiz");
let timeLeft = 40;
let score = 0;

//when question is answered correctly, present another question
//when question is answered incorrectly subtract time
//when all questions are answerd or time runs out stop game
//when game is over allow user to save score with initials



//click start button start game and timer
startBtn.addEventListener("click", function(){
    console.log("Start Quiz!")
    countdown()
    randomQuestion()
})

//timer function
function countdown() {
    
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
  }


// reveal random question 
function randomQuestion() {
    document.querySelector("#main-page").innerHTML = "";
    if(questionNumber < myQuestions.length){
        questionDiv.innerHTML = "";
        let currentQuestion = myQuestions[questionNumber];
        let h2El = document.createElement("h2");
        h2El.innerHTML = currentQuestion.question;
        let ul = document.createElement("ul");
        for (let i = 0; i < currentQuestion.answers.length; i++) {
           let button = document.createElement("button");
           button.innerHTML = currentQuestion.answers[i];
           button.addEventListener("click", function(event){
            event.preventDefault()
            console.log(event.target.innerHTML)
            if (currentQuestion.correctAnswer == event.target.innerHTML){
                
                event.target.style.backgroundColor = "green"
                score += 10;
                console.log(score)
            }else {
        
                event.target.style.backgroundColor = "red"
                timeLeft-= 10;
            }
           })
           let li = document.createElement("li");
           li.append(button)
           ul.append(li)    
        }
        let nextBtn = document.createElement("button")
        nextBtn.innerHTML = "Next Question";
        nextBtn.addEventListener("click", function(event){
            event.preventDefault()
            questionNumber++
            randomQuestion()
        })
        questionDiv.append(h2El , ul, nextBtn)
    }else {
        submitInitals()
    }

}


function submitInitals(){
    document.querySelector("#quiz").innerHTML = "";
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.innerHTML = "Initials";
    let input = document.createElement("input");
    let saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Submit Score"
    saveBtn.addEventListener("click", function(event){
        event.preventDefault()
        //store initials, score in local storage
        finalPage()
    })
    div.append(span, input, saveBtn);
    document.querySelector("#quiz").append(div);
}
//save score
function finalPage(){
    document.querySelector("#quiz").innerHTML = "";
    let p
}