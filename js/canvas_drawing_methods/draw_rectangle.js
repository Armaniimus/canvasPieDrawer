function DrawRectangle(startX, startY, height, width, color) {
    this.x = startX;
    this.y = startY;
    this.width = width;
    this.height = height;
    this.color = color;

    this.render = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
}
