var stage = -1; // 몇번째 스테이지 인지 체크하는 변수. -1 : 시놉시스, 0 : 테스트용 맵, 1~10 : Map 1 ~ Map10.
var isCleared = false; //스테이지 클리어가 되었는지에 대한 여부

function getStage() { // 스테이지를 가져오는 함수
    return stage;
}

function setStage(n) { // 스테이지를 바꾸는 함수
    stage = n;
}

function checkClear() { //스테이지를 클리어 했는지에 대한 함수
    if (mapProgress[getStage()] == stageDirectionPosition[getStage()].length) {
        isCleared = true;
    }
}

function setFirstStatus() { //처음 상태로 모든 변수 초기화
    lifeCnt = 7; //생명 초기화

    for (let i = 0; i < 11; i++) { //mapProgress 초기화
        mapProgress[i] = 0;
    }

    score = 0;
    combo = 0;
    isBurning = false;
}

function setFail() { // 실패했을때 나오는 화면과 세팅.

    if (getStage() >= 0 && getStage() <= 3) {
        ctx.drawImage(easyFail, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        drawScore(442, 367);
    }

    else if (getStage() >= 4 && getStage() <= 7) {
        ctx.drawImage(normalFail, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        drawScore(442, 367);
    }

    else if (getStage() >= 8 && getStage() <= 10) {
        ctx.drawImage(hardFail, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        drawScore(442, 367);
    }

    setStage(-3);
    setFirstStatus();
}