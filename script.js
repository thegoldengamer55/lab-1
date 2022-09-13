function submitData() {
  let minData = Math.ceil(guessForm.min.value);
  let maxData = Math.floor(guessForm.max.value);

  if (minData < 1 || minData > maxData || maxData > 100) {
    updateDOM(
      "Error, make sure to type the right numbers in the right spots!",
      "red"
    );
  } else {
    numberGuessGame(minData, maxData);
  }
}

function updateDOM(value, color) {
  document.getElementById("pTag").innerHTML = value;
  document.getElementById("pTag").style.color = color;
}

function numberGuessGame(min, max) {
  let num = randomNumber(min, max);
  let guess;

  do {
    if (!guess) {
      guess = parseInt(
        prompt("I am thinking of a number between " + min + " and " + max)
      );
    } else if (guess > num) {
      guess = parseInt(prompt("Your guess was too high"));
    } else if (guess < num) {
      guess = parseInt(prompt("Your guess was too low"));
    }
    // End while loop if:
    // 1. Cancel if guess is undefined (the user pressed the cancel button)
    // Or 2. randomNumber == the guess number
  } while (num != guess && guess);
  if (guess) {
    updateDOM("Congratulations you guessed correctly: " + guess, "green");
  } else {
    updateDOM("You gave up... try again", "red");
  }
}

function randomNumber(min, max) {
  const ranNum = Math.floor(Math.random() * (max - min)) + min;
  /*
  If ranNum is == to min or max
  call recursively randomNumber with the min and max
  ranNumber will be different every time
  */
  if (ranNum == min || ranNum == max) {
    ranNum = randomNumber(min, max);
    return;
  }
  return ranNum;
}
