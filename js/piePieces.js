function RenderCanvas() {
    canvas.render()
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circleParts.length; i++) {
        circleParts[i].setThickness(canvas.width);
        circleParts[i].setRadius(canvas.width);
        circleParts[i].setCenter(canvas.centX, canvas.centY);
    }

    words[0].setRadius(canvas.width);
    words[0].setFont(canvas.width);
    words[0].setCenter(canvas.centX, canvas.centY);

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
