// for(초기값;조건식;증감식){}

for (let i = 0; i < 5; i++) {
  document.write(`${i}번째 반복하는 문장입니다.<br>`);
}
document.write(`<br>끝<br>`);

for (let i = 6; i >= 1; i--) {
  document.write(`<h${i}> h${i} 재미있는 자바스크립트 </h${i}<br>`);
}

for (let i = 6; i >= 1; i--) {
  document.write("<h" + i + ">h" + i + " 재미있는 자바스크립트 </h" + i + ">");
}

for (let j = 1; j < 10; j++) {
  let i = 5;
  let result = i + "X" + j + "=" + i * j + "<br>";
  document.write(`${result}`);
}

document.write(`<br>`);
for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`*`);
  }
  document.write("<br>");
}

document.write("<br>");

for (let i = 1; i < 15; i++) {
  for (let j = 1; j <= i; j++) {
    if (j == 1) {
      document.write("*");
    } else {
      document.write("**");
    }
  }
  document.write("<br>");
}

document.write(`<br>`);

const birth = prompt("생년월일을 적어주세요", "19xx");
const year = new Date().getFullYear();

console.log(year);
document.write(`${year - birth + 1}살 <br>`);

document.write(`<br>`);

let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
document.write(`짝수의 합은 :${sum}`);
