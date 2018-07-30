function RenderCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.width;

    offsetX = GetOffsetX("newcanvas");
    offsetY = GetOffsetY("newcanvas");
    centerX = canvas.width / 2 + offsetX;
    centerY = canvas.height / 2 + offsetY;

    for (let i = 0; i < circleParts.length; i++) {
        circleParts[i].setThickness(canvas.width);
        circleParts[i].setRadius(canvas.width);
        circleParts[i].setCenter(centerX, centerY);
    }

    words[0].setRadius(canvas.width);
    words[0].setFont(canvas.width);
    words[0].setCenter(centerX, centerY);

    for (var i = 0; i < 2; i++) {
        RenderCircles()
        words[0].render();
    }
}

function RenderCircles() {
    for (var i = 0; i < circleParts.length; i++) {
        circleParts[i].ToggleFill();
        circleParts[i].ToggleStroke();
        circleParts[i].render();
    }
}

function ReGenerateCanvas() {
    GenerateCanvas();
    RenderCanvas();
}

ReGenerateCanvas()
window.addEventListener('resize', RenderCanvas);
