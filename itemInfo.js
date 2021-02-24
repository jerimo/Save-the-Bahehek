window.addEventListener('load', itemInfoTotalInit, false); // itemInfoTotalInit() 을 페이지 로드할 때 실행.

var sw = 32; //아이템의 가로 크기(사진상)
var sh = 32; //아이템의 세로 크기(사진상)

var rightDirection = { x : 0, y : 0 }; //오른쪽 방향키의 이미지상 시작 좌표
var leftDirection = { x : 32, y : 0 }; //왼쪽 방향키의 이미지상 시작 좌표
var upDirection = { x : 64, y : 0 }; //윗쪽 방향키의 이미지상 시작 좌표
var downDirection = { x : 96, y : 0 }; //아랫쪽 방향키의 이미지상 시작 좌표

var randomItem = { x : 0, y : 0}; // ? 아이템의 이미지상 시작 좌표
var directionChangeItem = { x : 32, y : 0}; // ! 아이템의 이미지상 시작 좌표
var lifeItem = { x : 96, y : 0}; // 생명 증가 아이템의 이미지상 시작 좌표

var whiteDirectionImage;
var redDirectionImage;
var greenDirectionImage;
var blueDirectionImage;
var bombDirectionImage;
var itemImage;
var lifeImage;



function whiteDirectionImageInit() { //하얀 방향키 이미지 정의
    whiteDirectionImage = new Image(); 
    whiteDirectionImage.src="whiteDirection.png";
}

function redDirectionImageInit() { // 빨간 방향키 이미지 정의
    redDirectionImage  = new Image();
    redDirectionImage.src="redDirection.png";
}

function greenDirectionImageInit() { // 초록 방향키 이미지 정의
    greenDirectionImage  = new Image();
    greenDirectionImage.src = "greenDirection.png";
}

function blueDirectionImageInit() { // 파란 방향키 이미지 정의
    blueDirectionImage  = new Image();
    blueDirectionImage.src = "blueDirection.png";
}

function bombDirectionImageInit() { // 폭탄 방향키 이미지 정의
    bombDirectionImage  = new Image();
    bombDirectionImage.src = "bombImage.png";
}

function itemImageInit() { // 기타 등등 아이템 이미지 정의
    itemImage  = new Image();
    itemImage.src = "itemImage.png";
    
}

function lifeImageInit() { //생명 이미지 정의
     lifeImage  = new Image();
     lifeImage.src = "itemImage.png";
}

function itemInfoTotalInit() { //위에 있는 함수들을 실행하는 함수
    whiteDirectionImageInit();
    redDirectionImageInit();
    greenDirectionImageInit();
    blueDirectionImageInit();
    bombDirectionImageInit();
    itemImageInit();
    lifeImageInit();
}

/* itemType 정리
    0 : 일반 화살표
    1 : 빨간 화살표 //무조건 Shift!
    2 : 초록 화살표
    3 : 파란 화살표
    4 : ! 아이템
    5 : ? 아이템
    6 : 생명 아이템
    7 : 폭탄 아이템
*/

function drawItem(item, position) { // item = stageDirection[i][j], position = stageDirectionPosition[i][j] 
    //아이템을 그리는 함수, 통합.
    switch (item.itemType) {
        case 0: //일반 화살표
            if (item.direction == 0) { // 우
                ctx.drawImage(whiteDirectionImage, rightDirection.x, rightDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 1) { // 좌
                ctx.drawImage(whiteDirectionImage, leftDirection.x, leftDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 2) { // 상
                ctx.drawImage(whiteDirectionImage, upDirection.x, upDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 3) { // 하
                ctx.drawImage(whiteDirectionImage, downDirection.x, downDirection.y, sw, sh, position.x, position.y, 40, 40);
            }
            break;

        case 1: // 빨간 화살표
            if (item.direction == 0) { // 우
                ctx.drawImage(redDirectionImage, rightDirection.x, rightDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 1) { // 좌
                ctx.drawImage(redDirectionImage, leftDirection.x, leftDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 2) { // 상
                ctx.drawImage(redDirectionImage, upDirection.x, upDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 3) { // 하
                ctx.drawImage(redDirectionImage, downDirection.x, downDirection.y, sw, sh, position.x, position.y, 40, 40);
            }
            break;

        case 2: //초록 화살표
            if (item.direction == 0) { // 우
                ctx.drawImage(greenDirectionImage, rightDirection.x, rightDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 1) { // 좌
                ctx.drawImage(greenDirectionImage, leftDirection.x, leftDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 2) { // 상
                ctx.drawImage(greenDirectionImage, upDirection.x, upDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 3) { // 하
                ctx.drawImage(greenDirectionImage, downDirection.x, downDirection.y, sw, sh, position.x, position.y, 40, 40);
            }
            break;

        case 3: //파란 화살표
            if (item.direction == 0) { // 우
                ctx.drawImage(blueDirectionImage, rightDirection.x, rightDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 1) { // 좌
                ctx.drawImage(blueDirectionImage, leftDirection.x, leftDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 2) { // 상
                ctx.drawImage(blueDirectionImage, upDirection.x, upDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 3) { // 하
                ctx.drawImage(blueDirectionImage, downDirection.x, downDirection.y, sw, sh, position.x, position.y, 40, 40);
            }
            break;

        case 4: // ! 아이템
            ctx.drawImage(itemImage, directionChangeItem.x, directionChangeItem.y, sw, sh, position.x, position.y, 40, 40);
            break;

        case 5: // ? 아이템
            ctx.drawImage(itemImage, randomItem.x, randomItem.y, sw, sh, position.x, position.y, 40, 40);
            break;

        case 6: // 생명 아이템
            ctx.drawImage(lifeImage, lifeItem.x, lifeItem.y, sw, sh, position.x, position.y, 40, 40);
            break;

        case 7: // 폭탄 아이템
            if (item.direction == 0) { // 우
                ctx.drawImage(bombDirectionImage, rightDirection.x, rightDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 1) { // 좌
                ctx.drawImage(bombDirectionImage, leftDirection.x, leftDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 2) { // 상
                ctx.drawImage(bombDirectionImage, upDirection.x, upDirection.y, sw, sh, position.x, position.y, 40, 40);
            }

            if (item.direction == 3) { // 하
                ctx.drawImage(bombDirectionImage, downDirection.x, downDirection.y, sw, sh, position.x, position.y, 40, 40);
            }
            break;
    }
}

function changeLeftArrow() { //! 아이템 효과
    for (let i = mapProgress[getStage()]; i < stageDirection[getStage()].length; i++) {
        stageDirection[getStage()][i].direction = Math.floor(Math.random() * 4);
    }
}

function randomItemEffect() { // ? 아이템 효과
    let choose = Math.floor(Math.random() * 2);

    if (choose == 0) {
        changeLeftArrow();
    }

    else {
        lifeUp();
    }
}

function renderUpdate() { // 바뀐 내용을 업데이트 하는 함수.
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawStageBackground(); 

    drawLife(lifeCnt); // 남은 생명을 Canvas에 그려주는 함수 (life.js에 있음)
    drawScore(10, 10); // (score.js에 있음) 

    drawCombo(50, 460); // (Score.js에 있음)

    for (var i = mapProgress[getStage()]; i < stageDirectionPosition[getStage()].length; i++) // 남은 방향키를 그리는 반복문
        drawItem(stageDirection[getStage()][i], stageDirectionPosition[getStage()][i]);
}

