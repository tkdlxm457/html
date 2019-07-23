function welcome(callBack){
    console.log(callBack());
}

var arr = [1, 2, 3];
var obj = {key: "value"};
var num = 1;
var bool = true;
var str = "a";

var fn = function() {
    console.log("callBack!!!!!!!!!!!!!!!!!!!!!!!");
}

welcome(1, [1,2,3], {key:'value'}, true);


welcome(fn);
welcome(arr);
welcome(obj);
welcome(num);
welcome(bool);
welcome(str);


/**
 * 1. 모든 객체에는 생명주기(life cycle)이 존재한다.
 * 2. managed language(c, c++), unmanged language(js, java, python) - 가비지 컬렉터
 * 3. 컴파일언어(java, c#), 인터프리터(js)
 * 4. stack: 선입후출, queue: 선입선출
 * 5. 호이스팅(hoisting) 끌어올린다.
 * 6. 함수는 객체다. (자바스크립트에서 함수는 *일급객체* 라 칭한다.)
 */


