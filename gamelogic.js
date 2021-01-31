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
            console.log(isCorrectWord)
            console.log(wordLength)
        }


    }
    if (wordLength === isCorrectWord) {
        return true
    } else {
        return false;
    }
}

function removeWrongLetters(guesses, ignoreWrongLetters) {


}


function isGameLost(word, guesses) {
    if (guesses.length >= 7) {
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
