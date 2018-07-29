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
function DrawPiePiece(x, y, radius, startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle * Math.PI, endAngle * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}

// function drawArcs(array) {
function DrawCirclePiece(x, y, radius, thickness, startAngle, endAngle) {
    let startXY = CalcXYBasedOnSinRule(startAngle, radius - thickness, x, y);
    let firstLine = CalcXYBasedOnSinRule(startAngle, radius, x, y);

    ctx.beginPath();

    ctx.moveTo(startXY.x, startXY.y);
    ctx.lineTo(firstLine.x, firstLine.y);

    ctx.arc(x, y, radius,               startAngle * Math.PI,   endAngle * Math.PI, false);
    ctx.arc(x, y, radius - thickness,   endAngle * Math.PI,     startAngle * Math.PI, true);
}

function DrawCircle(array) {
    for (let i = 0; i < array.length; i++) {
        DrawCirclePiece(array[i]["x"], array[i]["y"], array[i].radius, array[i].thickness, array[i].startAngle, array[i].endAngle);
        ctx.strokeStyle = "000";
        ctx.lineWidth = 0.4;
        ctx.fillStyle = array[i]["color"];
        ctx.fill();
        ctx.stroke();
    }
}

function DrawPie(array) {
    for (let i = 0; i < array.length; i++) {
        DrawPiePiece(array[i]["x"], array[i]["y"], array[i].radius, array[i].startAngle, array[i].endAngle, array[i]["color"]);
    }
}
