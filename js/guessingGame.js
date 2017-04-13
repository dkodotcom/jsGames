// create secretNumber
var secretNumber = 22;

// ask user for guess
var guess = prompt("Guess a number");
// to make code cleaner, you could insert var guess = Number(promopt("Guess a Number")); and avoid writing Number(guess) in code below

// check guess is right
if(Number(guess) === secretNumber) {
	alert("YOU GOT IT!");
}
// otherwise, check if guess is higher 
else if(Number(guess) > secretNumber){
	alert("Too high, guess again!");
}
// otherwise, check if guess is lower
else {
	alert("Too low, guess again!");
}


/* TO MAKE MORE EXPLICIT
var secretNumber = 22;

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if(guess ==== secretNumber) {
	alert("YOU GOT IT");
}

else if(guess > secretNumber) {
	alert("Too high, guess again!");
}

else {
	alert("Too low, guess again!");
}
*/