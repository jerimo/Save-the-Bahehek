window.addEventListener('load', effectInit, false); // effectInit() 를 load할때 실행해준다.

var bombRemoveEffect; // 폭탄 터지는 이미지
var itemRemoveEffect; // 아이템 사라지는 이미지
var directionRemoveEffect; // 일반 화살표 사라지는 이미지

var animSize = 32; // 애니메이션의 원래 이미지의 가로 사이즈

function effectInit() { // 여러가지 effect들의 정의를 해주는 함수
    directionRemoveEffect = new Image(); // 화살표 사라지는 이미지
    directionRemoveEffect.src = "directionRemoveEffect.png";


    bombRemoveEffect = new Image(); // 폭탄이 터지는 이미지
    bombRemoveEffect.src = "bombRemoving.png";


    itemRemoveEffect = new Image(); // 아이템 사라지는 이미지
    itemRemoveEffect.src = "itemRemoving.png";
}

var bombAnimIt = 0;
var directionAnimIt = 0;
var itemAnimIt = 0;

function bombAnimStart(x, y) { //폭탄 애니메이션 시작 함수.
    var bomb_anim = setInterval(function () { bombAnim(x, y) }, 50);

    setTimeout(function () {
        clearTimeout(bomb_anim);
        ctx.clearRect(x, y, 45, 45);
        if (!isCleared) { //클리어 하지 않았을시에 배경화면을 다시채우고
            effectBackground(x, y);
        }
        else { //클리어 햇을 때에는 배경화면을 가져온다
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            drawNextStage();
        }

    }, 251);
}

function bombAnim(x, y) {
    if (!isCleared) {
        ctx.clearRect(x, y, 45, 45);
        effectBackground(x, y);
        ctx.drawImage(bombRemoveEffect, bombAnimIt * animSize, 0, animSize, animSize, x, y, 45, 45);

        bombAnimIt = (bombAnimIt + 1) % 5;
    }
}

function directionAnimStart(x, y) { //방향키
    var direction_anim = setInterval(function () { directionAnim(x, y) }, 50);

    setTimeout(function () {
        clearTimeout(direction_anim);
       
        if (!isCleared) {
            ctx.clearRect(x, y, 45, 45);
            effectBackground(x, y);
        }
        else {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            drawNextStage();
        }

    }, 251);
}

function directionAnim(x, y) {
    if (!isCleared) {

        ctx.clearRect(x, y, 45, 45);
        effectBackground(x, y);
        ctx.drawImage(directionRemoveEffect, directionAnimIt * animSize, 0, animSize, animSize, x, y, 45, 45);

        directionAnimIt = (directionAnimIt + 1) % 5;
    }
}

function itemAnimStart(x, y) { //item
    var item_anim = setInterval(function () { itemAnim(x, y) }, 50);
    setTimeout(function () {
        clearTimeout(item_anim);
        ctx.clearRect(x, y, 45, 45);
        if (!isCleared) {
            effectBackground(x, y);
        }
        else {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            drawNextStage();
        }
    }, 251);
}

function itemAnim(x, y) {
    if (!isCleared) {
        ctx.clearRect(x, y, 45, 45);
        effectBackground(x, y);
        ctx.drawImage(itemRemoveEffect, itemAnimIt * animSize, 0, animSize, animSize, x, y, 45, 45);

        itemAnimIt = (itemAnimIt + 1) % 5;
    }
}

function effectBackground(x,y) {
    if(stage >= 0 && stage <=3)
        ctx.drawImage(gamebackground1, x, y, 45, 45, x, y, 45, 45);

    else if (stage >=4 && stage <= 7)
        ctx.drawImage(gamebackground2, x, y, 45, 45, x, y, 45, 45);

    else
        ctx.drawImage(gamebackground3, x, y, 45, 45, x, y, 45, 45);
}
