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

function DrawPiePiece(x, y, radius, startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle * Math.PI, endAngle * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}

// function drawArcs(array) {
function DrawCirclePiece(x, y, radius, thickness, startAngle, endAngle) {
    this.x = x; //sets start x
    this.y = y; //sets start y
    this.startAngle = startAngle;
    this.endAngle = endAngle;

    this.radius = radius; //sets radius
    this.radiusMultiplier = radius;

    this.thickness = thickness;
    this.thicknessMultiplier = thickness;

    this.strokeStyle = "000";
    this.lineWidth = 1;
    this.fillStyle = "000";

    this.setCenter = function(x, y) {
        this.x = x;
        this.y = y;
    }

    this.setRadius = function(size) {
        this.radius = this.radiusMultiplier * size;
    }

    this.setThickness = function(size) {
        this.thickness = this.thicknessMultiplier * size;
    }

    this.render = function() {
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

    this.ToggleFill = function() {
        if (this.fill) {
            this.fill = false

        } else {
            this.fill = true;
        }
    }

    this.ToggleStroke = function() {
        if (this.stroke) {
            this.stroke = false

        } else {
            this.stroke = true;
        }
    }
}

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

    ctx.rect(this.x, this.y, this.width,this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
}
