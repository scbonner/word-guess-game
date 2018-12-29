

// Assigned variables

var NumOfWords = 10;
var SaveData = "";
var ImageNum = "";
var LettersSelected = "";
var RandomWord = "";
var DisplayWord = "";
var position = 0;
console.log("A")

function WordList() {
this.length = NumOfWords;

}
let words = [
   "lions",
   "tiger",
   "zebra",
   "bears",
   "hippo",
   "snake",
   "birds",
   "rhino",
   "horse",
   "eagle"
];

function initAlphaArray() {
    this.length = 26
    this[0] = "A"
    this[1] = "B"
    this[2] = "C"
    this[3] = "D"
    this[4] = "E"
    this[5] = "F"
    this[6] = "G"
    this[7] = "H"
    this[8] = "I"
    this[9] = "J"
    this[10] = "K"
    this[11] = "L"
    this[12] = "M"
    this[13] = "N"
    this[14] = "O"
    this[15] = "P"
    this[16] = "Q"
    this[17] = "R"
    this[18] = "S"
    this[19] = "T"
    this[20] = "U"
    this[21] = "V"
    this[22] = "W"
    this[23] = "X"
    this[24] = "Y"
    this[25] = "Z"
    }


// Pick a random word

let word = words[Math.floor(Math.random() * words.length)];
let remainingletters = word.length;

// Setup an answer array
let answerArray = [];
for (var i = 0; i < word.length; i++) {
   answerArray[i] = "_";
}

// The game loop
while(remainingletters > 0) {
   // Show the player their progress
   alert(answerArray.join(" "));

   // Get a guess from the player
var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
   //Exit the game loop
   break;
} else if (guess.length !== 1) {
   alert("Please enter a single letter.");

} else {
   //Update the game state with the guess
   for (var i = 0; i < word.length; i++) {
       if (word[i] === guess) {
           answerArray[i] = guess;
        remainingletters--;
       }
       }
}
   //The end of the game loop

}
//Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);