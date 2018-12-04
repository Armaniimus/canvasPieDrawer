class RotateWheel {
    constructor() {
        this.clockwise = 1;
        this.angle = -0.0030;
        this.running = 0;
        this.interval;
    }

    toggleRotate() {
        if (this.running == 0) {
            this.running = 1;
            this.startInterval();
        } else {
            this.running = 0
            this.stopInterval(this.interval);
        }
    }

    startInterval() {
        this.interval = setInterval(function() {
            this.run()
        }.bind(this), 66);
    }

    stopInterval() {
        clearInterval(this.interval);
    }

    toggleClockwise() {
        if (this.clockwise == 0) {
            this.clockwise = 1
            this.angle = -0.0030;
        } else {
            this.clockwise = 0
            this.angle = 0.0030;
        }
    }

    run() {
        for (var i = 0; i < circleParts.length; i++) {
            circleParts[i].startAngle -= this.angle;
            circleParts[i].endAngle -= this.angle;
        }
        words[0].startAngle -= this.angle;
        RenderCanvas();
    }
}

const rotate = new RotateWheel;
function handleRotate() {
    rotate.toggleRotate();
}

function switchRotate() {
    rotate.toggleClockwise();
}

function makeWhite() {
    input = document.getElementById('partID')
    circleParts[input.value].fillStyle = '#FFFFFF'
    RenderCanvas();
}

function reset() {
    rotate.running = 0;
    rotate.stopInterval();
    ReGenerateCanvas();
}
