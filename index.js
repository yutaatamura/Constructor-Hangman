var Word = require("./Word.js");    

var inquirer = require("inquirer");

var words = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
var computerOutput;
var guesses = 3;
var lettersGuessed = [];
var displayAnswer;
var userWins = 0;
var userLosses = 0;
var correctCount = 0;
var gameEnd = false;

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
guess();

}


function guess() {
    if (guesses > 0) {
        inquirer.prompt([
            {
               name: 'guess',
               message: 'Guess a letter:'
            }
        ]).then(function(userGuess) {
            var formattedGuess = userGuess.guess.toUpperCase();
            if (!/^[a-zA-Z]+$/.test(formattedGuess)) {
                console.log("Sorry, please input a letter.")
                guess();
                return;
            }
            if (formattedGuess === '') {
                console.log("Sorry, please type a letter.")
                guess();
                return;
            }

            console.log(`
********************************
You guessed: ${formattedGuess}
`);

            //check if letter has already been guessed
            if (lettersGuessed.indexOf(formattedGuess) > -1) {
                console.log("You have already guessed this letter! Try again.");
                console.log("Letters Guessed: [" + lettersGuessed + "]\n");
                displayAnswer.displayWord();
                guess();
                return;

            } else {
            lettersGuessed.push(formattedGuess);
            }
            
            console.log("Letters Guessed: [" + lettersGuessed + "]\n")
            // for (j=0; j<displayAnswer.letterObjArr.length; j++) {
                // if (userGuess.guess.toUpperCase() === displayAnswer.letterObjArr[i].char && displayAnswer.letterObjArr[i].guessed === false) {
                    if (displayAnswer.check(formattedGuess) === true) {
                    
                    console.log("You guessed correctly!");
                    console.log(`
Guesses remaining: ${guesses}
*********************************`)
                    checkWin();
                        if (gameEnd === true) {
                            reset();
                            initialize();
                            return;
                        }
                    guess();

                    } else {
                    console.log("Wrong! Guess again!");
                    guesses--;
                    console.log(`
Guesses remaining: ${guesses}
********************************`)
                    guess();
                    }
                
        })
    } else {
        console.log(`
You ran out of guesses! Too bad. 
The answer was ${displayAnswer.word}. Try another game?`);
        userLosses++;
        console.log(`Wins: ${userWins} Losses: ${userLosses}`)
        reset();
        initialize();
    }   
};

function checkWin() {

    for  (var i=0; i<displayAnswer.letterObjArr.length; i++) {
        var x = displayAnswer.letterObjArr;
        // console.log(x[i].guessed);
        if (x[i].guessed === true) {
            correctCount++;
            // console.log("correctcount: "+correctCount)
        }
    }
    if (correctCount === displayAnswer.letterObjArr.length) {

                console.log("Congratulations! You have successfully answered the word! Play again?");   
                gameEnd = true;
                userWins++;
                console.log(`Wins: ${userWins} Losses: ${userLosses}`)
         
    }
        correctCount = 0;
}


function reset() {
    
    guesses = 3;
    correctCount = 0;
    lettersGuessed = [];
    gameEnd = false;
    
}


