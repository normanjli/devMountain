const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Think of a number between 1 and 1000!");

reader.question("Do you have your number? (Y/N)", (input) => {
  if (input.toLowerCase() === "y") {
    console.log("Perfect! Lets Play!");
    guessNum(500, _);
    //SEE MISSION BELOW//
  } else {
    console.log("Ok! We can play another time!");
    reader.close();
  }
});

/*
  Your Mission, Should you choose to accept, is to create the logic for THE COMPUTER to guess which number you, the human, chose that is between 1 and 1000. You have 10 minutes for this challenge then we'll do it live! Feel free to work together, collaborate!
*/

//---------------CODE HERE-----------------//
const guessNum = (number, previous) => {
  reader.question(`Is your number ${number} (Y/N)`, (input) => {
    if (previous === number) {
      console.log("I think you didnt answer correctly! lets try again");
      guessNum(500, _);
    }
    if (input.toLowerCase() === "y") {
      console.log("I win!");
      reader.close();
    } else {
      reader.question("is your number higher or lower? (H/L)", (input) => {
        if (input.toLowerCase() === "h") {
          const higherNum = Math.round(number * 1.5);
          guessNum(higherNum > 1000 ? 1000 : higherNum, number);
        } else {
          const lowerNum = Math.round(number * 0.5);
          guessNum(lowerNum < 1 ? 1 : lowerNum, number);
        }
      });
    }
  });
};
