// Setting up variables for HTML Elements I will be manipulating per question
// mainEl is our entire scene, want to use this to change mainEl class to quizStart to change layout and transition to quiz question format
var mainEl = document.querySelector("main");
// Our card itself, this way we can change the content by calling the whole object, and be specific with .children[] to target the actual question portion and the list of responses
var questionCardEl = document.querySelector(".question-card");

var timer = document.querySelector("#timeRemaining");

var button = document.querySelector("#btn");

var rules = document.querySelector("#rule");

var questionNumber = 0;

var wins = 0;

var losses = 0;

// Setting up objects to contain the question and response content...
let questionOne = {

  question: "In HTML, what is the proper name for a <tag>?",

  responseA: "Attribute",

  responseB: "Element",

  responseC: "Selector",

  responseD: "Trait",

  correctAns: "Element"

};

let questionTwo = {

    question: "Which of the following represents a class selector in CSS?",

    responseA: "#Selector",
  
    responseB: ".Selector",
  
    responseC: ":Selector",
  
    responseD: "~Selector",

    correctAns: ".Selector"
  
}

let questionThree = {

    question: "Which of the following is NOT a way to define a Javascript variable?",

    responseA: "let variableName = ",
  
    responseB: "var variableName =",
  
    responseC: "map variableName =",
  
    responseD: "const variableName =",

    correctAns: "map variableName ="
  
}

let questionFour = {

    question: "asd",

    responseA: "adsf",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",

    correctAns: ""
  
}

let questionFive = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",

    correctAns: ""
  
}

let questionSix = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",

    correctAns: ""
  
}

// Making an array for the questions
var questionArr = [
    
    questionOne,
    
    questionTwo,

    questionThree,

    questionFour,

    questionFive,

    questionSix,

]

// Listening for click...
button.addEventListener("click", startGame);

function startGame() {
    // Firt thing, class of main changes to game-start to hide the starter page items and display the question card
    mainEl.className = "game-start";
    questionNumber = 0;
    // Start timer (1 minute), rounding from miliseconds to seconds for readability, seems slow but pretty sure thats 1 min...
var timeLeft = 6000;

var timeRemaining = setInterval(function () {
    timeLeft --;
    timer.textContent = Math.floor((timeLeft / 100));
        if (timeLeft <= 0) {
            clearInterval(timeRemaining);
            timer.textContent = "Game Over!"
            gameOver();
        }
    })

var winCount = document.getElementById("wins");
    winCount.textContent = wins;

var lossesCount = document.getElementById("losses");
    lossesCount.textContent = losses;

    // Sets the questions elements in place 
    // Making boxes for formatting
    var userChoice1 = document.createElement("div");
        userChoice1.setAttribute("id", "1");
        document.getElementById("responses").appendChild(userChoice1);
        
        var checkBoxA = document.createElement("input");
            checkBoxA.setAttribute("id", "choice1");
            checkBoxA.type = "radio";
            checkBoxA.name = "userChoice";
            document.getElementById("1").appendChild(checkBoxA);
        
        let labelCheckboxA = document.createElement("label");
            labelCheckboxA.setAttribute("for", "choice1");
            document.getElementById("1").appendChild(labelCheckboxA);
        
    var userChoice2 = document.createElement("div");
        userChoice2.setAttribute("id", "2");
        document.getElementById("responses").appendChild(userChoice2);
        
        var checkBoxB = document.createElement("input");
            checkBoxB.setAttribute("id", "choice2");
            checkBoxB.type = "radio";
            checkBoxB.name = "userChoice";
            document.getElementById("2").appendChild(checkBoxB);
            
        let labelCheckboxB = document.createElement("label");
            labelCheckboxB.setAttribute("for", "choice2");
            document.getElementById("2").appendChild(labelCheckboxB);
            
    var userChoice3 = document.createElement("div");
        userChoice3.setAttribute("id", "3");
        document.getElementById("responses").appendChild(userChoice3);
            
        var checkBoxC = document.createElement("input");
            checkBoxC.setAttribute("id", "choice3");
            checkBoxC.type = "radio";
            checkBoxC.name = "userChoice";
            document.getElementById("3").appendChild(checkBoxC);
            
        let labelCheckboxC = document.createElement("label");
            labelCheckboxC.setAttribute("for", "choice3");
            document.getElementById("3").appendChild(labelCheckboxC);
            
    var userChoice4 = document.createElement("div");
        userChoice4.setAttribute("id", "4")
        document.getElementById("responses").appendChild(userChoice4);
            
            var checkBoxD = document.createElement("input");
            checkBoxD.setAttribute("id", "choice4");
            checkBoxD.type = "radio";
            checkBoxD.name = "userChoice";
            document.getElementById("4").appendChild(checkBoxD);
            
            var labelCheckboxD = document.createElement("label");
            labelCheckboxD.setAttribute("for", "choice4");
            document.getElementById("4").appendChild(labelCheckboxD);

            function fillQuestions() {
                // Fills question h3 based on question number
                document.getElementById("question").textContent = (questionArr[questionNumber].question);
                labelCheckboxA.textContent = (questionArr[questionNumber].responseA);
                labelCheckboxB.textContent = (questionArr[questionNumber].responseB);
                labelCheckboxC.textContent = (questionArr[questionNumber].responseC);
                labelCheckboxD.textContent = (questionArr[questionNumber].responseD);
            }

    fillQuestions();

    var inputArr = [
        checkBoxA,
        checkBoxB,
        checkBoxC,
        checkBoxD
    ]

    var responseArr = {
        a: (questionArr[questionNumber].responseA) ,
        b: (questionArr[questionNumber].responseB),
        c: (questionArr[questionNumber].responseC),
        d: (questionArr[questionNumber].responseD)
    }
    
    document.getElementById("nextQ").addEventListener("click", function() {
        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i].checked) {
                if ()
            
            }
        }
    });



        }

// Show user score, allow initials input, log as an object to localStorage to then pull down for scoreboard
function gameOver() {
    mainEl.className = "game-over";
    timeLeft = 0

};
