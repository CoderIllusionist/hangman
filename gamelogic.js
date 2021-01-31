function displayWordSoFar(word, guesses) {
  let splitWord = word.split("");
  let placeHolder = "";

  for (let i = 0; i < splitWord.length; i++) {
    const character = splitWord[i]


    const checkGuessedLetter = guesses.includes(character);
    if(checkGuessedLetter === false) {
      placeHolder = placeHolder.concat("_ ");
    } else if (checkGuessedLetter === true) {
      placeHolder.replace(/\s/g, '');
      placeHolder = placeHolder.concat(character);
    }

  }

  return placeHolder;


}

function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}
function checkCharacter(letter) {

    if (letter.length > 1) {
      return false;
    } else if(letter.length == 1) {
      return  true;
    }

}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  checkCharacter: checkCharacter,
};
