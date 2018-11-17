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
        var divContainer = $("#questions");
        var answerBox = $("#form-check");
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
        // Let's try for a Finished button to head to score page

        var finishedButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
        divContainer.append(doneButton);
        $("#done-button").on("click", gameMaster.timeStop);
    
    
    }

    },

    var bridgeKeeper =

    [
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
            answers: ["East of West",
            "Saga", "Paper Girls", "Lady Killer"],
            correct: "Lady Killer"
        },
        {
            question: "Who is NOT within the Spider-Verse",
            answers:["Miles Morales", "Gwen Stacy", "Spider-Ham", "Spider-Cop"],
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
    ]