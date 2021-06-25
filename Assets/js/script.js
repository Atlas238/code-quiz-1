// Setting up variables for HTML Elements I will be manipulating per question
var mainEl = document.querySelector("main");

var questionCardEl = document.querySelector(".question-card");

// Setting up objects to contain the question and response content...
let questionOne = {

  question: "In HTML, what is the proper name for a <tag>?",

  responseA: "Attribute",

  responseB: "Element",

  responseC: "Selector",

  responseD: "Trait",

};

let questionTwo = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",
  
}

let questionThree = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",
  
}

let questionFour = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",
  
}

let questionFive = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",
  
}

let questionSix = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",
  
}

let questionSeven = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",
  
}

let questionEight = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",
  
}

let questionNine = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",
  
}

let questionTen = {

    question: "sdflksjdlfkj",

    responseA: "a;sldkfjsjfd",
  
    responseB: "sdklfjalsdkjf;",
  
    responseC: "sdlfkajs;dlfkj",
  
    responseD: "lsd;fajlkf;lkj",
  
}

// Smacking an array for the questions, can iterate this way 
var questionArr = [
    
    questionOne,
    
    questionTwo,

    questionThree,

    questionFour,

    questionFive,

    questionSix,

    questionSeven,

    questionEight,

    questionNine,

    questionTen

]

// TODO: When a player clicks the play now button change the layout to show our ol element  and populate the ol with li from our ojects (questionOne.responseA - questionOne.responseD, or index 0-9 of questionArr for full question)

// TODO: User selects an answer and that response is compared to the correct response, then logged as either correct (win ++) or a loss (loss++)

// TODO: If a loss is identified, subtract 10 seconds from our timer

// TODO: Display user score after completion of the quiz (or if timer reaches 0), ask user for initials, and log user initials and score (userScore = {initials: JRB, wins:10, loses: 0})

// TODO: Offer chance to save (Log to local mem on event) or retry (run start game, do not log score)

// TODO: Show gameover screen and scoreboard with saved Initials wins loses if user saved their score


function timerCountdown() {

    var timeRemaining = 6000,

}