function DrawPiePiece(x, y, radius, startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle * Math.PI, endAngle * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}
