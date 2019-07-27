/**
 * 동적 테이블 행을 생성한다.
 */
function dynamicMakeRow() {
    // 서버에서 데이터를 가져온다. (가정)
    var tobj = [
        { no: 1, sbj: '안녕하세요1', regDt: '2019-07-21' },
        { no: 2, sbj: '안녕하세요2', regDt: '2019-07-22' },
        { no: 3, sbj: '안녕하세요3', regDt: '2019-07-23' },
        { no: 4, sbj: '안녕하세요4', regDt: '2019-07-24' },
        { no: 5, sbj: '안녕하세요5', regDt: '2019-07-25' },
    ];

    // practice의 dom오브젝트(테이블)를 가져온다.
    var tPracticeObj = document.getElementById('practice');
    var tPracticeObj = $(''). $('.input');
    tPracticeObj.innerHTML
    // tobj의 수 만큼 반복하며 practice의 row를 추가한다.
    for (var idx = 0, loopCnt = tobj.length; idx < loopCnt; idx++) {
        var trObj = tPracticeObj.insertRow(idx + 1);
        var obj = tobj[idx];

        trObj.insertCell(0).innerHTML = obj.no;
        trObj.insertCell(1).innerHTML = obj.sbj;
        trObj.insertCell(2).innerHTML = obj.regDt;
    }
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
 