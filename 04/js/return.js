let total = '';//전역변수 : 값을 전체에 공유하는 변수

let sum = (a,b)=>{
  //let <= 지역변수 : {}(지역)안에서만 존재하는 변수
  // let total = a+b;
  return total = a+b;
};
sum(10,20);
document.write(`${total}<br>`);

/*
  return문의 역활1
    - 값을 함수 밖으로 전달
*/ 

let sum1 = (a,b) => {
  return a+b;
}
document.write(`두수의 합 ${sum1(1,2)}<br>`);

// return은 작성하지 않아도 undefinde를 출력한다.
(function(){
  console.log('hello');
})();