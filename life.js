var lifeCnt = 7;
var life = { x : 64, y : 0}; //라이프의 이미지상 시작 좌표

function lifeDown() {
    lifeCnt -= 1;
}

function lifeUp() {
    if(lifeCnt <10)
        lifeCnt += 1;
}

function drawLife(lifeCnt) { 
    for(let i = 0 ; i< lifeCnt ; i++) {
        ctx.drawImage(lifeImage, life.x, life.y, sw, sh, 700 + 30* (1 + i) ,10 , 20, 20);
    }
}
