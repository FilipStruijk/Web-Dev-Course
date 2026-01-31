
// List variables used - empty arrays
var gamePattern = [];
var userClickedPattern = [];


// Filled arrays
var buttonColours = ["red", "blue", "green", "yellow"];

// Started variable
var started = false;

// Level variable
var level = 0;


$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
  }
});


// create a handler function that takes the id of each cliked button and
// pushes it to the array of userClicked pattern
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    //play sound
    playSound(userChosenColour);
    // Animate the press
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1)
});


// Create a function that takes a random number between 0 and 3 and pushes the
// equivalent color to game pattern
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // play the audio for each button
    playSound(randomChosenColour);
}

// Create a function to play sound
function playSound (name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Create a function to animate the pressed button
function animatePress (currentColour) {
    $("#" + currentColour).addClass("pressed");
    // Set a 100 ms timout
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Create a funtion to check if the answer is right or wrong and play equivalent effects if its not
function checkAnswer (currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        
        if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }
    } else {
        console.log("wrong")
        var audio = new Audio("sounds/wrong.mp3");
            audio.play();
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        startOver();
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
    }
}

// Function to restart the game
function startOver() {
    started = false;
    level = 0;
    gamePattern = [];
}