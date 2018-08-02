class DrawClockLikeWords {
    constructor(array, x, y, radius, startAngle, fontSize) {
        this.array = array;
        this.startAngle = startAngle;

        this.x = x;
        this.y = y;

        this.radius = radius;
        this.radiusPercentage = radius;

        this.font = fontSize;
        this.fontSizePercentage = fontSize;

        this.fillStyle = '#222';
    }

    setCenter(x, y) {
        this.x = x;
        this.y = y;
    }

    setFont(rawSize) {
        this.font = this.fontSizePercentage * rawSize;
    }

    setRadius(rawSize) {
        this.radius = this.radiusPercentage * rawSize;
    }

    render() {
        ctx.font = this.font + "px arial";
        ctx.fillStyle = this.fillStyle
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        const max = this.array.length
        ctx.translate(this.x, this.y);

        for(let i = 0; i < max; i++){
            const halfMax = max / 2
            const ang = (i * Math.PI / halfMax) + (this.startAngle * Math.PI);

            ctx.rotate(ang);
            ctx.translate(0, - this.radius);
            ctx.rotate(- ang);
            ctx.fillText(this.array[i].toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, this.radius);
            ctx.rotate(- ang);
        }
        ctx.translate(- this.x, - this.y);
    }
}
