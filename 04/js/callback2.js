const test = function (callbackFunc) {
  for (let i = 0; i < 5; i++) {
    callbackFunc(i);
  }
};

const callFunc = function(callbackFuncPara){
  document.write(`<h2>${callbackFuncPara}번째 안녕하세요</h2>`);
}

// i번쨰 안녕하세요 i<5 까지 반복해서 출력
test(callFunc);
