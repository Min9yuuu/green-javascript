// 호이스팅 : 가장위로 끌어 올려져 선언이 된다.
let x = 10; //변수 x를 초기화 한다.

function display(){
  console.log("x is " + x);
  console.log("y is " + y);//undefined호출 : 변수 호이스팅 발생
  var y = 10;
}

var y = 20;
display();
console.log(y);

exam();//B호출 선언적함수도 호이스팅 발생

var exam1 = function(){
  alert("A");
}

function exam(){
  alert("B");
}
exam();//A호출
/*
  var 과 선언적 함수는 호이스팅 발생
  익명함수는 호이스팅 발생
*/