//Play button initiates transition
 




const gameOptions = ['knifey', 'spooney', 'spork'];

//Comparison function
function chickenDinner (humanInput, computerInput){
    if(humanInput == computerInput){
        return true;  /*REMEMBER TO CHANGE THIS BACK*/
    } else if(humanInput == 'knifey'){
    if(computerInput == 'spooney'){
        return true;
    } else {
        if(computerInput == 'spork'){
            return false;
        }
    }
}
if(humanInput == 'spooney') {
    if(computerInput == 'spork'){
        return true;
    } else {
        if(computerInput == 'knifey'){
            return false;
        }
    }
}
if(humanInput == 'spork'){
    if(computerInput == 'knifey'){
        return true;
    } else {
        if(computerInput == 'spooney'){
            return false;
        }
    }
}
}
//incrementing while loop
let humanInputWinsPoint = 0; 
let computerInputWinsPoint = 0;
 
while(humanInputWinsPoint + computerInputWinsPoint < 3){
  let humanInput = ['Knifey', 'Spooney', 'Spork'];
  let computerInput = gameOptions[Math.floor(Math.random()*gameOptions.length)];
  let ret = chickenDinner(humanInput, computerInput);
if(ret){
  humanInputWinsPoint++
  } else {
  computerInputWinsPoint++}
}
// Event handler for play buttons. Triggers a turn - gets the computer's choice and then calls the comparison function
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
}
document.getElementById("knifey-button").addEventListener("click", console.log('fs'));
const spooneyButton = document.getElementById("spooney-button");
const sporkButton = document.getElementById('spork-button');


spooneyButton.addEventListener('click', playTurn);
sporkButton.addEventListener('click', playTurn);

//Winner/looser end message 
if( humanInputWinsPoint > computerInputWinsPoint){
    console.log("AHHH I see you've played knifey spooney before mate!");
} else{( humanInputWinsPoint < computerInputWinsPoint)
    console.log("Thats not a knife! This is a knife!");
}

//exit button/ function
document.getElementById("exit-button").addEventListener("click", exitButton);

function exitButton(){
    let humanInputWinsPoint = 0;
    let computerInputWinsPoint = 0;
    console.log(humanInputWinsPoint, computerInputWinsPoint);
    }

//display computer option





    











