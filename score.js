window.addEventListener('load', numberImageInit, false);
window.addEventListener('load',setScorePosition, false);

var score = 0;
var combo = 0;

var SCOREIMG; //SCORE 글자
var scoreImage;
var scorePosition;

var COMBOIMG; //COMBO 글자
var comoboNum;

function numberImageInit() {
    
    SCOREIMG = new Image();
    SCOREIMG.src = "SCORE.png";
    SCOREIMG.addEventListener('load', nothingToDo, false);

    scoreImage = new Image();
    scoreImage.src = 'number.png';
    scoreImage.addEventListener('load', nothingToDo, false);

    COMBOIMG = new Image();
    COMBOIMG.src = "COMBO.png";
    COMBOIMG.addEventListener('load', nothingToDo, false);

    comboNum = new Image();
    comboNum.src = 'comboNum.png';
    comboNum.addEventListener('load', nothingToDo, false);


}

function renderScore() {
    ctx.font="30px 궁서";
    ctx.fillStyle="black";
    ctx.fillText("Score : " + score.toString(), 300, 300);
    ctx.fillText(combo.toString() + " Combo!", 500,500);
}

function addScore() {
    if(!isBurning)
        score += 10;
    else
        score += 20;
    
    combo++;
}

function comboReset() {
    combo = 0;
}

function setScorePosition() { //scorePosition의 사진에서의 위치 찾기
    scorePosition = new Array();

    for(let i = 0 ; i< 5 ; i++) {
        scorePosition.push( {x: 32 * i, y : 0});
    }

    for(let j = 0 ; j< 5 ; j++) {
        scorePosition.push( {x: 32 * j, y : 32});
    }
}

function drawScore(x,y) { 
    
    let startX, startY;
    let X,Y;

    startX = x;
    startY = y;
    X = x + 112;
    Y = y;

    let tempScore;

    let thousand;
    let hundred;
    let ten;
    let one;

    tempScore = score;

    thousand = (tempScore - (tempScore % 1000) ) / 1000;
    tempScore = tempScore - thousand * 1000;

    hundred = ( tempScore - (tempScore % 100) ) / 100;
    tempScore = tempScore - hundred * 100;

    ten = ( tempScore - (tempScore % 10) ) / 10;
    one = tempScore - ten * 10;

    ctx.drawImage(SCOREIMG, 0,0, 112, 32, startX, startY, 112, 32);

    if(score >= 1000) { // 네 자리수 Score
        ctx.drawImage(scoreImage,scorePosition[thousand].x, scorePosition[thousand].y, 32, 32, X, Y, 32, 32);
        ctx.drawImage(scoreImage,scorePosition[hundred].x, scorePosition[hundred].y, 32, 32, X + 32, Y , 32, 32);
        ctx.drawImage(scoreImage,scorePosition[ten].x, scorePosition[ten].y, 32, 32, X + 64, Y , 32, 32);
        ctx.drawImage(scoreImage,scorePosition[one].x, scorePosition[one].y, 32, 32, X + 96, Y , 32, 32);
    }

    else if(score >=100 && score < 1000) { // 세 자리수 Score
        ctx.drawImage(scoreImage,scorePosition[hundred].x, scorePosition[hundred].y, 32, 32, X, Y, 32, 32);
        ctx.drawImage(scoreImage,scorePosition[ten].x, scorePosition[ten].y, 32, 32, X + 32, Y , 32, 32);
        ctx.drawImage(scoreImage,scorePosition[one].x, scorePosition[one].y, 32, 32, X + 64, Y , 32, 32);
    }

    else if( score >= 10 && score < 100) { // 두 자리수 Score
        ctx.drawImage(scoreImage,scorePosition[ten].x, scorePosition[ten].y, 32, 32, X, Y, 32, 32);
        ctx.drawImage(scoreImage,scorePosition[one].x, scorePosition[one].y, 32, 32, X + 32, Y, 32, 32);
    }

    else { //0점일 때
        ctx.drawImage(scoreImage,scorePosition[0].x, scorePosition[0].y,32,32, X, Y, 32, 32);
    }
}

function drawCombo(x,y) { 
    
    let startX, startY;
    let X,Y;

    startX = x;
    startY = y;
   

    let tempCombo;

    let ten;
    let one;

    tempCombo = combo;

    ten = ( tempCombo - (tempCombo % 10) ) / 10;
    one = tempCombo - ten * 10;

    if( combo >= 10 && combo < 100) { // 두 자리수 Combo
        X = x + 64;
        Y = y;
        ctx.drawImage(comboNum,scorePosition[ten].x, scorePosition[ten].y, 32, 32, startX, startY, 32, 32);
        ctx.drawImage(comboNum,scorePosition[one].x, scorePosition[one].y, 32, 32, startX + 32, startY, 32, 32);
        ctx.drawImage(COMBOIMG, 0,0, 112, 32, X , Y, 112, 32);

    }

    else { //한 자리수 Combo
        X = x + 32;
        Y = y;
        ctx.drawImage(comboNum,scorePosition[one].x, scorePosition[one].y,32,32, startX, startY, 32, 32);
        ctx.drawImage(COMBOIMG, 0,0, 112, 32, X , Y, 112, 32);
    }
}

function nothingToDo(){}

