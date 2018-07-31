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

function Negate(nr) {
    return nr - (nr*2);
}
