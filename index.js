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
    var startGame = [
    //     {
    //     type: 'input',
    //     name: 'playerName',
    //     message: 'What is your name?'
    // },
    {
        type: 'confirm',
        name: 'playerReady',
        message: 'Welcome to the word guess game. Are you ready to play?',
        default: true
    }
    ];

    inquirer.prompt(startGame).then(function(response) {
        if (response.playerReady) {
            console.log("Glad you can join us. Go ahead and guess a letter...")
            selectWord();
            // update();
        } else {
            console.log("It's been fun! Play again soon!")
            return;
        }
    });
};



function selectWord() {

computerOutput = words[Math.floor(Math.random() * words.length)];

separated = computerOutput.split("");

displayAnswer = new Array(separated.length).fill(" _ ");

wordOfInt = new Word(computerOutput);
console.log(wordOfInt.word);
wordOfInt.lettersOfInt();
lettersGuessed = wordOfInt.letters;
console.log("Letters guessed: "+lettersGuessed)
wordOfInt.renderWord();
guess();
};

function guess() {
    if (guesses > 0) {
        inquirer.prompt([
            {
               name: 'letter',
               message: 'Guess a letter:'
            }
        ]).then(function(guess) {
            var formattedGuess = guess.letter.toLowerCase();
            console.log("You guessed: " + formattedGuess);
            for (i=0; i<lettersGuessed.length; i++)
                if (formattedGuess === lettersGuessed[i]) {
                    console.log("I match!")
            }
        })
    }
};

