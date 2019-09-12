var guess = 0;
var attempts = 11;
var max_num = 100;

var number = numberPicker();
var intro_text =
  "Welcome to the guess my number game. I am thinking of a number, and your job is to guess that number. ";
var output = "You need to click the guess button. ";
$("#feedback").text(output);

$(function() {
  intro_text += "<br>I am thinking of a number between 1 and " + max_num + ". ";
  intro_text +=
    "<strong>Note:</strong> you only have " + attempts + " guesses.";
  $("#intro").html(intro_text);
  $("#guess-button").on("click", guessChecker);
  $("#new-game").on("click", newGame);
  $("#feedback").addClass("alert alert-info");
});

function numberPicker() {
  number = Math.random() * max_num + 1;
  number = Math.floor(number);
  return number;
}

// Set a click handler for guess-button
function guessChecker() {
  //alert("You started guess checker");
  guess = $("#guess").val();
  attempts -= 1;
  if (guess > number) {
    output = "That guess is too high. Please guess lower.";
    output += attemptsRemaining();
  } else if (guess < number) {
    output = "That guess is too low. Please guess higher.";
    output += attemptsRemaining();
  } else if (guess == number) {
    output =
      'That\'s correct! Way to go. Please click "New Game" to play again.';
    $("#feedback")
      .removeClass("alert-danger alert-warning")
      .addClass("alert-success");
    $("body").css("background-color", seagreen);
  }
  $("#feedback").text(output);
}

// Set a click handler for new-game
function newGame() {
  // set new number
  number = numberPicker();
  // reset guesses & attempts
  guess = 0;
  attempts = 6;
  // reset input window
  $("#guess").val("");
  $("#feedback").text(
    "I'm thinking of a new number between 1 and " +
      max_num +
      ". Can you guess what it is?\nYou have " +
      attempts +
      " attempts remaining."
  );
  $("body").css("background-color", "white");
  $("#feedback").removeClass("alert-warning alert-danger");
  $("#feedback").addClass("alert alert-info");
}

// attemptsRemaining function
function attemptsRemaining() {
  var str = " You have " + attempts + " attempts remaining.";
  if (attempts < 1) {
    // game over
    $("body").css("background-color", "crimson");
  } else if (attempts == 1) {
    $("#feedback")
      .removeClass("alert-info alert-warning")
      .addClass("alert-danger");
    str = " You have 1 attempt left, make it count";
  } else if (attempts < 3) {
    $("#feedback")
      .removeClass("alert-info alert-warning")
      .addClass("alert-danger");
  } else if (attempts < 5) {
    $("#feedback")
      .removeClass("alert-info")
      .addClass("alert-warning");
  }
  return str;
}
