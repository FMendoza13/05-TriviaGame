$(document).ready(function(){

// I need a start button to start quiz
$("#start").on("click", gameMaster.timeStart);


});
// This variable describes where the game is in progress
var gameMaster = {

    tickTock : 120,

// start the quiz and timer, and show the questions page

timeStart: function() {
    $("#countdown").text("Tick-Tock: " + gameMaster.tickTock);
    setInterval(gameMaster.tickTock, 1000);
    $("#front-page").hide();
    trivia.displayQuestions()
    },

    // countdown seconds on timer until 0
    countdown: function() {
        gameMaster.tickTock--;
        $("#countdown").text("Tick-Tock: " + gameMaster.tickTock);
        if (gameMaster.tickTock === 0) {
            gameMaster.timeStop();
            $("#countdown").empty();
        }
    },

    // Stop timer, please!
    timeStop: function() {
        clearInterval();
        trivia.checkAnswers();
    },
    // last page with the results of the quiz sans questions
    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
        $("#last-page").show();
        $("#questions").empty();
        $("#countdown").empty();
        $("#right-answers").text("Right Answers (You know it!): " + numCorrect);
        $("#wrong-answers").text("Wrong Answers (Ya blew it!): " + numIncorrect);
        $("#unanswered").text("Answers Left Blank (You didn't even try!): " + numUnanswered);
    }
}
    
//    some functions for building questions and to add to score
var triviaGame = {

    displayQuestions: function() {
        var divContainer = $(".questions");
        var answerBox = $(".form-check");
        divContainer.append("<h2>Try your hand at the following questions:</h2>");

        for (var i = 0; i < bridgeKeeper.length; i++){
           
            divContainer.append('<div id="question">' + bridgeKeeper[i].question + '</div>');

            var answer1 = bridgeKeeper[i].answers[0];
            var answer2 = bridgeKeeper[i].answers[1];
            var answer3 = bridgeKeeper[i].answers[2];

            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
            
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
            
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
        }
    }
    },