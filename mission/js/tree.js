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

document.write(`<h2>현재 나이는: ${year - birth + 1}살</h2>`);

let even = 0;
let odd = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) 
    even = even + i;
  else
    odd = odd + i;
}
document.write(`<h2>짝수의 합은 :${even}</h2><h2>홀수의 합은 :${odd}</h2>`);


