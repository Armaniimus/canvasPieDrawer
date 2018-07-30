function RotateWheel() {

    this.run = function() {
        for (var i = 0; i < circleParts.length; i++) {
            circleParts[i].startAngle -= this.angle;
            circleParts[i].endAngle -= this.angle;
        }
        words[0].startAngle -= this.angle;
        RenderCanvas();
    }

    this.clockWise = function() {
        this.angle = -0.0015;
        this.run()
    }

    this.counterClockWise = function() {
        this.angle = 0.0015;
        this.run()
    }
}

// const rotate = new RotateWheel;
// setInterval(function () {
//     // console.log("")
//     // for (let i = 0; i < circleParts.length; i++) {
//     //     // circleParts[i].radius += 0.20;
//     //     // circleParts[i].thickness -= 2;
//     // }
//
//     rotate.clockWise();
// }, 66);