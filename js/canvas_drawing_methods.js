function DrawClockLikeWords(array, ctx, radius, startAngle, fontSize) {
    ctx.translate(canvas.height / 2, canvas.height / 2);
    ctx.font = fontSize + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = '#222';

    for(let i = 0; i < array.length; i++){
        let ang = (i * 2/array.length * Math.PI + startAngle * 3.141593);
        ctx.rotate(ang);
        ctx.translate(0, - radius);
        ctx.rotate(- ang);
        ctx.fillText(array[i].toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius);
        ctx.rotate(- ang);
    }
    ctx.translate(- canvas.height / 2, - canvas.height / 2);
}

// function drawArcs(array) {
function drawPiePiece(x, y, radius, startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startAngle * Math.PI, endAngle * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}

// function drawArcs(array) {
function drawCirclePiece(x, y, radius, thickness, startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius,               startAngle * Math.PI,   endAngle * Math.PI, false);
    ctx.arc(x, y, radius - thickness,   endAngle * Math.PI,     startAngle * Math.PI, true);

    ctx.fillStyle = color;
    ctx.fill();
}

function drawCircle(array) {
    for (let i = 0; i < array.length; i++) {
        drawCirclePiece(array[i]["x"], array[i]["y"], array[i].radius, array[i].thickness, array[i].startAngle, array[i].endAngle, array[i]["color"]);
        ctx.strokeStyle = "000";
        ctx.lineWidth = 0.4;
        ctx.stroke();
    }
}

function DrawPie(array) {
    for (let i = 0; i < array.length; i++) {
        drawPiePiece(array[i]["x"], array[i]["y"], array[i].radius, array[i].startAngle, array[i].endAngle, array[i]["color"]);
    }
}

function getOffsetY( elem ) {
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
function getOffsetX( elem ) {

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
