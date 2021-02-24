var X, Y; //마우스 클릭의 X, Y 좌표


window.addEventListener('mousedown', function (e) { // mouseDown 이벤트 리스너 등록
    X = e.clientX; // X에 클릭한 마우스 좌표의 X값을 넣어줘요.
    Y = e.clientY; // Y에 클릭한 마우스 좌표의 Y값을 넣어줘요.


    if (getStage() == -1) { // 시놉시스 일 때

        if (859 < X && X < 859 + 151 && 483 < Y && Y < 483 + 75) { // 게임 설명 박스 안에 있을 때
            mouseClickSoundPlay();

            ctx.drawImage(explain, 0, 0, 816, 544, 112, 20, 816, 544);
            setStage(-2);
        }

        else if (671 < X && X < 671 + 151 && 483 < Y && Y < 483 + 75) { // 게임 시작 박스 안에 있을 때
            setStage(1); // 스테이지 1로 설정. 
            BGMPlay(getStage());
            ctx.clearRect(0, 0, canvasWidth, canvasHeight); // 스테이지 1로 변환하기 위해 캔버스를 다 지운다.
            startMap(getStage());
            animationLoopStart();
        }

        else {
            mouseClickSoundPlay();
        }
    }

    else if (getStage() == -2) { // 설명창 일때
        mouseClickSoundPlay();
        if (854 < X && X < 888 && 67 < Y && Y < 100) {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight); //지우고
            ctx.drawImage(initImage, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight); //시놉시스 다시 만들고
            setStage(-1);
        }
    }

    else if (getStage() == 10 && isCleared) { // 클리어 했을 때
        if (878 <= X && X <= 1025 && 502 <= Y && Y <= 574) {
            setStage(-1);
            setFirstStatus();
            ctx.drawImage(initImage, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
            isCleared = false;
        }
    }

    else if (getStage() == -3) { //실패 했을 때
        if (X >= 875 && X <= 1026 && 500 <= Y && Y <= 575) { //다시하기 버튼을 눌렀을 때
            ctx.drawImage(initImage, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
            setStage(-1);
            setFirstStatus();
        }
    }

    else {
        if (isCleared) { // 스테이지 클리어 이후
            isCleared = false;
            setStage(getStage() + 1);
            BGMPlay(getStage());
            startMap(getStage());
        }
    }
}, false);

window.addEventListener('keydown', function (e) { // keyDown 이벤트 리스너 등록
    if (getStage() > -1 && preventDoubleClick != 0) { // 시놉시스가 아닐때 + doubleClick을 방지하기 위해 항상 1일때만 눌리게 한것
        preventDoubleClick = 0;
        switch (e.keyCode) {
            case 39: //오른쪽 키를 눌렀을 때
                rightClick(0);
                break;

            case 37:  //왼쪽 키를 눌렀을 때
                rightClick(1);
                break;

            case 38:  //위쪽 키를 눌렀을 때
                rightClick(2);
                break;

            case 40:  //아랫쪽 키를 눌렀을 때
                rightClick(3);
                break;

            case 32: //스페이스 바를 눌렀을 때
                rightClick(4);
                break;

            case 16: //Shift를 눌렀을 때
                rightClick(5);
                break;
        }
    }
}, false);

function rightClick(inputType) { //클릭한 것이 맞았을 모든 경우에 대한 함수.
    switch (inputType) {
        case 0: //우
            if (stageDirection[getStage()][mapProgress[getStage()]].direction == 0 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 0) { //오른쪽 방향키, 일반 화살표가 맞으면
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }
            else if (stageDirection[getStage()][mapProgress[getStage()]].direction == 1 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 2) { //왼쪽 방향키, 초록 화살표
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].direction == 1 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 7) { //왼쪽 방향키, 폭탄 화살표
                addScore();
                itemSoundPlay();
                renderUpdate();
                itemAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else {
                if (stageDirection[getStage()][mapProgress[getStage()]].itemType == 7) {
                    lifeCnt = 0;
                }
                else {
                    lifeCnt -= 1;
                }
                if (lifeCnt == 0) {
                    setFail();
                }
                else {
                    itemWrongSoundPlay();
                    combo = 0;
                    renderUpdate();
                    bombAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                    mapProgress[getStage()]++;
                    bahehekSadDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            checkClear();
            break;

        case 1: //좌
            if (stageDirection[getStage()][mapProgress[getStage()]].direction == 1 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 0) { //왼쪽 방향키, 일반 화살표가 맞으면
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].direction == 0 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 2) { //오른쪽 방향키, 초록 화살표
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].direction == 0 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 7) { //오른쪽 방향키, 폭탄 화살표
                addScore();
                itemSoundPlay();
                renderUpdate();
                itemAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else {
                if (stageDirection[getStage()][mapProgress[getStage()]].itemType == 7) {
                    lifeCnt = 0;
                }
                else {
                    lifeCnt -= 1;
                }

                if (lifeCnt == 0) {
                    setFail();
                }
                else {
                    itemWrongSoundPlay();
                    combo = 0;
                    renderUpdate();
                    bombAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                    mapProgress[getStage()]++;
                    bahehekSadDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            checkClear();
            break;

        case 2: //상
            if (stageDirection[getStage()][mapProgress[getStage()]].direction == 2 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 0) { //윗쪽 방향키, 일반 화살표가 맞으면
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].direction == 3 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 2) { //아래쪽 방향키, 초록 화살표
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].direction == 3 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 7) { //아래쪽 방향키, 폭탄 화살표
                addScore();
                itemSoundPlay();
                renderUpdate();
                itemAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else {
                if (stageDirection[getStage()][mapProgress[getStage()]].itemType == 7) {
                    lifeCnt = 0;
                }
                else {
                    lifeCnt -= 1;
                }
                if (lifeCnt == 0) {
                    setFail();
                }
                else {
                    itemWrongSoundPlay();
                    combo = 0;
                    renderUpdate();
                    bombAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                    mapProgress[getStage()]++;
                    bahehekSadDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            checkClear();
            break;

        case 3: //하
            if (stageDirection[getStage()][mapProgress[getStage()]].direction == 3 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 0) { //아랫쪽 방향키, 일반 화살표가 맞으면
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].direction == 2 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 2) { //윗쪽 방향키, 초록 화살표
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].direction == 2 && stageDirection[getStage()][mapProgress[getStage()]].itemType == 7) { //윗쪽 방향키, 폭탄 화살표
                addScore();
                itemSoundPlay();
                renderUpdate();
                itemAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else {
                if (stageDirection[getStage()][mapProgress[getStage()]].itemType == 7) {
                    lifeCnt = 0;
                }
                else {
                    lifeCnt -= 1;
                }
                if (lifeCnt == 0) {
                    setFail();
                }
                else {
                    itemWrongSoundPlay();
                    combo = 0;
                    renderUpdate();
                    bombAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                    mapProgress[getStage()]++;
                    bahehekSadDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            checkClear();
            break;

        case 4: //스페이스바
            if (stageDirection[getStage()][mapProgress[getStage()]].itemType == 6) { //스페이스바, 생명 아이템
                itemSoundPlay();
                lifeUp();
                addScore();
                renderUpdate();
                itemAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()] += 1;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].itemType == 3) { //파란 화살표 일때
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].itemType == 4) { // ! 아이템일 때
                itemSoundPlay();
                addScore();
                changeLeftArrow();
                renderUpdate();
                itemAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else if (stageDirection[getStage()][mapProgress[getStage()]].itemType == 5) { // ? 아이템 일때
                itemSoundPlay();
                addScore();
                randomItemEffect();
                renderUpdate();
                itemAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else {
                lifeCnt -= 1;

                if (lifeCnt == 0) {
                    setFail();
                }

                else {
                    itemWrongSoundPlay();
                    combo = 0;
                    renderUpdate();
                    bombAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                    mapProgress[getStage()]++;
                    bahehekSadDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            checkClear();
            break;

        case 5: //shift로 입력
            if (stageDirection[getStage()][mapProgress[getStage()]].itemType == 1) { // 빨간 화살표 일 때
                directionSoundPlay();
                addScore();
                renderUpdate();
                directionAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                mapProgress[getStage()]++;
                checkBurning();
                if (isBurning) {
                    bahehekBurningDance(bahehekPosition.x, bahehekPosition.y);
                }
                else {
                    bahehekHappyDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            else {
                lifeCnt -= 1;

                if (lifeCnt == 0) {
                    setFail();
                }

                else {
                    itemWrongSoundPlay();
                    combo = 0;
                    renderUpdate();
                    bombAnimStart(stageDirectionPosition[getStage()][mapProgress[getStage()]].x, stageDirectionPosition[getStage()][mapProgress[getStage()]].y);
                    mapProgress[getStage()]++;
                    bahehekSadDance(bahehekPosition.x, bahehekPosition.y);
                }
            }

            checkClear();
            break;
    }

    checkBurning();
    startBurning();
}

var preventDoubleClick = 1; //두번 클릭되는걸 방지하는 변수

window.addEventListener('keyup', function (e) { // 이 리스너의 목적 : key가 눌렸다가 때지지 않으면 다음 key눌리는 리스너가 실행되지 않게끔 만드는 Flag 변수에요.
    preventDoubleClick = 1;
}, false);



