function RenderCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.width;

    offsetX = GetOffsetX("newcanvas");
    offsetY = GetOffsetY("newcanvas");
    centerX = canvas.width / 2 + offsetX;
    centerY = canvas.height / 2 + offsetY;

    for (let i = 0; i < circleParts.length; i++) {
        circleParts[i].thickness = circleParts[i].thicknessMultiplier * canvas.width;
        circleParts[i].radius = circleParts[i].radiusMultiplier * canvas.width;
        circleParts[i].x = centerX;
        circleParts[i].y = centerY;
    }

    words[0].radius = words[0].radiusMultiplier * canvas.width;
    words[0].x = centerX;
    words[0].y = centerY;

    console.log(words);

    for (var i = 0; i < 2; i++) {
        RenderCircles()
        words[0].render();
    }
}


function RenderCircles() {
    for (var i = 0; i < circleParts.length; i++) {
        circleParts[i].ToggleFill();
        circleParts[i].ToggleStroke();
        circleParts[i].Render();
    }
}

function ReGenerateCanvas() {
    GenerateCanvas();
    RenderCanvas();
}

ReGenerateCanvas()
window.addEventListener('resize', RenderCanvas);


function RotateWheel() {

    this.run = function() {
        for (var i = 0; i < circleParts.length; i++) {
            circleParts[i].startAngle -= this.angle;
            circleParts[i].endAngle -= this.angle;
        }
        words[0].startAngle -= this.angle;
        RenderCanvas();
    }

    this.clockWise = function() {
        this.angle = -0.0015;
        this.run()
    }

    this.counterClockWise = function() {
        this.angle = 0.0015;
        this.run()
    }
}

// const rotate = new RotateWheel;
// setInterval(function () {
//     // console.log("")
//     // for (let i = 0; i < circleParts.length; i++) {
//     //     // circleParts[i].radius += 0.20;
//     //     // circleParts[i].thickness -= 2;
//     // }
//
//     rotate.clockWise();
// }, 66);
