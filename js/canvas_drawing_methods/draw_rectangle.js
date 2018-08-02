class DrawRectangle {
    constructor(startX, startY, height, width, color) {
        this.x = startX;
        this.y = startY;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
