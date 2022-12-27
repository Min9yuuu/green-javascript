// 비교 연산자 : 조건문과 함께 쓰인다.

let x = 10,y = 20, z = "10";
document.write(`x = ${x}<br> y = ${y}<br> z = "${z}"`);
document.write(`<hr>x > y (크다) : ${x > y}<br>`);
document.write(`x < y (작다) : ${x < y}<br>`);

document.write(`<hr>x >= y (크거나 같다) : ${x >= y}<br>`);
document.write(`x <= y (작거나 같다) : ${x <= y}<br>`);

// 얕은 비교
document.write(`<hr>x == z (x와 z가 같다) : ${x == z}<br>`);
document.write(`x != z (x와 z가 같지않다) : ${x != z}<br>`); // ! : 부정 연산자

// 깊은 비교
document.write(`<hr>x === z (x와 z가 자료형까지 같다.) : ${x === z}<br>`);
document.write(`x !== z (x와 z가 자료형까지 같지않다) : ${x !== z}<br>`);
