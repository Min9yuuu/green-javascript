// 콜백함수 다른함수의 argument(인자)로 사용되는 함수

const test = function (a) {
  // console.log(a);
  a();
};
const func = function () {
  document.write("<h2>자바스크립트에서 매개변수를 함수로 전달받는 것 = > 콜백함수</h2>");
};
test(func);

const test2 = function (b) {
  b(10);
  for (let i = 1; i <= 10; i++) {
    b(i);
  }
};
const func2 = function (callbackFunPara) {
  document.write(`${callbackFunPara}번째<br>`);
};

test2(func2);
