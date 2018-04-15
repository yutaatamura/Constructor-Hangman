var Letter = require('./Letter.js');

var Word = function(word) {
    this.word = word;
    this.letters = [];
    this.lettersOfInt = function() {
        this.letters = this.word.split("");
        
        console.log(this.letters);
    }
    this.renderWord = function() {
       for (var i=0; i<this.word.length; i++) {
           this.letters[i] = new Letter(this.letters[i]);
           this.letters[i].guessed = false;
           console.log(this.letters[i]);
           this.letters[i].displayChar();
       }
    }
}

var testWord = new Word("Rawville");
// testWord.lettersOfInt();
// testWord.renderWord();

module.exports = Word;