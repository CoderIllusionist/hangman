function displayWordSoFar(word, guesses) {
    let splitWord = word.split("");
    let placeHolder = "";


    for (let i = 0; i < splitWord.length; i++) {
        const character = splitWord[i].toLowerCase();
        const guessesLower = guesses.map(toLower);

        const checkGuessedLetter = guessesLower.includes(character);

        if (checkGuessedLetter === false) {
            placeHolder = placeHolder.concat("_ ");
        } else if (checkGuessedLetter === true) {
            placeHolder = placeHolder.concat(character) + " ";
        }

    }

    return placeHolder;


}

function isGameWon(guesses, word) {
    guesses = guesses.join().replace(/,/g, '');
    const wordLength = word.length;
    let isCorrectWord = 0;

    for (let i = 0; i < guesses.length; i++) {
        if (word.includes(guesses[i])) {
            let countDuplicatedCharacters = (word.match(new RegExp(guesses[i], "g")) || []).length;
            isCorrectWord = isCorrectWord + countDuplicatedCharacters;
        }


    }
    if (wordLength === isCorrectWord) {
        console.log("You won! Congrats! The correct word was " + word);
        return true;
    } else {
        return false;
    }
}


function isGameLost(word, guesses) {
    let wrongGuesses = 0;
    for (let i = 0; i < guesses.length; i++) {
        if (word.includes(guesses[i])) {
          // do nothing this is the right answer
        } else if (!word.includes(guesses[i])) {
            wrongGuesses++;
        }
    }
    console.log("Wrong guesses: " + wrongGuesses)
    if (wrongGuesses >= 7) {
        console.log("You lost...");
        return true;
    } else {
        return false;
    }

}

function checkCharacter(letter) {

    if (letter.length > 1) {
        return false;
    } else if (letter.length == 1) {
        return true;
    }

}

function toLower(guesses) {
    return guesses.toLowerCase();
}

function removeDuplicateCharacters(placeHolder) {
    return placeHolder
        .split('')
        .filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .join('');
}

module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
    checkCharacter: checkCharacter,
};
