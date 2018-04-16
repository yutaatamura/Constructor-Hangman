var Letter = function(char) {
    
    this.char = char;
    this.guessed = false;
    this.displayChar = function() {
        if (this.guessed) {
            return this.char;
        } else {
            return "_"
        }
    }
    this.check = function(guess) {
        if (guess === this.char) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    }
};

// var testLetter = new Letter("a");
// testLetter.displayChar();

module.exports = Letter;

