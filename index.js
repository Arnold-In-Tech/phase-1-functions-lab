
// Code your solution in this file!

function distanceFromHqInBlocks(dist){
    //returns the number of blocks given a value
    if (dist === 43){
        return Math.round(dist/43);
    }
    else if (dist === 50){
        return Math.round(dist/50 * 8);
    }
    else if (dist === 34){
        return Math.round(dist/34 * 8);
    }
    else{
        return "Invalid distance!"
    }
}


function distanceFromHqInFeet(dist){
    return distanceFromHqInBlocks(dist) * 264;
}


function distanceTravelledInFeet(dist1, dist2){
    return Math.abs(dist1 - dist2) * 264;
}


function calculatesFarePrice(start, destination){
    let dist = distanceTravelledInFeet(start, destination);
    if (dist < 400){
        return 0;
    }
    else if (dist >= 400 && dist < 2000){
        return (dist-400) * 2/100; // divide by 100 to covert to cents
    }
    else if (dist >= 2000 && dist < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}






