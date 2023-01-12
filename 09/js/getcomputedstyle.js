const container = document.querySelector(".container");
const child = document.querySelector(".child");

const containerW = container.clientWidth;
console.log(`container의 clientWidth : ${containerW}`);

// getComputedStyle : window객체가 갖고있는 메소드
// get 읽기전용, set 쓰기전용
// getPropertyValue : Property의 Value를 얻어온다.
let childStyle = window.getComputedStyle(child).getPropertyValue('padding-left').split('px',1)[0];//px문자 기준으로 1개 잘라냄 0번째 요소 취득
console.log(childStyle);
// set
const calc = containerW-childStyle;
// child.style.width = `${calc}px`


let pseudo = window.getComputedStyle(child,"before").content;
console.log(pseudo);

// }