function displayWordSoFar(word, guesses) {
  const lettersInWordArray = word.split("");

  let output = "";
  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    const isLetterGuessed = guesses.includes(letterInWord);

    if (!isLetterGuessed) {
      output = output + "_ ";
    }

    if (isLetterGuessed) {
      output = output + letterInWord + " ";
    }
  }
  return output;
}

function isGameWon(word, guesses) {
  const lettersInWordArray = word.split("");

  for (let index = 0; index < lettersInWordArray.length; index++) {
    const letterInWord = lettersInWordArray[index];
    const letterGuessed = guesses.includes(letterInWord);
    if (!letterGuessed) {
      return false;
    }
  }

  return true;
}

function isGameLost(word, guesses) {
  console.log("INPUT", "WORD:", word, "GUESSES", guesses);
  let mistakeCount = 0;
  for (let index = 0; index < guesses.length; index++) {
    const guess = guesses[index];
    console.log("ONE GUESS IN LOOP:", guess);
    const isGuessCorrect = word.includes(guess);
    console.log("GUESS CORRECT?", word, guess, isGuessCorrect);
    if (!isGuessCorrect) {
      mistakeCount = mistakeCount + 1;
    }
    console.log("MISTAKE COUNT:", mistakeCount);
  }

  const MAX_MISTAKE_COUNT = 7;
  if (mistakeCount >= MAX_MISTAKE_COUNT) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
