/*
  ES8
  async : 
  await : 
*/

function timer(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
/*
  timer(1000)
  .then((time) => {
    document.write("time" + time);
    return timer(time + 1000);
  })
  .then((time) => {
    document.write("time" + time);
    return timer(time + 1000);
  })
  .then((time) => {
    document.write("time" + time);
    return timer(time + 1000);
  }); 
*/

// 순차처리
const run = async () => {
  document.write("시작");
  let time = await timer(1000);
  document.write("time", time);

  time = await timer(1000);
  document.write("time", time);

  time = await timer(1000);
  document.write("time", time);
};

run();

/*
  ajax : 비동기 처리 방식의 통신 방법
  비동기 작업 시 콜백지옥에 빠짐
  콜백내에서의 순서가 정해져서 순차적으로 작업된다.
*/
