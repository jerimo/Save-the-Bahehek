window.addEventListener('load', soundTotalInit, false);

var mouseClickSound; // 마우스를 클릭할 때 나오는 사운드

var directionSound; // 방향키를 성공했을 때 나오는 사운드

var itemSound; // 아이템 먹기 성공했을 때 나오는 사운드
var itemWrongSound; // 아이템 먹기 실패했을 때 나오는 사운드

var initEndSound; //시놉시스와 끝에 나오는 배경음악
var burningStartMusic; //버닝 시작할 때 나오는 배경음악

var stageClearMusic; //스테이지 클리어 할 때 나오는 사운드

var bgm; //bgm을 넣는 배열

function soundTotalInit() {
    mouseClickSound = new Audio("mouseClickMusic.wav");
    directionSound = new Audio("directionMusic.mp3");

    itemSound = new Audio("itemMusic.wav"); 
    itemWrongSound = new Audio("itemWrongMusic.wav");

    initEndSound = new Audio("tempMusic.mp3");

    burningStartMusic= new Audio("burningStart.wav");
    stageClearMusic = new Audio("stageClearMusic.wav");

    bgm = new Array();

    bgm.push({music : new Audio("tempMusic.mp3") , startTime : 0}); // 스테이지 0
    bgm.push({music : new Audio("loveIsAnOpenDoor.mp3") , startTime : 0}); // 스테이지 1
    bgm.push({music : new Audio("bol4.mp3") , startTime : 7}); // 스테이지 2
    bgm.push({music : new Audio("eMart.mp3") , startTime : 7}); // 스테이지 3
    bgm.push({music : new Audio("boyWithLuv.mp3") , startTime : 7}); // 스테이지 4
    bgm.push({music : new Audio("dna.mp3") , startTime : 0}); // 스테이지 5
    bgm.push({music : new Audio("daladala.mp3") , startTime : 7}); // 스테이지 6
    bgm.push({music : new Audio("letItGo.mp3") , startTime : 0}); // 스테이지 7
    bgm.push({music : new Audio("killThisLove.mp3") , startTime : 7}); // 스테이지 8
    bgm.push({music : new Audio("amorParty.mp3") , startTime : 17}); // 스테이지 9
    bgm.push({music : new Audio("micDrop.mp3") , startTime : 0}); // 스테이지 10

    bol4 = new Audio("bol4.mp3");
   
}

function mouseClickSoundPlay() {
   mouseClickSound.currentTime = 0;
   mouseClickSound.play();
}

function directionSoundPlay() {
    directionSound.currentTime = 0;
    directionSound.play();
}

function itemSoundPlay() {
    itemSound.currentTime = 0;
    itemSound.play();
}

function itemWrongSoundPlay() {
    itemWrongSound.currentTime = 0;
    itemWrongSound.play();
}

function initEndSoundPlay() {
    initEndSound.currentTime = 0;
    initEndSound.play();
}

function initEndSoundPause() {
    initEndSound.pause();
}

function burningStartMusicPlay() {
    burningStartMusic.currentTime = 1;
    burningStartMusic.play();
}

function stageClearMusicPlay(stageNum) {
    
    bgm[stageNum].music.pause();
    stageClearMusic.currentTime = 0;
    stageClearMusic.play();
}
function BGMPlay(stageNum){
    bgm[stageNum].music.currentTime = bgm[stageNum].startTime;
    bgm[stageNum].music.play();
}

