
var gameScore = scoreNumber();
var userScore = 0;
var wins = 0;
var losses = 0;
var crystals = [null, null, null, null];

$('#target-number').html(gameScore);
$('#user-number').html(userScore);
$('#wins').html(wins);
$('#losses').html(losses);
setCrystals();

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
    console.log("User score is " + userScore);
    check();
}

function check() {
    if ( gameScore === userScore ){
        alert("YOU WIN!!!");
        console.log("YOU WIN!");
        wins++;
        $('#wins').html(wins);
        reset();
    }
    else if ( userScore > gameScore ) {
        alert("YOU LOSE!!!");
        console.log("YOU LOSE");
        losses++;
        $('#losses').html(losses);
        reset();
    }
    
}

function reset() {
    gameScore = scoreNumber();
    userScore = 0;
    $('#target-number').html(gameScore);
    $('#user-number').html(userScore);

    setCrystals();
    
}


