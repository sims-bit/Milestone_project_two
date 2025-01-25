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





