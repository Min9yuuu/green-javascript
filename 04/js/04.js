// 익명함수

const mango = function (){
  document.write("예쁜망고<br>");
  document.write("예쁜망고<br>");
  document.write("예쁜망고<br>");
}


mango();

const add = function(a,b){
  let c = a+b;
  document.write(`<h2> ${c}</h2>`)
}
add(5,6);

// 즉시 실행 함수(한번만 실행하고 종료 할 때만 사용)
(function(){
  document.write(`<h2>매개변수 없는 즉시실행 함수`)
}());

(function(x,y){
  document.write(`<h2>${x+y}<br>`)
}(10,20));

// 화살표함수(arrow fuction) 익명함수를 줄여서 쓴다.

// const hi = () => {
//   return "안녕하세요"
// }

// 실행문이 한줄일 경우 중괄호와 return을 지워도 된다.
const hi = () => "안녕하세요";

alert(hi());

// 인자가 있는 화살표 함수


// let sum = (a,b) => {
//   return a+b;
// }

let sum = (a,b) => a+b;

document.write("두 수의 합 : "+sum(10,20));