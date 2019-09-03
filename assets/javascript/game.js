
var gameScore;
var userScore = 0;
var wins = 0;
var losses = 0;
var crystals = [null, null, null, null];

// Math.floor(Math.random() * ((y-x)+1) + x);
// x = start , y = end
// random number between 9 - 120
function scoreNumber() {
    var randomNum = Math.floor(Math.random() * ((120-9) + 1) + 9); 
    return randomNum;
}
// random number between 1 - 12
function crystalNumber() {
    var randomNum = ( Math.floor(Math.random() * 12) ) + 1; 
    return randomNum;
}

function setCrystals(){
    for (var i=0; i<crystals.length; i++) {
        crystals[i] = crystalNumber();
        console.log("crystal[" + i + "] :" + crystals[i] );
    }
}

function adding(crystalNum) {
    userScore = parseInt(userScore) + parseInt(crystalNum);
    $('#user-number').html(userScore);
    // check logic
    console.log("User score is " + userScore);
}



function reset() {
    gameScore = scoreNumber();
    userScore = 0;

    

    setCrystals();
}

setCrystals();


