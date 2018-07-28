//global non specific vars
let canvas = document.getElementById("newcanvas");
let ctx = canvas.getContext("2d");

//position variables
let centerX;
let centerY;
let offsetX;
let offsetY;

let scoreE = [];
let colors = ["#FE2712", "#FC600A", "#FB9902", "#FCCC1A", "#FEFE33", "#B2D732", "#66B032", "#347C98", "#0247FE", "#4424D6", "#8601AF", "#C21460"];
let backgroundColor = "#252525";

function GenerateCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.width;

    //position variables
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
    offsetX = getOffsetX("newcanvas");
    offsetY = getOffsetY("newcanvas");

    ctx.clearRect(0,0,canvas.width,canvas.height);
    //
    // ctx.fillStyle = backgroundColor;
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    let startAngle = 0.32;

    GenerateTints(startAngle);
    drawCircle(scoreE);

    GenerateHues(startAngle);
    drawCircle(scoreE);

    GenerateTones(startAngle);
    drawCircle(scoreE);

    GenerateShades(startAngle);
    drawCircle(scoreE);

    GenerateInnerCircle();
    DrawPie(scoreE);

    let signs = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
    DrawClockLikeWords(signs, ctx, canvas.width * 0.17, startAngle, canvas.width * 0.03);
}

function GenerateInnerCircle() {
    scoreE = [];
    scoreE[0] = {x:centerX, y:centerY, startAngle: -0.00, endAngle: 2 , color: "#fff"};
    scoreE[0]["radius"] = (canvas.width * 0.25);
}

function GenerateHues(startAngle) {
    let parts = 12;
    let angle = (2 / 3 * 2) + 0.083 + startAngle;
    canvas.width * 0.9;

    for (let i = 0; i < parts; i++) {
        scoreE[i] = {x:centerX, y:centerY, startAngle: angle, endAngle: angle + 0.168, color: colors[i]};
        scoreE[i]["thickness"] = canvas.width * 0.05;
        scoreE[i]["radius"] = canvas.width * 0.40;

        if ( (i % 3) == 0 ) {
            scoreE[i]["endAngle"] = angle + 0.168;
            angle += 0.168;
        } else {
            scoreE[i]["endAngle"] = angle + 0.166;
            angle += 0.166;
        }

        if ( (i % 4) == 0 ) {
            scoreE[i]["radius"] = scoreE[i]["radius"] + canvas.width * 0.024;
            scoreE[i]["thickness"] = scoreE[i]["thickness"] + canvas.width * 0.012;
        }
    }
}

function GenerateShades(startAngle) {
    let parts = 12;
    let angle = (2 / 3 * 2) + 0.083 + startAngle;
    for (let i = 0; i < parts; i++) {
        scoreE[i] = {x:centerX, y:centerY, startAngle: angle, endAngle: angle + 0.168};
        scoreE[i]["color"] = TranslateHueToShade(colors[i]);
        scoreE[i]["thickness"] = canvas.width * 0.05;
        scoreE[i]["radius"] = canvas.width * 0.30;

        if ( (i % 3) == 0 ) {
            scoreE[i]["endAngle"] = angle + 0.168;
            angle += 0.168;
        } else {
            scoreE[i]["endAngle"] = angle + 0.166;
            angle += 0.166;
        }

        if ( (i % 4) == 0 ) {
            scoreE[i]["radius"] = scoreE[i]["radius"] + canvas.width * 0.006;
            scoreE[i]["thickness"] = scoreE[i]["thickness"] + canvas.width * 0.006;
        }
    }
}

function GenerateTones(startAngle) {
    let parts = 12;
    let angle = (2 / 3 * 2) + 0.083 + startAngle;

    console.log(" ");
    for (let i = 0; i < parts; i++) {
        scoreE[i] = {x:centerX, y:centerY, radius: 90, thickness: 30, startAngle: angle, endAngle: angle + 0.168};
        scoreE[i]["color"] = TranslateHueToTone(colors[i]);
        scoreE[i]["thickness"] = canvas.width * 0.05;
        scoreE[i]["radius"] = canvas.width * 0.35;

        if ( (i % 3) == 0 ) {
            scoreE[i]["endAngle"] = angle + 0.168;
            angle += 0.168;
        } else {
            scoreE[i]["endAngle"] = angle + 0.166;
            angle += 0.166;
        }

        if ( (i % 4) == 0 ) {
            scoreE[i]["thickness"] = scoreE[i]["thickness"] + canvas.width * 0.006;
            scoreE[i]["radius"] = scoreE[i]["radius"] + canvas.width * 0.012;
        }
    }
}

function GenerateTints(startAngle) {
    let parts = 12;
    let angle = (2 / 3 * 2) + 0.083 + startAngle;
    for (let i = 0; i < parts; i++) {
        scoreE[i] = {x:centerX, y:centerY, radius: 150, thickness: 30, startAngle: angle, endAngle: angle + 0.168};
        scoreE[i]["color"] = TranslateHueToTint(colors[i]);
        scoreE[i]["thickness"] = canvas.width * 0.05;
        scoreE[i]["radius"] = canvas.width * 0.45;

        if ( (i % 3) == 0 ) {
            scoreE[i]["endAngle"] = angle + 0.168;
            angle += 0.168;
        } else {
            scoreE[i]["endAngle"] = angle + 0.166;
            angle += 0.166;
        }

        if ( (i % 4) == 0 ) {
            scoreE[i]["radius"] = scoreE[i]["radius"] + canvas.width * 0.030;
            scoreE[i]["thickness"] = scoreE[i]["thickness"] + canvas.width * 0.006;
        }
    }
}

GenerateCanvas();
window.addEventListener('resize', GenerateCanvas);
