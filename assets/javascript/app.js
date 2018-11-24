$(document).ready(function() {
  // I need a start button to start quiz
  
  var timestart = function() {
    $("#countdown").text("Tick-Tock: " + gameMaster.tickTock);
    gameMaster.intervalId = setInterval(countdown, 1000);
    $("#front-page").hide();
    trivia.displayQuestions();
  }

  // last page with the results of the quiz sans questions
function showEndPage(numCorrect, numIncorrect, numUnanswered) {
  $("#last-page").show();
  $("#questions").empty();
  $("#countdown").empty();
  $("#right-answers").text("Right Answers (You know it!): " + numCorrect);
  $("#wrong-answers").text("Wrong Answers (Ya blew it!): " + numIncorrect);
  $("#unanswered").text(
    "Answers Left Blank (You didn't even try!): " + numUnanswered
  );
}


  //    some functions for building questions and to add to score
var trivia = {
  displayQuestions: function() {
    var divContainer = $("#questions");
    var answerBox = $("#form-check");
    divContainer.append("<h2>Try your hand at the following questions:</h2>");

    for (var i = 0; i < bridgeKeeper.length; i++) {
      divContainer.append(
        `<div id="question${i}"> ${bridgeKeeper[i].question} </div>`
      );
      var answers = bridgeKeeper[i].answers;
      for(var j = 0; j < answers.length; j++) {
        divContainer.append(
          `<div class="form-check">
            <input class="form-check-input" type="radio" name="radio-group${i}" id="radio${i}${j}" value="${answers[j]}">
            <label class="form-check-label" id="radio${i}${j}label" for="radio${i}${j}">  ${answers[j]}</label>
          </div>`
        );  
      }
        
    }
    // Let's try for a Finished button to head to score page

    var doneButton =
      '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
    divContainer.append(doneButton);
    $("#done-button").on("click", timeStop);
  },
  checkAnswers: function() {
    console.log('checking answers')
    clearInterval(gameMaster.intervalId)
    // ADD checking answser logic here
    var numCorrect = 0
    var numIncorrect = 0
    var numUnanswered = 0;
    // get all the correct answers
    var correctAnswers = []
    for (var i = 0; i < bridgeKeeper.length; i++) {
      correctAnswers.push(bridgeKeeper[i].correct)
    }
    // get all the input values from the radio inputs
    $("input[type='radio']:checked").each(function(){
      if (correctAnswers.includes($(this).val())) {
        numCorrect++
      } else {
        numIncorrect++
      }
    })
    // for each value:
    //   if the value of the radio button is equal to the correct answer 
    //      correctAnswers++
    //   else 
    //      wrongAnswers++
    // numUnanswered = num of possibleCorrectanswers - number of values selected
    numUnanswered = correctAnswers.length - $("input[type='radio']:checked").length 

    showEndPage(numCorrect, numIncorrect,numUnanswered);
  }
};
  
  $("#start").on("click", timestart)
  // This variable describes where the game is in progress
  var gameMaster = {
    intervalId: 0, 
    tickTock: 120
  }



// countdown seconds on timer until 0
function countdown() {
  gameMaster.tickTock--;
  $("#countdown").text("Tick-Tock: " + gameMaster.tickTock);
  if (gameMaster.tickTock === 0) {
     timeStop();
    $("#countdown").empty();
  }
}

// Stop timer, please!
var timeStop = function() {
  clearInterval();
  trivia.checkAnswers();
}


var bridgeKeeper = [
  {
    question: "Who was Wolverine's very first adversary?",
    answers: ["Spider-Man", "The Thing", "Cyclops", "The Hulk"],
    correct: "The Hulk"
  },
  {
    question: "Who killed Bruce Wayne's parents?",
    answers: ["The Joker", "Carmine Falcone", "Joe Chill", "Sal Maroni"],
    correct: "Joe Chill"
  },
  {
    question: "Which one of these comics is NOT from Image Comics?",
    answers: ["East of West", "Saga", "Paper Girls", "Lady Killer"],
    correct: "Lady Killer"
  },
  {
    question: "Who is NOT within the Spider-Verse",
    answers: ["Miles Morales", "Gwen Stacy", "Spider-Ham", "Spider-Cop"],
    correct: "Spider-Cop"
  },
  {
    question: "Who broke Batman?",
    answers: ["Superman", "The Joker", "Killer Croc", "Bane"],
    correct: "Bane"
  },
  {
    question: "Which character has NOT died?",
    answers: ["Batman", "Spider-Man", "Wolverine", "Everyone Dies"],
    correct: "Everyone Dies"
  }
];
});