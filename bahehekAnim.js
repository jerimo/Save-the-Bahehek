window.addEventListener('load', bahehekInit, false);

var normalBahehek;
var happyBahehek;
var sadBahehek;
var burningBahehek;

function bahehekInit() {
    normalBahehek = new Image();
    happyBahehek = new Image();
    sadBahehek = new Image();
    burningBahehek = new Image();

    normalBahehek.src = "normalBahehek.png";
    happyBahehek.src = "happyBahehek.png";
    sadBahehek.src = "sadBahehek.png";
    burningBahehek.src = "burningBahehek.png";

    normalBahehek.addEventListener('load', bahehekImageLoad, false);
    happyBahehek.addEventListener('load', bahehekImageLoad, false);
    sadBahehek.addEventListener('load', bahehekImageLoad, false);
    burningBahehek.addEventListener('load', bahehekImageLoad, false);
}

function bahehekImageLoad() {
}

var bahehekAnimIt = 0;
var bahehekPosition = { x: 50, y: 292 };
var baheheksourceXY = 64;
var bahehekWidth = 146;
var bahehekHeight = 146;

var isClicked = false;

var indexOfBahehek = 0;
var dxOfBahehek = 1;

function bahehekBackground(x,y) { //바흐흑의 뒤에 나오는 BackGround
    if(stage >= 0 && stage <=3)
        ctx.drawImage(gamebackground1, x, y, 146, 146, x, y, 146, 146);

    else if (stage >=4 && stage <= 7)
        ctx.drawImage(gamebackground2, x, y, 146,146, x, y, 146, 146);

    else
        ctx.drawImage(gamebackground3, x, y, 146, 146, x, y, 146, 146);
}


function bahehekDance(x, y) {

    ctx.clearRect(x,y, bahehekWidth, bahehekHeight);
    bahehekBackground(x,y);
    ctx.drawImage(normalBahehek, indexOfBahehek * baheheksourceXY, 0, baheheksourceXY, baheheksourceXY, x, y, bahehekWidth, bahehekHeight);

    indexOfBahehek = indexOfBahehek + dxOfBahehek;
    if(indexOfBahehek  == 0 || indexOfBahehek == 4) {
        dxOfBahehek = -dxOfBahehek;
    }

}

function bahehekHappyDance(x, y) {
    ctx.clearRect(x,y, bahehekWidth, bahehekHeight);
    bahehekBackground(x,y);
    ctx.drawImage(happyBahehek, indexOfBahehek * baheheksourceXY, 0, baheheksourceXY, baheheksourceXY, x, y, bahehekWidth, bahehekHeight);

    indexOfBahehek = indexOfBahehek + dxOfBahehek;
    if(indexOfBahehek  == 0 || indexOfBahehek == 4) {
        dxOfBahehek = -dxOfBahehek;
    }
}

function bahehekSadDance(x, y) {
    ctx.clearRect(x,y, bahehekWidth, bahehekHeight);
    bahehekBackground(x,y);
    ctx.drawImage(sadBahehek, indexOfBahehek * baheheksourceXY, 0, baheheksourceXY, baheheksourceXY, x, y, bahehekWidth, bahehekHeight);

    indexOfBahehek = indexOfBahehek + dxOfBahehek;
    if(indexOfBahehek  == 0 || indexOfBahehek == 4) {
        dxOfBahehek = -dxOfBahehek;
    }
}

function bahehekBurningDance(x, y) {
    ctx.clearRect(x,y, bahehekWidth, bahehekHeight);
    bahehekBackground(x,y);
    ctx.drawImage(burningBahehek, indexOfBahehek * baheheksourceXY, 0, baheheksourceXY, baheheksourceXY, x, y, bahehekWidth, bahehekHeight);

    indexOfBahehek = indexOfBahehek + dxOfBahehek;
    if(indexOfBahehek  == 0 || indexOfBahehek == 4) {
        dxOfBahehek = -dxOfBahehek;
    }
}