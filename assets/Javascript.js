//Play button initiates transition
 
const gameOptions = ['knifey', 'spooney', 'spork'];

//Comparison function
function chickenDinner (humanInput, computerInput){
    if(humanInput == computerInput){
        return 'tie';  /*REMEMBER TO CHANGE THIS BACK*/
    } else if(humanInput == 'knifey'){
    if(computerInput == 'spooney'){
        return 'human';
    } else {
        if(computerInput == 'spork'){
            return 'computer';
        }
    }
}
if(humanInput == 'spooney') {
    if(computerInput == 'spork'){
        return 'human';
    } else {
        if(computerInput == 'knifey'){
            return 'computer';
        }
    }
}
if(humanInput == 'spork'){
    if(computerInput == 'knifey'){
        return 'human';
    } else {
        if(computerInput == 'spooney'){
            return 'computer';
        }
    }
}
}



//incrementing while loop
let humanInputWinsPoint = 0; 
let computerInputWinsPoint = 0;
let gameRounds = 0;

// while(humanInputWinsPoint + computerInputWinsPoint < 3){
//   let humanInput = ['Knifey', 'Spooney', 'Spork'];
//   let computerInput = gameOptions[Math.floor(Math.random()*gameOptions.length)];
//   let ret = chickenDinner(humanInput, computerInput);

// }

// *Event handler for play buttons. Triggers a turn from users click selection. Gets the computer's choice using math.random one-liner. 
// calls the chickenDinner comparison function

function playTurn(event){
    const clickedButton = event.currentTarget;
    let humanInput;
    if(clickedButton.id == 'knifey-button') {
        humanInput = 'knifey';
    } else if (clickedButton.id == 'spooney-button') {
        humanInput = 'spooney'
    } else {
        humanInput = 'spork';
    }
    let computerInput = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    
    let ret = chickenDinner(humanInput, computerInput);

    if (ret == 'human') {
        humanInputWinsPoint++;
        console.log('human');
    } else if (ret == 'computer') {
        computerInputWinsPoint++;
        console.log('computer');
    } 
    gameRounds++;
    if( gameRounds >= 3){
        if( humanInputWinsPoint > computerInputWinsPoint){
            console.log("AHHH I see you've played knifey spooney before mate!");
        } else if( humanInputWinsPoint < computerInputWinsPoint) {
            console.log("Thats not a knife! This is a knife!");
        }
    }
}

const knifeyButton = document.getElementById("knifey-button").addEventListener("click", playTurn);
const spooneyButton = document.getElementById("spooney-button");
const sporkButton = document.getElementById('spork-button');


spooneyButton.addEventListener('click', playTurn);
sporkButton.addEventListener('click', playTurn);



// //Winner/looser end message 
// if( humanInputWinsPoint > computerInputWinsPoint){
//     console.log("AHHH I see you've played knifey spooney before mate!");
// } else{( humanInputWinsPoint < computerInputWinsPoint)
//     console.log("Thats not a knife! This is a knife!");
// }

//exit button/ function
document.getElementById("exit-button").addEventListener("click", exitButton);

function exitButton(){
    humanInputWinsPoint = 0;
    computerInputWinsPoint = 0;
    gameRounds = 0;
    console.log(humanInputWinsPoint, computerInputWinsPoint);
    
    }

//display computer option







    











