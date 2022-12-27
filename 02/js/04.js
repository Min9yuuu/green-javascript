let x = 1;
// x++, ++x : x = x + 1

//실행 후 할당 (후위 연산자)
document.write(x++); // 1을 출력 후 1을 더한다. 
document.write("<br>");
document.write(x);
document.write("<br>");
document.write(x++); // 2를 출력 후 1을 더한다.
document.write("<br>");
document.write(x++); // 3을 출력 후 1을 더한다.
document.write("<br>");
document.write(x++); // 4를 출력 후 1을 더한다.
document.write("<br>");
document.write(x); // 5출력
document.write("<br>");

//할당 후 실행 (전위 연산자)
x = 1;
document.write("<hr>", ++x); // 1을 더한 후 출력, 2
document.write("<br>", ++x); // 1을 더한 후 출력, 3
document.write("<br>", ++x); // 1을 더한 후 출력, 4
document.write("<br>", ++x); // 1을 더한 후 출력, 5

// y--, --y : y = y - 1

let y = 1;
document.write(`<h2>후위 연산자 : ${y--}<br>후위 연산자 출력 후 할당된 값 : ${y}<br>전위 연산자 : ${--y}</h2>`); // 1을 출력 후 1을 뺀다.
