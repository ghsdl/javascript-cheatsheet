// speed limit = 70
// for every 5 kilometers above the speed limit, get 1 point
// Math.floor(1.3)
// 12 points > suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kilometerPerPoint = 5;

    if (speed < speedLimit + kilometerPerPoint) {
        console.log('Ok');
        return;
    }
    
    const point = Math.floor((speed - speedLimit) / kilometerPerPoint);
    if (point >= 12)
        console.log('License suspended');
    else
        console.log('Points', point);
}

checkSpeed(130);