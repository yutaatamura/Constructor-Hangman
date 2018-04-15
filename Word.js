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
    this.displayArr = function() {
        
        for (var j=0; j<this.letterObjArr; j++) {
            this.display.push(letterObjArr[j].displayChar());
            console.log(this.display)
    }
       }
}

// var testWord = new Word("Rawville");
// testWord.lettersOfInt();
// testWord.renderWord();

module.exports = Word;