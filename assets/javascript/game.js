
//creates an array (collection) of letters to guess
var computerChoices = ["c", "p", "e", "h", "t", "b", "d", "m", "a", "z", "q", "i", "v"]

//capture the keystroke the user chooses
var userGuess = [];

//user has 13 guesses to guess the right letter
var gollyMaxNumGuess = 13; 

//keep track of number of wins
var ohBoyWinsCounter = 0;

//keep track of number of loses
var garshLosesCounter = 0;

//reset the game at beginning and after a win/loss
var resetGuesses = function () {
    gollyMaxNumGuess = 13;
    document.getElementById("zippy").innerHTML = ''; //this will set the guessed section back to empty '' is how to write empty
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    document.getElementById("golly").innerHTML = gollyMaxNumGuess;
    }

//determines which key was pressed and stores it (var userGuess = event.key)
//onkeyup will then run ALL the code within the {}
//onkeyup is going to run a function and that function will trigger following functions
document.onkeyup = function(event) {
    var userGuess = event.key;

    //logging the userGuess in the console so I can see if what I have is working thus far
    console.log(userGuess);
    
    //documents onto the screen in the h3 html element id=zippy
    document.getElementById("zippy").innerHTML += userGuess;
    
    //random function to pick one of the letters in the computerChoices array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //determine if the userGuess matches the computerGuess (computerGuess is declared by the computerChoice random function above)
    //game over and ohBoyWins will go from 0 to 1
    if (userGuess === computerGuess) {
        alert("Oh Boy! You win!")
        document.getElementById("mickey").innerHTML = ohBoyWinsCounter += 1;
        console.log(userGuess);
        resetGuesses();
        
    }

    if(userGuess !== computerGuess && gollyMaxNumGuess === 0) {
        alert("Garsh, you lose.")
        document.getElementById("garsh").innerHTML = garshLosesCounter += 1;
        resetGuesses();
        
    }
    
    //if the userGuess does not match, then allow user to keep guessing until gollyMaxNumGuess is 0
    
    else {
        document.getElementById("golly").innerHTML = gollyMaxNumGuess --;
        userGuess = "";
        }
    }