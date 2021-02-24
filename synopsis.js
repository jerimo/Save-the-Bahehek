window.addEventListener('load',makeSynopsis, false);

var initImage; // 시놉시스에 나오는 배경화면 이미지

var explain; // 추후 Font 입히고, Text로 변환해야 해요.

function makeSynopsis() { // 시놉시스를 만드는 함수.
    initImage = new Image();
    initImage.src = "InitImage.png";

    explain = new Image();
    explain.src = "gameExplain.png";

   initImage.addEventListener('load', setFirst, false);
   explain.addEventListener('load',drawStartButton, false);
}

function setFirst() { 
    ctx.drawImage(initImage, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);  
}

function drawStartButton() {}
function drawExplainButton() {}