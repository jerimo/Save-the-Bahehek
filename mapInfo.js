window.addEventListener('load', mapProgressPrimeSet, false);
window.addEventListener('load', setStageDirectionType, false);
window.addEventListener('load', makeItemPosition, false);
window.addEventListener('load', mapDirectionNumberInit, false);

var mapProgress; //맵 진행도. mapProgress[getStage()] -> 이게 현재 스테이지의 진행도, 몇개의 화살표를 제거했는지.

function mapProgressPrimeSet() { //mapProgress 초기화
    mapProgress = new Array();
    for (var i = 0; i < 11; i++) {
        mapProgress.push(0);
    }
}

var stageDirection; // 화살표들의 배열 (2차원 배열)

function setStageDirectionType() {  // 맵마다의 아이템 종류들을 정하는 함수

    stageDirection = new Array(); //어떤 방향이 출력될지를 정하는 배열 (0~3 : 우, 좌, 상, 하) + 4 : 스페이스바

    for (let i = 0; i < 11; i++) {
        stageDirection[i] = new Array();
    }

    for (let i = 0; i < 10 ; i++) { //0부터 3까지의 난수를 배열에 저장, itemType은 비율에 맞춰서 들어가요.
        if (i == 0) {
            stageDirection[0].push({ direction: 4, itemType: 6 });
        }

        else if (i == 1) {
            stageDirection[0].push({ direction: 3, itemType: 1 });
        }

        else if (i == 3) {
            stageDirection[0].push({ direction: 3, itemType: 4 });
        }

        else if (i == 6) {
            stageDirection[0].push({ direction: 1, itemType: 5 });
        }

        else {
            stageDirection[0].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
        }
    }

    for (let i = 0; i < 24; i++) { //스테이지 1 아이템 종류 (1 1:9)
        stageDirection[1].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }

    stageDirection[1][3] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[1][7] = {direction: Math.floor(Math.random() * 4), itemType: 4 }; //!
    stageDirection[1][13] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[1][19] = {direction: Math.floor(Math.random() * 4), itemType: 2 };

    for (let i = 0; i < 24; i++) { //스테이지 2 아이템 종류 (1 1:9)
        stageDirection[2].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }
    stageDirection[2][1] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[2][6] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[2][8] = {direction: Math.floor(Math.random() * 4), itemType: 7 }; // bomb
    stageDirection[2][15] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[2][17] = {direction: Math.floor(Math.random() * 4), itemType: 2 };


    for (let i = 0; i < 27; i++) { //스테이지 3 아이템 종류 (1 2:8)
        stageDirection[3].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }
    stageDirection[3][1] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[3][7] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[3][13] = {direction: Math.floor(Math.random() * 4), itemType: 4 }; //!
    stageDirection[3][15] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[3][21] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[3][24] = {direction: Math.floor(Math.random() * 4), itemType: 2 };


    for (let i = 0; i < 35; i++) { //스테이지 4 아이템 종류 (1 2:8)
        stageDirection[4].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }
    stageDirection[4][4] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[4][5] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[4][7] = {direction: Math.floor(Math.random() * 4), itemType: 5 }; //?
    stageDirection[4][11] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[4][14] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[4][19] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[4][25] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[4][33] = {direction: Math.floor(Math.random() * 4), itemType: 3 };

    for (let i = 0; i < 36; i++) { //스테이지 5 아이템 종류 (2 2:8)
        stageDirection[5].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }
    stageDirection[5][1] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[5][2] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[5][4] = {direction: Math.floor(Math.random() * 4), itemType: 7 }; //bomb
    stageDirection[5][11] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[5][15] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[5][21] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[5][23] = {direction: Math.floor(Math.random() * 4), itemType: 6 }; //
    stageDirection[5][33] = {direction: Math.floor(Math.random() * 4), itemType: 1 };

    for (let i = 0; i < 37; i++) { //스테이지 6 아이템 종류 (2 3:7)
        stageDirection[6].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }
    stageDirection[6][0] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[6][2] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[6][8] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[6][9] = {direction: Math.floor(Math.random() * 4), itemType: 4 }; //!
    stageDirection[6][10] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[6][13] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[6][16] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[6][20] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[6][23] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[6][28] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[6][32] = {direction: Math.floor(Math.random() * 4), itemType: 5 }; //?
    stageDirection[6][33] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[6][36] = {direction: Math.floor(Math.random() * 4), itemType: 2 };

    for (let i = 0; i < 27; i++) { //스테이지 7 아이템 종류 (2 3:7)
        stageDirection[7].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }
    stageDirection[7][3] = {direction: Math.floor(Math.random() * 4), itemType: 7 }; //bomb
    stageDirection[7][4] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[7][8] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[7][11] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[7][15] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[7][17] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[7][20] = {direction: Math.floor(Math.random() * 4), itemType: 6 }; //
    stageDirection[7][22] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[7][25] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[7][26] = {direction: Math.floor(Math.random() * 4), itemType: 2 };

    for (let i = 0; i < 32; i++) { //스테이지 8 아이템 종류 (3 3:7)
        stageDirection[8].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }
    stageDirection[8][0] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[8][1] = {direction: Math.floor(Math.random() * 4), itemType: 5 }; // ?
    stageDirection[8][2] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[8][3] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[8][7] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[8][9] = {direction: Math.floor(Math.random() * 4), itemType: 4 }; //!
    stageDirection[8][14] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[8][17] = {direction: Math.floor(Math.random() * 4), itemType: 7 }; // bomb
    stageDirection[8][21] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[8][25] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[8][29] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[8][31] = {direction: Math.floor(Math.random() * 4), itemType: 3 };

    for (let i = 0; i < 29; i++) { //스테이지 9 아이템 종류 (3 4:6)
        stageDirection[9].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }
    stageDirection[9][2] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[9][4] = {direction: Math.floor(Math.random() * 4), itemType: 6 }; //
    stageDirection[9][7] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[9][8] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[9][10] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[9][12] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[9][13] = {direction: Math.floor(Math.random() * 5), itemType: 2 }; //?
    stageDirection[9][14] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[9][17] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[9][19] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[9][20] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[9][23] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[9][24] = {direction: Math.floor(Math.random() * 4), itemType: 7 }; //bomb
    stageDirection[9][27] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[9][28] = {direction: Math.floor(Math.random() * 4), itemType: 2 };


    for (let i = 0; i < 36; i++) { //스테이지 10 아이템 종류 (3 6:4)
        stageDirection[10].push({ direction: Math.floor(Math.random() * 4), itemType: 0 });
    }
    stageDirection[10][0] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[10][1] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[10][6] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[10][7] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[10][9] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[10][11] = {direction: Math.floor(Math.random() * 4), itemType: 4 }; //!
    stageDirection[10][12] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[10][13] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[10][17] = {direction: Math.floor(Math.random() * 4), itemType: 5 }; //?
    stageDirection[10][19] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[10][23] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[10][24] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[10][27] = {direction: Math.floor(Math.random() * 4), itemType: 1 };
    stageDirection[10][28] = {direction: Math.floor(Math.random() * 4), itemType: 7 }; // bomb
    stageDirection[10][29] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[10][30] = {direction: Math.floor(Math.random() * 4), itemType: 3 };
    stageDirection[10][32] = {direction: Math.floor(Math.random() * 4), itemType: 2 };
    stageDirection[10][33] = {direction: Math.floor(Math.random() * 4), itemType: 1 };

}

function makeItemPosition() { //방향키와 아이템의 위치를 설정해주는 함수에요.
    stageDirectionPosition = new Array();

    for (let i = 0; i < 11; i++) { // Array 선언중(2차원 배열)
        stageDirectionPosition[i] = new Array();
    }

    for (var i = 0; i < 10; i++) { //테스트 맵의 좌표 PUSH
        stageDirectionPosition[0].push({ x: 0 + 50 * i, y: 100 });
    }

    //stage 1 학교종 24개 솔솔라라솔솔미솔솔미미레솔솔라라솔솔미솔미레미도
    // 아이템 개수 0개, 흰색: 색상 = 9: 1
    stageDirectionPosition[1].push({ x: 270, y: 175 });
    stageDirectionPosition[1].push({ x: 320, y: 150 });
    stageDirectionPosition[1].push({ x: 370, y: 125 }); // 오른쪽 대각 위쪽으로 2개

    for (let i = 0; i < 3; i++) {
        stageDirectionPosition[1].push({ x: 420 + 50 * i, y: 100 });
    }

    for (let i = 0; i < 9; i++) {
        stageDirectionPosition[1].push({ x: 570, y: 100 + 50 * i });
    }

    for (let i = 0; i < 3; i++) {
        stageDirectionPosition[1].push({ x: 520 - 50 * i, y: 500 });
    }
    for (let i = 0; i < 6; i++) {
        stageDirectionPosition[1].push({ x: 420, y: 450 - 50 * i });
    }


    // stage 2 징글벨 24개 미미미미미미미솔도레미파파파파파미미미솔솔파레도
    // 아이템 개수 1개, 흰색: 색상 = 9: 1
    for (let i = 0; i < 6; i++) { // x축으로 6개 +
        stageDirectionPosition[2].push({ x: 370 + 50 * i, y: 100 });
    }
    for (let i = 0; i < 4; i++) { // y축으로 4개 +
        stageDirectionPosition[2].push({ x: 620, y: 150 + 50 * i });
    }
    for (let i = 0; i < 5; i++) { // x축으로 5개 -
        stageDirectionPosition[2].push({ x: 570 - 50 * i, y: 300 });
    }
    for (let i = 0; i < 4; i++) {  // y축으로 4개 +
        stageDirectionPosition[2].push({ x: 370, y: 350 + 50 * i });
    }
    for (let i = 0; i < 5; i++) { // x축으로 5개 +
        stageDirectionPosition[2].push({ x: 420 + 50 * i, y: 500 });
    }

    // stage 3 렛잇고 27 라시도 솔미레 도시라라라라시도 라시도 솔미레 도레미미파미레도
    // 아이템 개수 1개, 흰색: 색상 = 8: 2
    for (let i = 0; i < 6; i++) { // x축으로 6개 +
        stageDirectionPosition[3].push({ x: 370 + 50 * i, y: 100 });
    }
    for (let i = 0; i < 5; i++) { // y축으로 5개 + (25씩 증가하므로 6개 증가한 결과는 총 150 증가)
        stageDirectionPosition[3].push({ x: 620 - 50 * i, y: 150 + 25 * i });
    }
    for (let i = 0; i < 6; i++) { // x축으로 6개 +
        stageDirectionPosition[3].push({ x: 370 + 50 * i, y: 300 });
    }
    for (let i = 0; i < 4; i++) {  // y축으로 4개 +
        stageDirectionPosition[3].push({ x: 620, y: 350 + 50 * i });
    }
    for (let i = 0; i < 6; i++) { // x축으로 6개 -
        stageDirectionPosition[3].push({ x: 570 - 50 * i, y: 500 });
    }


    // stage 4 작은별 35개 도도솔솔라라솔 솔솔파파미미레 솔솔파파미미레 도도솔솔라라솔 파파미미레레도
    // 아이템 개수 1개, 흰색: 색상 = 8: 2
    for (let i = 0; i < 8; i++) { // y축으로 8개 + (25씩 증가하므로 8개 증가한 결과는 총 200 증가)
        stageDirectionPosition[4].push({ x: 620 - 50 * i, y: 50 + 25 * i });
    }
    for (let i = 0; i < 8; i++) { // x축으로 8개 +
        stageDirectionPosition[4].push({ x: 270 + 50 * i, y: 275 });
    }
    for (let i = 0; i < 6; i++) { // y축으로 6개 + (25씩 증가하므로 8개 증가한 결과는 총 150 증가)
        stageDirectionPosition[4].push({ x: 620 - 50 * i, y: 325 + 25 * i });
    }
    for (let i = 0; i < 10; i++) { // x축으로 10개 +
        stageDirectionPosition[4].push({ x: 370 + 50 * i, y: 500 });
    }
    for (let i = 0; i < 3; i++) {  // y축으로 3개 -
        stageDirectionPosition[4].push({ x: 820, y: 450 - 50 * i });
    }


    // stage 5 롤러코스터 36 미 독시라솔 레레렉 시 독시라피 피피솔라솔피미 독시라솔 레레렉시 독시라피 라솔솔피미
    //ㄱ 받힘 : 2옥타브
    //피 : 파#
    // 아이템 개수 2개, 흰색: 색상 = 8: 2
    for (let i = 0; i < 10; i++) { // x축으로 10개 -
        stageDirectionPosition[5].push({ x: 770 - 50 * i, y: 100 });
    }
    for (let i = 0; i < 3; i++) {  // y축으로 3개 +
        stageDirectionPosition[5].push({ x: 320, y: 150 + 50 * i });
    }
    for (let i = 0; i < 10; i++) { // x축으로 10개 +
        stageDirectionPosition[5].push({ x: 320 + 50 * i, y: 300 });
    }
    for (let i = 0; i < 4; i++) {  // y축으로 4개 +
        stageDirectionPosition[5].push({ x: 770, y: 350 + 50 * i });
    }
    for (let i = 0; i < 9; i++) { // x축으로 9개 -
        stageDirectionPosition[5].push({ x: 720 - 50 * i, y: 500 });
    }

    // stage 6 아모르파티 37개 라시도시라솝라라라미미레도라미미미도도도시시시도시라미미미도도도시시시도시
    //솝 : 솔#
    // 아이템 개수 2개, 흰색: 색상 = 7: 3
    for (let i = 0; i < 10; i++) { // x축으로 9개 -
        stageDirectionPosition[6].push({ x: 770 - 50 * i, y: 100 });
    }
    for (let i = 0; i < 7; i++) {  // y축으로 7개 +
        stageDirectionPosition[6].push({ x: 320, y: 150 + 50 * i });
    }
    for (let i = 0; i < 10; i++) { // x축으로 10개 +
        stageDirectionPosition[6].push({ x: 320 + 50 * i, y: 500 });
    }
    for (let i = 0; i < 4; i++) {  // y축으로 4개 -
        stageDirectionPosition[6].push({ x: 770, y: 450 - 50 * i });
    }
    for (let i = 0; i < 6; i++) { // x축으로 6개 -
        stageDirectionPosition[6].push({ x: 720 - 50 * i, y: 300 });
    }

    // stage 7 DNA 27개 레도레라싶도싶라 레레레레 파파솔파라레 레독싶라싶라솔솔파
    //싶 : 시플랫
    // 아이템 개수 2개, 흰색: 색상 = 7: 3
    for (let i = 0; i < 8; i++) { // x축으로 8개 +
        stageDirectionPosition[7].push({ x: 320 + 50 * i, y: 100 });
    }
    for (let i = 0; i < 8; i++) {  // y축으로 8개 +
        stageDirectionPosition[7].push({ x: 670, y: 150 + 50 * i });
    }
    for (let i = 0; i < 3; i++) { // x축으로 3개 -
        stageDirectionPosition[7].push({ x: 620 - 50 * i, y: 500 });
    }
    for (let i = 0; i < 6; i++) {  // y축으로 6개 -
        stageDirectionPosition[7].push({ x: 520, y: 450 - 50 * i });
    }
    for (let i = 0; i < 2; i++) { // x축으로 2개 -
        stageDirectionPosition[7].push({ x: 470 - 50 * i, y: 200 });
    }

    // stage 8 나만 봄 32개 미솔미 솔미솔솔 라시라 솔레도시 피솔라시 피피솔 시시레 라솔솔솔 파솔라라
    // 아이템 개수 3개, 흰색: 색상 = 7: 3
    for (let i = 0; i < 6; i++) { // x축으로 6개 +
        stageDirectionPosition[8].push({ x: 370 + 50 * i, y: 100 });
    }
    for (let i = 0; i < 9; i++) {  // y축으로 9개 +
        stageDirectionPosition[8].push({ x: 670, y: 100 + 50 * i });
    }
    for (let i = 0; i < 6; i++) { // x축으로 6개 -
        stageDirectionPosition[8].push({ x: 620 - 50 * i, y: 500 });
    }
    for (let i = 0; i < 4; i++) {  // y축으로 4개 -
        stageDirectionPosition[8].push({ x: 370, y: 450 - 50 * i });
    }
    for (let i = 0; i < 4; i++) { // x축으로 4개 +
        stageDirectionPosition[8].push({ x: 420 + 50 * i, y: 300 });
    }
    for (let i = 0; i < 3; i++) {  // y축으로 개 + (25)
        stageDirectionPosition[8].push({ x: 570 - 50 * i, y: 250 - 25 * i });
    }

    // stage 9 달라달라 29개 돗돗솔돗솔돗렛솔파미미미미도레미레미파미레도미도미도미도레
    // 아이템 개수 3개, 흰색: 색상 = 7: 3
    for (let i = 0; i < 8; i++) { // x축으로 8개 +
        stageDirectionPosition[9].push({ x: 270 + 50 * i, y: 500 });
    }
    for (let i = 0; i < 8; i++) {  // y축으로 8개 -
        stageDirectionPosition[9].push({ x: 670, y: 500 - 50 * i });
    }
    for (let i = 0; i < 6; i++) { // x축으로 6개 -
        stageDirectionPosition[9].push({ x: 670 - 50 * i, y: 100 });
    }
    for (let i = 0; i < 3; i++) {  // y축으로 3개 +
        stageDirectionPosition[9].push({ x: 420, y: 150 + 50 * i });
    }
    for (let i = 0; i < 4; i++) { // x축으로 4개 +
        stageDirectionPosition[9].push({ x: 420 + 50 * i, y: 300 });
    }

    //stage 10 love is open door 36개
    // 아이템 개수 3개, 흰색: 색상 = 6: 4
    stageDirectionPosition[10].push({ x: 270, y: 125 });
    stageDirectionPosition[10].push({ x: 320, y: 100 });
    for (let i = 0; i < 9; i++) {  // y축으로 9개 +
        stageDirectionPosition[10].push({ x: 370, y: 100 + 50 * i });
    }
    stageDirectionPosition[10].push({ x: 420, y: 500 });
    stageDirectionPosition[10].push({ x: 470, y: 500 });
    for (let i = 0; i < 9; i++) {  // y축으로 9개 -
        stageDirectionPosition[10].push({ x: 520, y: 500 - 50 * i });
    }
    stageDirectionPosition[10].push({ x: 570, y: 100 });
    stageDirectionPosition[10].push({ x: 620, y: 100 });
    stageDirectionPosition[10].push({ x: 670, y: 100 });
    for (let i = 0; i < 9; i++) {  // y축으로 9개 +
        stageDirectionPosition[10].push({ x: 720, y: 100 + 50 * i });
    }
    stageDirectionPosition[10].push({ x: 670, y: 500 });
    stageDirectionPosition[10].push({ x: 620, y: 500 });

}

var mapDirectionNumber; // 맵의 들어가는 화살표들의 개수를 가진 배열

function mapDirectionNumberInit() { // 맵에 들어가는 화살표의 개수들을 저장해 놓는 함수
    mapDirectionNumber = new Array();

    for (let i = 0; i < 11; i++) {
        mapDirectionNumber.push(0);
    }

    mapDirectionNumber[0] = 10;
    mapDirectionNumber[1] = 24;
    mapDirectionNumber[2] = 24;
    mapDirectionNumber[3] = 27;
    mapDirectionNumber[4] = 35;
    mapDirectionNumber[5] = 36;
    mapDirectionNumber[6] = 37;
    mapDirectionNumber[7] = 27;
    mapDirectionNumber[8] = 32;
    mapDirectionNumber[9] = 29;
    mapDirectionNumber[10] = 36;
}

function startMap(stageNum) { //맵을 시작하는 함수
    drawStageBackground();

    for(let i = 0 ; i< mapDirectionNumber[stageNum] ; i++) {
        drawItem(stageDirection[stageNum][i], stageDirectionPosition[stageNum][i]);
    }

    drawLife(lifeCnt);
    drawScore(10,10);
    combo = 0;
    burningCnt = 0;

    bahehekDance(bahehekPosition.x, bahehekPosition.y);
}