// 함수는 기능, 할일

/*
  1. 명명함수
  argument의 값을 parameter가 받아들여 함수의 실행문에 전달한다.
  function 함수이름(//매개변수(parameter)){
    //실행문
  }
  함수이름(//인자(argument)  <= 호출
*/
const text = prompt("텍스트를 입력해주세요");

function h2(a,b){
  for(let i = 1; i<=4;i++){
    document.write(`<h2>${a} ${b} ${i}`);
  }
}
h2(text,"회원님");