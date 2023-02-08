// let a = 0;
// function timer(time) {
//   setTimeout(() => {
//     a = a + 1;
//     document.write(` ${a}번 실행`);
//     timer(timer(1000));
//   }, time);
// }
// timer(1000);

let myProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("성공");
  }, 1000);
});

myProm.then((msg) => {
  document.write(`1초 후 실행 : `, msg);
});
