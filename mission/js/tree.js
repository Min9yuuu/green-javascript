for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(`*`);
  }
  document.write("<br>");
}

document.write("<br>");
for(let i = 0; i < 5; i++)  {
  for(let j = 4; j > i; j--)  {
    document.write('&nbsp');
  }
  for(let j = 0; j <= i; j++) { 
    document.write('*');
  }
  for(let j = 1; j<=i;j++){
    document.write('*');
  }
  document.write('<br>');
}
for(let i = 0; i<5; i++){
  for(let j = 0; j<=i;j++){
    document.write('&nbsp');
  }
  for(let j = 4; j > i; j--){
    document.write("*");
  }
  for(let j = 3; j > i; j--){
    document.write("*");
  }
  document.write("<br>");
}

document.write("<br>");


for (let i = 1; i < 15; i++) {
  for (let j = 1; j <= i; j++) {
    if (j === 1) {
      document.write("*");
    } else {
      document.write("**");
    }
  }
  document.write("<br>");
}
document.write(`<br>`);


const birth = prompt("태어난 년도를 적어주세요", "xxxx");
const year = new Date().getFullYear();

document.write(`<h2>현재 나이는: ${year - birth + 1}살</h2>`);

let even = 0;
let odd = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) 
    {
      even += i;
    }
  else
    {
      odd += i;
    }
}
document.write(`<h2>짝수의 합은 :${even}</h2><h2>홀수의 합은 :${odd}</h2>`);


