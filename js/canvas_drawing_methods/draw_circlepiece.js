// function drawArcs(array) {
class DrawCirclePiece {
    constructor(x, y, radius, thickness, startAngle, endAngle){
        this.x = x; //sets start x
        this.y = y; //sets start y
        this.startAngle = startAngle;
        this.endAngle = endAngle;

        this.radius = radius; //sets radius
        this.radiusPercentage = radius;

        this.thickness = thickness;
        this.thicknessPercentage = thickness;

        this.strokeStyle = "000";
        this.lineWidth = 1;
        this.fillStyle = "000";
    }

    setCenter(x, y) {
        this.x = x;
        this.y = y;
    }

    setRadius(rawSize) {
        this.radius = this.radiusPercentage * rawSize;
    }

    setThickness(rawSize) {
        this.thickness = this.thicknessPercentage * rawSize;
    }

    render() {
        let startXY = CalcXYBasedOnSinRule(this.startAngle, this.radius - this.thickness, this.x, this.y);
        let firstLine = CalcXYBasedOnSinRule(this.startAngle, this.radius, this.x, this.y);

        ctx.beginPath();

        ctx.moveTo(startXY.x, startXY.y);
        ctx.lineTo(firstLine.x, firstLine.y);

        ctx.arc(this.x, this.y, this.radius,                    this.startAngle * Math.PI,   this.endAngle * Math.PI, false);
        ctx.arc(this.x, this.y, this.radius - this.thickness,   this.endAngle * Math.PI,     this.startAngle * Math.PI, true);

        if (this.fill == true) {
            ctx.fillStyle = this.fillStyle
            ctx.fill();
        }

        if (this.stroke == true) {
            ctx.lineWidth = this.lineWidth;
            ctx.strokeStyle = this.strokeStyle;
            ctx.stroke();
        }
    }

    ToggleFill() {
        if (this.fill) {
            this.fill = false

        } else {
            this.fill = true;
        }
    }

    ToggleStroke() {
        if (this.stroke) {
            this.stroke = false

        } else {
            this.stroke = true;
        }
    }
}
