// Variable declaration, need question info to be global as well as our main element selectors and our end stats
var mainEl = document.querySelector("main");

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

  correctAns: 2,
};

let questionTwo = {
  question: "Which of the following represents a class selector in CSS?",

  responseA: "#Selector",

  responseB: ".Selector",

  responseC: ":Selector",

  responseD: "~Selector",

  correctAns: 2,
};

let questionThree = {
  question:
    "Which of the following is NOT a way to define a Javascript variable?",

  responseA: "let variableName = ",

  responseB: "var variableName =",

  responseC: "map variableName =",

  responseD: "const variableName =",

  correctAns: 3,
};

let questionFour = {
  question: "Which of the following is a real CSS pseudo-class?",

  responseA: ":bounce",

  responseB: ":cursor",

  responseC: ":hover",

  responseD: ":left",

  correctAns: 3,
};

let questionFive = {
  question: "Which of the following is NOT a real CSS pseudo-element?",

  responseA: "::after",

  responseB: "::cue",

  responseC: "::selection",

  responseD: "::post",

  correctAns: 4,
};

let questionSix = {
  question: "Which of the following represents the first item in an array?",

  responseA: "1",

  responseB: "First",

  responseC: "0",

  responseD: "1st",

  correctAns: 3,
};

// Making an array for the questions
var questionArr = [
  questionOne,

  questionTwo,

  questionThree,

  questionFour,

  questionFive,

  questionSix,
];

// Listening for click...
button.addEventListener("click", startGame);

function startGame() {
  // Firt thing, class of main changes to game-start to hide the starter page items and display the question card
  mainEl.className = "game-start";
  questionNumber = 0;
  // Start timer (1 minute), rounding from miliseconds to seconds for readability, seems slow but pretty sure thats 1 min...
  var time = 6000;

  var timeRemaining = setInterval(function () {
    time--;
    timer.textContent = Math.floor(time / 100);
    if (time <= 0) {
      clearInterval(timeRemaining);
      timer.textContent = "Game Over!";
      gameOver();
    }
  });

  var winCount = document.getElementById("wins");
  winCount.textContent = wins;

  var lossesCount = document.getElementById("losses");
  lossesCount.textContent = losses;

  // Adding in HTML Elements to fill with question info
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
  userChoice4.setAttribute("id", "4");
  document.getElementById("responses").appendChild(userChoice4);

  var checkBoxD = document.createElement("input");
  checkBoxD.setAttribute("id", "choice4");
  checkBoxD.type = "radio";
  checkBoxD.name = "userChoice";
  document.getElementById("4").appendChild(checkBoxD);

  var labelCheckboxD = document.createElement("label");
  labelCheckboxD.setAttribute("for", "choice4");
  document.getElementById("4").appendChild(labelCheckboxD);

  // Fills elements with info from index'd questions
  function fillQuestions() {
    // Fills question h3 based on question number
    document.getElementById("question").textContent =
      questionArr[questionNumber].question;
    labelCheckboxA.textContent = questionArr[questionNumber].responseA;
    labelCheckboxB.textContent = questionArr[questionNumber].responseB;
    labelCheckboxC.textContent = questionArr[questionNumber].responseC;
    labelCheckboxD.textContent = questionArr[questionNumber].responseD;
  }

  fillQuestions();
  // Creating array of checkboxes to see which index is checked
  var inputArr = [checkBoxA, checkBoxB, checkBoxC, checkBoxD];
  // Listening on the next question button, start checking per response if a response is checked, if so check the index of the response against the index of our correct answer, if they are the same award a point, advance to the next question and fill the card with the next questions info, if not, award a loss, advance and fill as well as subtract from overall time. If the question is the final question, go to game over and ask user to log their score!
  document.getElementById("nextQ").addEventListener("click", function () {
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i].checked) {
        if (i + 1 === questionArr[questionNumber].correctAns) {
          wins++;
          winCount.textContent = wins;
          questionNumber++;
          inputArr[i].checked = false;

          if (questionNumber >= questionArr.length) {
            gameOver();
          } else {
            fillQuestions();
          }
        } else {
          losses++;
          lossesCount.textContent = losses;
          time = time - 100;
          questionNumber++;
          inputArr[i].checked = false;

          if (questionNumber >= questionArr.length) {
            gameOver();
          } else {
            fillQuestions();
          }
        }
      }
    }
  });
}

// Show user score, allow initials input, log as an object to localStorage to then pull down for scoreboard
function gameOver() {
  mainEl.className = "game-over";
  window.clearInterval(timeRemaining);
  timeRemaining = null;
  time = 0;
  timer.textContent = "Game Over!";
  // When this is clicked, store the input field and wins value as ScoreStore, convert it to a string and then stores them in local storage
  let x = 0;
  if (x === 0) {
    document
      .getElementById("scoreboardAdd")
      .addEventListener("click", function () {
        var initials = document.getElementById("userInitials").value;
        var scoreStore = {
          winNum: wins,
          lossesNum: losses,
        };
        if (initials.length < 0) {
          alert(
            "You must write something for your initials - but you dont have to save your score!"
          );
        } else {
          var scoreStoreString = JSON.stringify(scoreStore);
          localStorage.setItem(initials, scoreStoreString);
          document.getElementById("userInitials").textContent = "Thank you!";
          x++;
        }
      });
  }
  document.getElementById("showScores").addEventListener("click", function () {
    mainEl.className = "scoreboardView";
    // Creating li elements in user-scores
    var scoreli1 = document.createElement("li");
    document.getElementById("user-scores").appendChild(scoreli1);
    var scoreli2 = document.createElement("li");
    document.getElementById("user-scores").appendChild(scoreli2);
    var scoreli3 = document.createElement("li");
    document.getElementById("user-scores").appendChild(scoreli3);
    var scoreli4 = document.createElement("li");
    document.getElementById("user-scores").appendChild(scoreli4);
    var scoreli5 = document.createElement("li");
    document.getElementById("user-scores").appendChild(scoreli5);

    // Pulling things from storage and making them usable
    let localStorageStrings = [];
    let localStorageParsed = [];
    let localStorageKeyArr = [];
    let combined = [];

    function pullScores() {
      for (let i = 0; i < localStorage.length; i++) {
        localStorageKeyArr.push(localStorage.key(i));
      }

      for (let i = 0; i < localStorageKeyArr.length; i++) {
        localStorageStrings.push(localStorage.getItem(localStorageKeyArr[i]));
      }

      for (let i = 0; i < localStorageStrings.length; i++) {
        localStorageParsed.push(JSON.parse(localStorageStrings[i]));
      }

      for (let i = 0; i < localStorageKeyArr.length; i++) {
        combined[localStorageKeyArr[i]] = localStorageParsed[i];
      }
    }
    pullScores();
    console.log(combined);

    //     let scoreboardList = {};
    //  for (const initial in combined) {
    //      console.log(initial.winNum);
    //      };

    // Filling the scoreboard with SORTED scores...
    // scoreli1.textContent = scoreboardList[0];
    // scoreli2.textContent = scoreboardList[1];
    // scoreli3.textContent = scoreboardList[2];
    // scoreli4.textContent = scoreboardList[3];
    // scoreli5.textContent = scoreboardList[4];

    // localStorage.key() can be fed an index and will return the key name for that index, then can call that item by key and do regular comparisons0
  });
}
