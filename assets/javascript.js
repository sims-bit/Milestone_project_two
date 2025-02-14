//Game option variables

const gameOptions = ['knifey', 'spooney', 'spork'];

//Comparison function
function chickenDinner(humanInput, computerInput) {
    if (humanInput == computerInput) {
        return 'tie';
    } else if (humanInput == 'knifey') {
        if (computerInput == 'spooney') {
            return 'human';
        } else {
            if (computerInput == 'spork') {
                return 'computer';
            }
        }
    }
    if (humanInput == 'spooney') {
        if (computerInput == 'spork') {
            return 'human';
        } else {
            if (computerInput == 'knifey') {
                return 'computer';
            }
        }
    }
    if (humanInput == 'spork') {
        if (computerInput == 'knifey') {
            return 'human';
        } else {
            if (computerInput == 'spooney') {
                return 'computer';
            }
        }
    }
}


let humanInputWinsPoint = 0;
let computerInputWinsPoint = 0;
let gameRounds = 0;

// *Event handler for play buttons. Triggers a turn from users click selection. Gets the computer's choice using math.random one-liner. 
// calls the chickenDinner comparison function

let computerKnifey = document.getElementById("computer-knifey");
let computerSpooney = document.getElementById("computer-spooney");
let computerSpork = document.getElementById("computer-spork");

function playTurn(event) {
    const clickedButton = event.currentTarget;
    let humanInput;
    if (clickedButton.id == 'knifey-button') {
        humanInput = 'knifey';
    } else if (clickedButton.id == 'spooney-button') {
        humanInput = 'spooney'
    } else {
        humanInput = 'spork';
    }
    let computerInput = gameOptions[Math.floor(Math.random() * gameOptions.length)];

    //this is what you are working on 
    if (computerInput == 'knifey') {
        computerKnifey.classList.add("computer-shake");
    } else if (computerInput == 'spooney') {
        computerSpooney.classList.add("computer-shake");
    } else (computerInput == 'spork');
    computerSpork.classList.add("computer-shake");
    // 

    let winnerMessage = document.getElementById("winner-message");
    let loserMessage = document.getElementById("loser-message");

    let ret = chickenDinner(humanInput, computerInput);

    if (ret == 'human') {
        humanInputWinsPoint++;
        console.log('human');
    } else if (ret == 'computer') {
        computerInputWinsPoint++;
        console.log('computer');
    }
    gameRounds++;

    computerKnifey.classList.remove("computer-shake");
    computerSpooney.classList.remove("computer-shake");
    computerSpork.classList.remove("computer-shake");

    if (gameRounds >= 3) {
        if (humanInputWinsPoint > computerInputWinsPoint) {
            console.log("AHHH I see you've played knifey spooney before mate!");
            winnerMessage.style.visibility = "visible";
            winnerMessage.classList.add("bounceInTop");

        } else if (humanInputWinsPoint < computerInputWinsPoint) {
            console.log("Thats not a knife! This is a knife!");
            loserMessage.style.visibility = "visible";
            loserMessage.classList.add("bounceInTop");
        }
    }
}

const knifeyButton = document.getElementById("knifey-button");
const spooneyButton = document.getElementById("spooney-button");
const sporkButton = document.getElementById('spork-button');

knifeyButton.addEventListener("click", playTurn);
spooneyButton.addEventListener('click', playTurn);
sporkButton.addEventListener('click', playTurn);

/*Enter Button function, initates the starting game animation which removes the rules and enter button from the screen.*/

const enterButton = document.getElementById("enter-button");
enterButton.addEventListener('click', formValidation);
enterButton.addEventListener("submit", ageValidation);

function rulesAnimation() {
    let rulesOut = document.getElementById("rules");
    rulesOut.classList.add("bounceOutTop");

    let enterButton = document.getElementById("enter-button");
    enterButton.classList.add("bounceOutTop");

    let optionsReveal = document.getElementById("options");
    optionsReveal.style.visibility = "visible";
    optionsReveal.classList.add("bounceInTop");

    let computerResults = document.getElementById("computer-results");
    computerResults.style.visibility = "visible";
    computerResults.classList.add("bounceInTop"); 
    
    let formLabel = document.getElementById("form-label");
    formLabel.style.visibility = "hidden";

    let ageInput = document.getElementById("playerAge");
    ageInput.style.visibility = "hidden";
}

function ageValidation(ageEntered){
    let response = document.getElementById("response");    
    let isNumber = !isNaN(parseInt(ageEntered));
    if (!isNumber){
        console.log("fuck You");
        return false;
    }
    if (ageEntered < 7) {
        response.innerText = `Are you sure you should be playing this game?`;
        console.log("poopett");
        return false;
    } else {
        response.innerText = ``;
        return true
    }
} 

    function formValidation(){
        let ageForm = document.getElementById("playerAge").value;
        console.log("cheese");
        if(ageValidation(ageForm)){
            rulesAnimation()
        }
    }
 

/*Exit button function, this resets the game- reseting THE INPUTS FOR*/
document.getElementById("exit-button").addEventListener("click", exitButton);

function exitButton() {
    humanInputWinsPoint = 0;
    computerInputWinsPoint = 0;
    gameRounds = 0;

    let winnerMessage = document.getElementById("winner-message");
    let loserMessage = document.getElementById("loser-message");

    winnerMessage.style.visibility = "hidden";
    winnerMessage.classList.remove("bounceInTop");

    loserMessage.style.visibility = "hidden";
    loserMessage.classList.remove("bounceInTop");

    //remove class shake - computer inputs//



    console.log(humanInputWinsPoint, computerInputWinsPoint);

}



















