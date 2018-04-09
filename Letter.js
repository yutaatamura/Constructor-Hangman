var Letter = function(char) {
    
    this.char = char;
    this.guessed = false;
    this.displayChar = function() {
        if (this.guessed) {
            console.log("Guessed = true")
            console.log(this.char);
        } else {
            console.log("_");
        }
    }
};

var testLetter = new Letter("a");
testLetter.displayChar();

module.exports = Letter;

