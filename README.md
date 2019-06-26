# lucky-draw

Create a game where the user enters a number.

If that number is correct, tell the user they have won.

In this first version, create a variable that is the secret number they have to guess:
```js
var secretNumber = 4;
```

The first version should take input and use `parseInt` to transform the input into a number.

Don't worry about checking the input in the first version.

Call a function called `hasWon` and put the numbers input into it.

This `hasWon` function has the signature:
```js
function signature
guessedNumber(number), secretNumber(number) --> won(boolean)

function header:
hasWon( guessedNumber, secretNumber )
```

It has a conditional inside that determines if you've won or not.

If this function returns true, tell the user they have won.

### further
Google how to make a random number.

Set the secret number to this random number.

### further
Use a global status values to set data about how many times the game has been played.

When the user enters a number, show them their win / loss ratio.

### further
Check the values coming in to see if they are valid (if it's a number or not)

### further
Set an easter egg if the user enters a secret word, to give a special message.

