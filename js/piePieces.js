function RenderCanvas() {
    canvasData.render()
    ctx.clearRect(0, 0, canvasData.width, canvasData.height);

    for (let i = 0; i < circleParts.length; i++) {
        circleParts[i].setThickness(canvasData.width);
        circleParts[i].setRadius(canvasData.width);
        circleParts[i].setCenter(canvasData.centX, canvasData.centY);
    }

    words[0].setRadius(canvasData.width);
    words[0].setFont(canvasData.width);
    words[0].setCenter(canvasData.centX, canvasData.centY);

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
