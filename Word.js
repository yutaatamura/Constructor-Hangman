var Letter = require('./Letter.js');

var Word = function(word) {
    this.word = word;
    this.letters = [];
    this.letterObjArr = [];
    this.display = [];
    this.lettersOfInt = function() {
        this.letters = this.word.split("");
        console.log("this.letters: "+this.letters)
        for (var i=0; i<this.letters.length; i++) {
            this.letterObjArr.push(new Letter(this.letters[i]));
        }
        console.log(this.letterObjArr)
        
    }
<<<<<<< HEAD
    this.displayArr = function() {
        
        for (var j=0; j<this.letterObjArr; j++) {
            this.display.push(letterObjArr[j].displayChar());
            console.log(this.display)
=======
    this.renderWord = function() {
       for (var i=0; i<this.word.length; i++) {
           this.letters[i] = new Letter(this.letters[i]);
           this.letters[i].guessed = false;
           console.log(this.letters[i]);
           this.letters[i].displayChar();
       }
>>>>>>> a37f9f03177605b82bd59bc648819a8d395d1dcd
    }
       }
}

<<<<<<< HEAD
// var testWord = new Word("Rawville");
=======
var testWord = new Word("Rawville");
>>>>>>> a37f9f03177605b82bd59bc648819a8d395d1dcd
// testWord.lettersOfInt();
// testWord.renderWord();

module.exports = Word;