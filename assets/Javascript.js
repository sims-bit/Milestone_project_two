const gameOptions = ['knifey', 'spooney', 'spork'];

//Comparison function
function chickenDinner (humanInput, computerInput){
    if(humanInput == computerInput){
        return tie;
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
  let humanInput ='spooney';
  let computerInput = gameOptions[Math.floor(Math.random()*gameOptions.length)];

let ret = chickenDinner(humanInput, computerInput);
if(ret){
  humanInputWinsPoint++
  } else {
  computerInputWinsPoint++}
}

const knifeyButton = document.getElementById('knifey-button');
const spooneyButton = document.getElementById('spooney-button');
const sporkButton = document.getElementById('spork-button');

knifeyButton.addEventListener('click', playTurn)
spooneyButton.addEventListener('click', playTurn)
sporkButton.addEventListener('click', playTurn)

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
//Welcome button 


//exit button/ function
function exit(){ 
    let 
}

//display computer option










