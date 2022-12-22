// 데이터형 활용
//문자형( String )
// let x;
// let y;
let x , y , z;
x= 7 + 5;
// 문자형과 숫자형이 더할경우 문자형으로 출력.
y = "7" + 5;
document.write(x+y);
document.write("<br>");
document.write(x);
document.write("<br>");
document.write(y);// 변수 y 
document.write('<br>');
document.write('y'); //문자 y 

// javascript에서는 태그도 문자형
const wakeup="안녕";

document.write('<h1 style="color:green">',wakeup,'</h1>');

// 템플릿 리터럴
document.write(`<h1 style="color:green">${wakeup}</h1>`);