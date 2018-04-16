var Word = require("./Word.js");    

var inquirer = require("inquirer");

var words = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
var computerOutput;
var separated;
var guesses = 3;
var userInputLetter;
var lettersGuessed = [];
var letterLocationIndex = [];
var double = false;
var match = false;
var displayAnswer;
var userWins = 0;
var userLosses = 0;
var wordOfInt;

initialize();
function initialize() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "playerReady",
            message: "Welcome to the hangman game. Are you ready?"
        }
    ]).then(function(response) {
        if (response.playerReady) {
            console.log("Good, let us begin!");
            selectWord();
        } else {
            console.log("Goodbye!")
            return;
        }
    })
}

function selectWord() {

computerOutput = words[Math.floor(Math.random() * words.length)];

displayAnswer = new Word (computerOutput.toUpperCase());
displayAnswer.lettersOfInt();
displayAnswer.displayWord();
// guess();
}


function guess() {
    if (guesses > 0) {
        inquirer.prompt([
            {
               name: 'guess',
               message: 'Guess a letter:'
            }
        ]).then(function(guess) {
            var formattedGuess = guess.guess.toUpperCase();
            console.log("You guessed: " + formattedGuess);
            for (i=0; i<lettersGuessed.length; i++)
                if (formattedGuess === lettersGuessed[i]) {
                    console.log("I match!")
            }
        })
    }
};

