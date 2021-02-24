window.addEventListener('load', burningInit, false);

var isBurning = false;
var burningCnt = 0;

var burningEffect;

var burningEffect1;
var burningEffect2;
var burningEffect3;
var burningEffect4;
var burningEffect5;

function burningInit() {

    burningEffect = new Array();

    burningEffect1 = new Image();
    burningEffect2 = new Image();
    burningEffect3 = new Image();
    burningEffect4 = new Image();
    burningEffect5 = new Image();

    burningEffect1.src = "burningEffect1.png";
    burningEffect2.src = "burningEffect2.png";
    burningEffect3.src = "burningEffect3.png";
    burningEffect4.src = "burningEffect4.png";
    burningEffect5.src = "burningEffect5.png";

    burningEffect1.addEventListener('load', function () { }, false);
    burningEffect2.addEventListener('load', function () { }, false);
    burningEffect3.addEventListener('load', function () { }, false);
    burningEffect4.addEventListener('load', function () { }, false);
    burningEffect5.addEventListener('load', function () { }, false);

}

function checkBurning() {
    if (combo > 14) {
        isBurning = true;
    }

    else {
        isBurning = false;
    }

}

function startBurning() {
    console.log(burningCnt);

    if (isBurning) {

        if(burningCnt % 10 == 0) {
            burningStartMusicPlay();
        }
       
        if (burningCnt % 5 == 0) {
            ctx.drawImage(burningEffect1, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        }
        else if (burningCnt % 5 == 1) {
            ctx.drawImage(burningEffect2, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        }

        else if (burningCnt % 5 == 2) {
            ctx.drawImage(burningEffect3, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        }

        else if (burningCnt % 5 == 3) {
            ctx.drawImage(burningEffect4, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        }

        else if (burningCnt % 5 == 4) {
            ctx.drawImage(burningEffect5, 0, 0, canvasWidth, canvasHeight, 0, 0, canvasWidth, canvasHeight);
        }

        if (burningCnt == 9) {
            burningCnt = 0;
            isBurning = false;
            comboReset();
        }

        else {
            burningCnt++;
        }
    }
}