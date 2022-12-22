var t1 = "마리는";
var t2 = 6;
var t3 = '살';
var t6 = true;
var t4 = t1+t2+t3+t6;
t4=t1+t3;
console.log(typeof(t4));
alert(t4);
/*
  더하기 연산자로 문자형 데이터와 다른 데이터를 혼합하여 결합하면 전부 문자형으로 변환 
  더하기를 제외한 나머지 연산자는 숫자형이 우선
*/

let a = '3';
let b = 6;
let total = a*b;
console.log(total,typeof(total));