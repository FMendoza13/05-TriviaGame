$(document).ready(function(){

// I need a start button to start quiz
$("#start").on("click", gameMaster.timeStart);


});
// This variable describes where the game is in progress
var gameMaster = {

    tickTock : 120,

// start the quiz and timer, and show the questions page

timeStart: function() {
    $(".countdown").text("tickTock: " + gameMaster.tickTock);
    setInterval(gameMaster.tickTock, 1000);
    $(".front-page").hide();
    trivia.displayQuestions()
    },

    // countdown seconds on timer until 0




}