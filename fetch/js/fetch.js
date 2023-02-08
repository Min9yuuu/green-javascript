const url = "https://jsonplaceholder.typicode.com/photos";
// let fetched = fetch(url);
// fetched.then((response) => {
//   let data = response.json();
//   data.then((data) => {
//     console.log("data", data);
//   });
// });

/*
  ES6
  fetch
  네트워크 통신 할때 사용
  결과를 promise 객체로 반환
  성공시 then, 실패시 catch
*/

// 통신성공 시
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("data", data);
  });

// 통신실패 시
fetch(url).catch((reason) => {
  console.log("실패", reason);
});
