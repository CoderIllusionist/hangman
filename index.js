const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, checkCharacter } = require("./gamelogic");

function game(word, guesses) {
  if (typeof guesses !== undefined && guesses.length ) { // if array is not empty, aka game has started, only then display this.
    console.log("Dit heb je tot nu toe geraden: ", guesses);
  }

  const displayWord = displayWordSoFar(word, guesses)
  console.log(displayWord);
  const letter = question("Raad een letter: ");



  if(checkCharacter(letter)) {
    guesses.push(letter);
  } else if(!checkCharacter(letter)) {

    console.log("Je mag maar met 1 letter raden")
  }

  // voeg de geraden letter toe aan de array met guesses


  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
