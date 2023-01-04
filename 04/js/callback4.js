// forEach : 배열의 요소를 콜백함수를 활용하여 반복순환

const arr = [112, 564, 64, 18, 6, 84, 67, 468, 4];
arr.forEach(function (value, index, array) {
  console.log(value, index, array);
});

//filter : 원하는 값만 골라보기.
// let words = ["스폰지밥", "뚱이", "집게사장", "징징이"];
// const result = words.filter(function (value, index, array) {
//   return value.length >= 4; // 글자길이가 4 이상이면 리턴한다. 뚱이와 징징이는 리턴하지 않는다.
// });

//alert(result);

//map : 배열을 새 값과 연결해서 새 배열로 저장.
// words = words.map(function (value, index) {
//   return value + "💚💜🤎";
// });
// document.write(words[0]);

// .filter를 사용하여 arr배열에서 짝수만 출력해보세요.

const even = arr.filter(function(a){
  return a%2==0;
});
document.write(even);