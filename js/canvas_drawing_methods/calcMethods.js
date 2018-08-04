function GetOffsetY( elem ) {
    if ( document.getElementById ) {
        elem = document.getElementById ( elem );
    }
    else if ( document.all ) {
        elem = document.all[elem];
    }

    var yPos = elem.offsetTop;
    var tempEl = elem.offsetParent;

    while ( tempEl != null ) {
        yPos += tempEl.offsetTop;
        tempEl = tempEl.offsetParent;
    }
    return yPos;
}

// needed for the offset function
function GetOffsetX( elem ) {

    if ( document.getElementById ) {
        elem = document.getElementById ( elem );
    }
    else if ( document.all ) {
        elem = document.all[elem];
    }

    let yPos = elem.offsetLeft;
    let tempEl = elem.offsetParent;

    while ( tempEl != null ) {
        yPos += tempEl.offsetLeft;
        tempEl = tempEl.offsetParent;
    }
    return yPos;
}

// calculates xy position based on angle and distance
function CalcXYBasedOnSinRule(angle, distance, startX, startY) {
    let theta = (angle+1) * Math.PI;

    let returnX = startX - distance * Math.cos(theta);
    let returnY = startY - distance * Math.sin(theta);

    return { x:returnX, y:returnY};
}

function calcRadius(aX, aY, bX, bY) {
    let cX;
    let cY;

    //get the x lenght for pytagoras
    if (aX < bX) {
        cX = Math.pow( (bX - aX), 2)// * (bX - aX)
    } else {
        cX = Math.pow( (aX - bX), 2);// * (aX - bX)
    }

    //get the y lenght for pytagoras
    if (aY < bY) {
        cY = Math.pow( (bY - aY), 2)// * (bY - aY)
    } else {
        cY = Math.pow( (aY - bY), 2)// * (aY - bY)
    }
    
    return ( Math.sqrt(cX + cY) );
}

function Negate(nr) {
    return nr - (nr*2);
}

console.log( calcRadius(50, 50, 0, 0) )
