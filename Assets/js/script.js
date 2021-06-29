var mainEl = document.querySelector("main");

var questionCardEl = document.querySelector(".question-card");

var timer = document.querySelector("#timeRemaining");

var button = document.querySelector("#btn");

var button2 = document.querySelector("#btn2");

var rules = document.querySelector("#rule");

var questionNumber = 0;

var wins = 0;

var losses = 0;

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


var questionArr = [
  questionOne,

  questionTwo,

  questionThree,

  questionFour,

  questionFive,

  questionSix,
];

var tracker = 0;

button.addEventListener("click", startGame);

button2.addEventListener(`click`, function () {
  tracker++;
  gameOver();
});

var timeRemaining;

function startGame() {
  mainEl.className = "game-start";
  questionNumber = 0;
  var time = 6000;

  timeRemaining = setInterval(function () {
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

  var inputArr = [checkBoxA, checkBoxB, checkBoxC, checkBoxD];

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

function gameOver() {
  mainEl.className = "game-over";
  window.clearInterval(timeRemaining);

  timer.textContent = "Game Over!";

  if (tracker == 0) {
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
    document
      .getElementById("showScores")
      .addEventListener("click", function () {
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

        let localStorageStrings = [];
        let localStorageParsed = [];
        let localStorageKeyArr = [];

        function pullScores() {
          for (let i = 0; i < localStorage.length; i++) {
            localStorageKeyArr.push(localStorage.key(i));
          }

          for (let i = 0; i < localStorageKeyArr.length; i++) {
            localStorageStrings.push(
              localStorage.getItem(localStorageKeyArr[i])
            );
          }

          for (let i = 0; i < localStorageStrings.length; i++) {
            var thisObj = JSON.parse(localStorageStrings[i]);
            thisObj.name = localStorageKeyArr[i];
            localStorageParsed.push(thisObj);
          }
        }

        pullScores();
        fillScores();

        function fillScores() {
          var localStorageSorted = localStorageParsed.sort((a, b) =>
            a.winNum > b.winNum ? 1 : -1
          );

          let scoreboardLi = [scoreli1, scoreli2, scoreli3, scoreli4, scoreli5];

          var x = 0;
          for (let i = localStorageSorted.length - 1; i >= 0; i--) {
            scoreboardLi[x].textContent =
              "Correct: " +
              localStorageSorted[i].winNum +
              "  Name: " +
              localStorageSorted[i].name;
            x++;
          }

          var startOver = document.createElement(`button`);

          document.getElementById(`user-scores`).append(startOver);

          startOver.textContent = `Try again?`;
          startOver.addEventListener(`click`, function () {
            location = location;
          });
        }
      });
  } else {
    mainEl.className = "scoreboardView";

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

    let localStorageStrings = [];
    let localStorageParsed = [];
    let localStorageKeyArr = [];

    function pullScores() {
      for (let i = 0; i < localStorage.length; i++) {
        localStorageKeyArr.push(localStorage.key(i));
      }

      for (let i = 0; i < localStorageKeyArr.length; i++) {
        localStorageStrings.push(localStorage.getItem(localStorageKeyArr[i]));
      }

      for (let i = 0; i < localStorageStrings.length; i++) {
        var thisObj = JSON.parse(localStorageStrings[i]);
        thisObj.name = localStorageKeyArr[i];
        localStorageParsed.push(thisObj);
      }
    }

    pullScores();
    fillScores();

    function fillScores() {
      var localStorageSorted = localStorageParsed.sort((a, b) =>
        a.winNum > b.winNum ? 1 : -1
      );

      let scoreboardLi = [scoreli1, scoreli2, scoreli3, scoreli4, scoreli5];

      var x = 0;
      for (let i = localStorageSorted.length - 1; i >= 0; i--) {
        scoreboardLi[x].textContent =
          "Correct: " +
          localStorageSorted[i].winNum +
          "  Name: " +
          localStorageSorted[i].name;
        x++;
      }

      var startOver = document.createElement(`button`);

      document.getElementById(`user-scores`).append(startOver);

      startOver.textContent = `Try again?`;
      startOver.addEventListener(`click`, function () {
        location = location;
      });
    }
    tracker = 0;
  }
}
