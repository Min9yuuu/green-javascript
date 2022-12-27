// alert, confirm, prompt

let num1 = 30;
let num2 = 20;
// alert(경고창에 띄어준다.)
num1 >= num2 ? alert('true') : alert('false');

// confirm : alert창으로 true와 false값을 받게된다.
let result = confirm("자바스크립트를 좋아하세요?");
console.log(result);
let theText = result ? "yes" : "no";
document.write(`${theText}`);

// prompt : alert창으로 text값을 받는다.
// prompt 합수로 반환되는 값은 string(문자형)이므로 계산식을 사용해야 할 경우 자료형을 변환해야 한다.
let input = prompt("생년월일을 입력하세요","");
document.write(input);

