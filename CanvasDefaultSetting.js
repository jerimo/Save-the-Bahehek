
var canvasWidth;
var canvasHeight;
var canvas;
var ctx;

window.addEventListener('load',startSetting,false);

function startSetting() { //캔버스의 정의와 캔버스 크기를 저장하는 초기 세팅
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvasWidth = 1040;
    canvasHeight = 585;
}