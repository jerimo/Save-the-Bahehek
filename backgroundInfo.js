window.addEventListener('load', backgroundInit, false);

var gamebackground1;
var gamebackground2;
var gamebackground3;

var easyClear;
var normalClear;
var hardClear;

var easyFail;
var normalFail;
var hardFail;

var lastScene;

function backgroundInit() {
    gamebackground1 = new Image();
    gamebackground2 = new Image();
    gamebackground3 = new Image();
   

    easyClear = new Image();
    normalClear = new Image();
    hardClear = new Image();

    easyFail = new Image();
    normalFail = new Image();
    hardFail = new Image();

    lastScene = new Image();

    gamebackground1.src = "background1.png";
    gamebackground2.src = "background2.png";
    gamebackground3.src = "background3.png";

    easyClear.src = "easyClear.png";
    normalClear.src = "normalClear.png";
    hardClear.src = "hardClear.png";

    easyFail.src = "easyFail.png";
    normalFail.src = "normalFail.png";
    hardFail.src = "hardFail.png";

    lastScene.src="lastScene.png";
}

function drawNextStage() { //Next Stage로 가기위한 발판을 그린다.
    
    stageClearMusicPlay(getStage());
    
    
    if(getStage() >=0 && getStage() <=3){
        ctx.drawImage(easyClear, 0,0,canvasWidth,canvasHeight, 0,0,canvasWidth,canvasHeight);
        drawScore(410,469);
    }

    else if(getStage() >=4 && getStage() <=7) {
        ctx.drawImage(normalClear, 0,0,canvasWidth,canvasHeight, 0,0,canvasWidth,canvasHeight);
        drawScore(410,469);
    }

    else if(getStage() >=8 && getStage() <10){
        ctx.drawImage(hardClear, 0,0,canvasWidth,canvasHeight, 0,0,canvasWidth,canvasHeight);
        drawScore(410,469);
    }

    else {
        ctx.drawImage(lastScene, 0,0,1640, 915, 0,0,canvasWidth,canvasHeight);
        drawScore(190, 469);
    }
}

function drawStageBackground() { //뒷 배경을 그린다.
    if (getStage() >= 0 && getStage() <= 3) {
        ctx.drawImage(gamebackground1, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
    }

    else if (getStage() >= 4 && getStage() <= 7) {
        ctx.drawImage(gamebackground2, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
    }

    else if (getStage() >= 8 && getStage() <= 10) {
        ctx.drawImage(gamebackground3, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
    }
}



function doNothing(){}