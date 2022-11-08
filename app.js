// log history of previous persons' guesses
let history = { };

function play(){
  let numGuesses = 1;
  const userName = prompt("Welcome! Enter your name!");
  let secretNumber = 3;
 

    while(true) {
    const guess = prompt(`Guess a number from 0 to 10`);
    if (guess === null) {
        alert(`Goodbye!`);
        break;
    }

    const numGuess = Number(guess);

    if (Number.isNaN(numGuess)) {
        numGuesses++;
        alert(`${userName}, please enter a valid number`);
    } else if (numGuess < secretNumber) {
        numGuesses++;
        alert(`${userName}, guess higher`)
    } else if (numGuess > secretNumber) {
        numGuesses++;
        alert(`${userName}, guess lower`)
    } else {
        if(history[userName] === undefined) {
            alert(`Correct! It took you ${numGuesses} guesses.`);
        } else {
            const prevAttempts = history[userName];
            const difference = prevAttempts - numGuesses;
            if (difference < 0) {
                alert(`That's Correct ${userName}! You did better in your last game by ${Math.abs(difference)} fewer guesses.`);
            } else if (difference > 0) {
                alert(`That's correct ${userName}! And you beat your previous attempt by ${difference} fewer guesses!`);
            } else {
                alert(`That's Correct ${userName}! You tied your previous attempt.`);
            }
        }


      history[userName] = numGuesses;
      const playAgain = prompt("Do you want to play again?"); 
      if (playAgain.toLowerCase() === "yes") {
          play();
      } else {
        break;
      }
    }
  }
}
play();
