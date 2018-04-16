var Letter = require('./Letter.js');

var Word = function(word) {
    this.word = word;
    this.letters = [];
    this.letterObjArr = [];
    this.lettersOfInt = function() {
        this.letters = this.word.split("");
        // console.log("this.letters: "+this.letters)
        for (var i=0; i<this.letters.length; i++) {
            this.letterObjArr.push(new Letter(this.letters[i]));
        }
    }
        // console.log(this.letterObjArr)

    this.displayWord = function() {
        var display = [];
        this.letterObjArr.forEach(function(let) {
            display.push(let.displayChar());
        })
        console.log(`${display.join(" ")}\n`);
    }

    this.check = function(userGuess) {
        var wordGuessed = false;
        this.letterObjArr.forEach(function(let) {
            if (userGuess === let.char) {
                let.guessed = true;
                wordGuessed = true;
            }
        })
        if (wordGuessed === true) {
            this.displayWord();
            return true;
        }
        if (wordGuessed === false) {
            this.displayWord();
            return false;
        }
    }



            
    // this.renderWord = function() {
    //    for (var i=0; i<this.word.length; i++) {
    //        this.letters[i] = new Letter(this.letters[i]);
    //        this.letters[i].guessed = false;
    //        console.log(this.letters[i]);
    //        this.letters[i].displayChar();
    //    }
    // }
       }



// var testWord = new Word("Rawville");
// testWord.lettersOfInt();



module.exports = Word;