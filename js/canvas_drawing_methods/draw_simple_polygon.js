class draw_simplePolygon {
    constructor(radius, rotation, x, y, corners) {
        this.fillColor = "#000";
        this.strokeColor = "#000";

        if (corners > 2) {
            this.sideDistance = Math.sqrt( (radius * radius) - (radius/2 * radius/2) );
        }

        this.radius = radius;
        this.rotation = rotation;
        this.corners = corners;

        this.center = {}
        this.center.x = x;
        this.center.y = y;
        this.cornDiff = 2 / this.corners;

        this.calc()
    }

    calc() {
        this.point = []
        for (let i = 0; i < this.corners; i++) {
            this.point[i] = CalcXYBasedOnSinRule(this.rotation + (this.cornDiff*i), this.radius, this.center.x, this.center.y)
        }
    }

    render() {
        ctx.beginPath();

        let lastL = (this.point.length) -1

        // ctx.moveTo(canvas.width/2, canvas.height/2)
        ctx.moveTo(this.point[lastL].x, this.point[lastL].y)

        for (let i = 0; i < this.point.length; i++) {
            ctx.lineTo(this.point[i].x, this.point[i].y)
        }

        ctx.strokeStyle = this.strokeColor
        if (this.stroke) {
            ctx.stroke()
        }

        ctx.fillStyle = this.fillColor
        if (this.fill) {
            ctx.fill()
        }

        if (this.markCenterFlag) {
            this.markCenter()
        }
    }

    markCenter() {
        ctx.strokeStyle = "#555";
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(this.center.x-1, this.center.y-1)
        ctx.lineTo(this.center.x+1, this.center.y+1);

        ctx.moveTo(this.center.x+1, this.center.y-1)
        ctx.lineTo(this.center.x-1, this.center.y+1);
        ctx.stroke();
    }

    toggleStroke() {
        if (this.stroke) {
            this.stroke = false
        } else {
            this.stroke= true
        }
    }

    toggleFill() {
        if (this.fill) {
            this.fill = false
        } else {
            this.fill = true
        }
    }

    toggleMarkCenter() {
        if (this.markCenterFlag) {
            this.markCenterFlag = false
        } else {
            this.markCenterFlag = true
        }
    }
}
