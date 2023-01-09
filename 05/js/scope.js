/*
  1. 전역변수에 값을 담는다.
  2. console을 옮긴다.
  3. 리턴문에 sum을 전달.
  4.다른 함수에 인자로 전달.
*/



// scope
let sum="전역"; //전역변수 선언
function addNumber(){
  let sum="지역"; // 지역변수이므로 함수 블록안에 갖혀서 실행되지 않음
  console.log(sum);//지역변수 sum 호출 
}

addNumber();
console.log(sum); //전역변수 sum 호출
// sum은 addNumber 유효범위{scope}에서 호출되었기 때문에 호출되지 않는다.