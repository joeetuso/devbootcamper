var age = prompt("What is your age?");

if (age < 18) {
  alert("Sorry, you are not old enough to enter the venue");
} else if (age > 18 && age < 21) {
  alert("You can enter the venue, but you do not have access to the bar 🕺");
} else {
  alert("You can enter the venue and you can also drink at the bar! 🍺");
}
