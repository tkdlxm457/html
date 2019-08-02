// var x = 1;
// var c = 'a';

// var d = function x (a, b) {
//     return a + b;
// }

// var z = {
//     a: 1,
//     b: function () {}
// }

// d(1, 2);

// var xmlHttpObj = {
//     onreadystatechange : function () {
//         if (this.readyState == 4 && this.status === 200) {
//             tObj = this.response;
//             console.log(tObj);
//         }
//     },
//     onChange() {
//         onreadystatechange();
//     }
// }

/**
 * 동적 테이블 행을 생성한다.
 */
function dynamicMakeRow() {
    var tObj = [];


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            tObj = JSON.parse(this.response).res;
            console.log(tObj);

            // practice의 dom오브젝트(테이블)를 가져온다.
            var tPracticeObj = document.getElementById('practice');
            tPracticeObj.innerHTML
            // tobj의 수 만큼 반복하며 practice의 row를 추가한다.
            for (var idx = 0, loopCnt = tObj.length; idx < loopCnt; idx++) {
                var trObj = tPracticeObj.insertRow(idx + 1);
                var obj = tObj[idx];

                trObj.insertCell(0).innerHTML = obj.no;
                trObj.insertCell(1).innerHTML = obj.sbj;
                trObj.insertCell(2).innerHTML = obj.regDt;
            }
        }
    };
    xhttp.open("GET", "xx.json");
    xhttp.send();

    // 1. json타입 테스트
    // 2. ajax를 통한 txt파일 불러오기
    // 3. 불러온 파일로 변수에 할당하기

    /* var xmlHttpObj = new XMLHttpRequest();
     xmlHttpObj.open("GET", "json.txt");
     xmlHttpObj.onreadychstateange = function () {
         debugger
         if (xmlHttpObj.readyState == 4 && xmlHttpObj.status === 200) {
             var _tj = xmlHttpObj.response;
             var tj = JSON.parse(_tj);
             
         }
 
     }
 
     
     xmlHttpObj.send();
 };
 */





};

// practice를 가져와 하단ㅂ터 추가 한다
function add_row() {
    var tbDomObj = document.getElementById("practice");
    var row = tbDomObj.insertRow(tbDomObj.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "번호";
    cell2.innerHTML = "제목";
    cell3.innerHTML = "작성일";
}

// practice를 가져와 하단부터 삭제한다.
function delete_row() {
    var tbDomObj = document.getElementById('practice');
    if (tbDomObj.rows.length <= 1) {
        return;
    }

    tbDomObj.deleteRow(tbDomObj.rows.length - 1);
};
