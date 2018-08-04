//global non specific vars
const canvas = new setCanvasMetaData("colorWheel");
const ctx = canvas.ctx;

const scoreE = [];

const hueColors = ["#FE2712", "#FC600A", "#FB9902", "#FCCC1A", "#FEFE33", "#B2D732", "#66B032", "#347C98", "#0247FE", "#4424D6", "#8601AF", "#C21460"];
const colors = []

for (var i = 0; i < hueColors.length; i++) {
    colors[i] = new convertHexCodes(hueColors[i])
}

let circleParts = [];
let words = [];

let startAngle = 0;

function GenerateCanvas() {
    circleParts = [];
    words = [];

    GenerateTints(startAngle);
    DrawCircle(scoreE);

    GenerateHues(startAngle);
    DrawCircle(scoreE);

    GenerateTones(startAngle);
    DrawCircle(scoreE);

    GenerateShades(startAngle);
    DrawCircle(scoreE);

    // GenerateInnerCircle();
    // DrawPie(scoreE);

    let signs = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
    words[0] = new DrawClockLikeWords(signs, canvas.centX, canvas.centY, 0.17, startAngle, 0.03);
}

function GenerateInnerCircle() {
    scoreE = [];
    scoreE[0] = {x:canvas.centX, y:canvas.centY, startAngle: -0.00, endAngle: 2 , color: "#fff"};
    scoreE[0]["radius"] = (0.25) - 1;
}


function GenerateShades(startAngle) {
    let parts = 12;
    let angle = (2 / 3 * 2) + 0.083 + startAngle;
    for (let i = 0; i < parts; i++) {
        scoreE[i] = {x:canvas.centX, y:canvas.centY, startAngle: angle, endAngle: angle + 0.168};

        scoreE[i]["color"] = colors[i].shade
        scoreE[i]["thickness"] = 0.05;
        scoreE[i]["radius"] = 0.30;

        if ( (i % 3) == 0 ) {
            scoreE[i]["endAngle"] = angle + 0.168;
            angle += 0.168;
        } else {
            scoreE[i]["endAngle"] = angle + 0.166;
            angle += 0.166;
        }

        if ( (i % 4) == 0 ) {
            scoreE[i]["radius"] = scoreE[i]["radius"] + 0.006;
            scoreE[i]["thickness"] = scoreE[i]["thickness"] + 0.006;
        }
    }
}

function GenerateTones(startAngle) {
    let parts = 12;
    let angle = (2 / 3 * 2) + 0.083 + startAngle;

    for (let i = 0; i < parts; i++) {
        scoreE[i] = {x:canvas.centX, y:canvas.centY, radius: 90, thickness: 30, startAngle: angle, endAngle: angle + 0.168};
        scoreE[i]["color"] = colors[i].tone
        scoreE[i]["thickness"] = 0.05;
        scoreE[i]["radius"] = 0.35;

        if ( (i % 3) == 0 ) {
            scoreE[i]["endAngle"] = angle + 0.168;
            angle += 0.168;
        } else {
            scoreE[i]["endAngle"] = angle + 0.166;
            angle += 0.166;
        }

        if ( (i % 4) == 0 ) {
            scoreE[i]["thickness"] = scoreE[i]["thickness"] + 0.006;
            scoreE[i]["radius"] = scoreE[i]["radius"] + 0.012;
        }
    }
}


function GenerateHues(startAngle) {
    let parts = 12;
    let angle = (2 / 3 * 2) + 0.083 + startAngle;

    for (let i = 0; i < parts; i++) {
        scoreE[i] = {x:canvas.centX, y:canvas.centY, startAngle: angle, endAngle: angle + 0.168, color: colors[i].hue};
        scoreE[i]["thickness"] = 0.05;
        scoreE[i]["radius"] = 0.40;

        if ( (i % 3) == 0 ) {
            scoreE[i]["endAngle"] = angle + 0.168;
            angle += 0.168;
        } else {
            scoreE[i]["endAngle"] = angle + 0.166;
            angle += 0.166;
        }

        if ( (i % 4) == 0 ) {
            scoreE[i]["radius"] = scoreE[i]["radius"] + 0.024;
            scoreE[i]["thickness"] = scoreE[i]["thickness"] + 0.012;
        }
    }
}

function GenerateTints(startAngle) {
    let parts = 12;
    let angle = (2 / 3 * 2) + 0.083 + startAngle;
    for (let i = 0; i < parts; i++) {
        scoreE[i] = {x:canvas.centX, y:canvas.centY, radius: 150, thickness: 30, startAngle: angle, endAngle: angle + 0.168};
        scoreE[i]["color"] = colors[i].tint
        scoreE[i]["thickness"] = 0.05;
        scoreE[i]["radius"] = 0.45;

        if ( (i % 3) == 0 ) {
            scoreE[i]["endAngle"] = angle + 0.168;
            angle += 0.168;
        } else {
            scoreE[i]["endAngle"] = angle + 0.166;
            angle += 0.166;
        }

        if ( (i % 4) == 0 ) {
            scoreE[i]["radius"] = scoreE[i]["radius"] + 0.030;
            scoreE[i]["thickness"] = scoreE[i]["thickness"] + 0.006;
        }
    }
}

function DrawCircle(array) {
    for (let i = 0; i < array.length; i++) {
        const ii = circleParts.length;
        circleParts[ii] = new DrawCirclePiece(array[i]["x"], array[i]["y"], array[i].radius, array[i].thickness, array[i].startAngle, array[i].endAngle);

        circleParts[ii].strokeStyle = "000";
        circleParts[ii].lineWidth = 0.4;
        circleParts[ii].fillStyle = array[i]["color"];
    }
}

function DrawPie(array) {
    for (let i = 0; i < array.length; i++) {
        DrawPiePiece(array[i]["x"], array[i]["y"], array[i].radius, array[i].startAngle, array[i].endAngle, array[i]["color"]);
    }
}
