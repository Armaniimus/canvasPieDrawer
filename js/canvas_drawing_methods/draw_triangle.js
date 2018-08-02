class DrawTriangle {
    constructor(x, y, angleA, sideAC, sideAB, rotation, color) {
        this.x = x;
        this.y = y;

        this.angleA = angleA;

        this.sideAC = sideAC;
        this.sideAB = sideAB;

        this.rotation = rotation;
        this.fillStyle = color;
        this.strokeStyle = color;
    }

    setCenter() {
        this.center = {}
        this.center.x = (this.pointAlpha.x + this.pointBravo.x + this.pointCharly.x) /3
        this.center.y = (this.pointAlpha.y + this.pointBravo.y + this.pointCharly.y) /3
    }

    setOffset() {
        this.setCenter()
        this.offset = {}
        this.offset.x = this.x - this.center.x;
        this.offset.y = this.y - this.center.y;
    }

    calcCorners(x, y) {
        this.pointAlpha = CalcXYBasedOnSinRule(this.rotation+1, this.sideAC/2, x, y);
        this.pointCharly = CalcXYBasedOnSinRule(this.rotation, this.sideAC/2, x, y);
        this.pointBravo = CalcXYBasedOnSinRule(this.rotation + this.angleA, this.sideAB, this.pointAlpha.x, this.pointAlpha.y);
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

    renderCenter() {
        this.offset = {}
        this.offset.x = 0;
        this.offset.y = 0;
        this.calcCorners(0, 0);
        this.setOffset()
        this.calcCorners(this.offset.x, this.offset.y);
        this.setCenter();
    }

    render() {
        this.renderCenter()

        ctx.beginPath();
        ctx.moveTo(this.pointCharly.x, this.pointCharly.y)

        ctx.lineTo(this.pointAlpha.x, this.pointAlpha.y);
        ctx.lineTo(this.pointBravo.x, this.pointBravo.y);
        ctx.lineTo(this.pointCharly.x, this.pointCharly.y)

        ctx.strokeStyle = this.strokeStyle
        if (this.stroke) {
            ctx.stroke()
        }

        ctx.fillStyle = this.strokeStyle
        if (this.fill) {
            ctx.fill()
        }

        if (this.markCenterFlag) {
            this.markCenter()
        }
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
