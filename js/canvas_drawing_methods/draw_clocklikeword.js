function DrawClockLikeWords(array, x, y, radius, startAngle, fontSize) {
    this.array = array;
    this.startAngle = startAngle;

    this.x = x;
    this.y = y;

    this.radius = radius;
    this.radiusMultiplier = radius;

    this.font = fontSize;
    this.fontSizeMultiplier = fontSize;

    this.fillStyle = '#222';

    this.setCenter = function(x, y) {
        this.x = x;
        this.y = y;
    }

    this.setFont = function(size) {
        this.font = this.fontSizeMultiplier * size;
    }

    this.setRadius = function(size) {
        this.radius = this.radiusMultiplier * size;
    }

    this.render = function() {
        ctx.font = this.font + "px arial";
        ctx.fillStyle = this.fillStyle
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        ctx.translate(this.x, this.y);

        const max = this.array.length
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
