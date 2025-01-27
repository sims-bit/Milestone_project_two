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









