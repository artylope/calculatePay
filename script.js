//generate a randomNumber between 1 to 100;
var randomSecretNumber = Math.floor(Math.random()*100) + 1;
console.log("secret number is " + randomSecretNumber);


// function signature
// guessedNumber(number), secretNumber(number) --> won(boolean)
//
// function header:
// hasWon( guessedNumber, secretNumber )

var hasWon = function(guessedNumber, secretNumber){
  if (guessedNumber === secretNumber){
    display("You won")
  } else if (guessedNumber < secretNumber){
    display("Try again. Number is higher")
  } else {
    display("Try again. Number is lower")
  }
};

var inputHappened = function(currentInput){
  //check if number
  console.log(currentInput);
  console.log(typeof (currentInput));
  checkIfNumber(currentInput);
  if (checkIfNumber(currentInput) === true){
    currentInput = parseInt(currentInput);
    hasWon(currentInput,randomSecretNumber);
    if(currentInput>100 || currentInput === 0){
      display("Please type a number between 1 to 100");
    }
  } else {
    display("Please type a number");
  }
};

var checkIfNumber = function(input) {
    if (!isNaN(input) === true) {
      console.log(input + " is a number");
      return true;
    } else {
      console.log(input + " is not a number");
      return false;
    }
  };