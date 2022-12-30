// 배열 삭제  - array.pop() : 배열의 마지막 요소 삭제
//          - array.shift() : 배열의 첫번째 요소 삭제
//          - array.splice("시작위치", "제거건수", ["요소1", "요소2" ... ]) : 요소를 제거후 해당위치에 요소 추가 가능
const item = ["사과", "배", "한라봉", "바나나"];
document.write(`원래 배열: ${item} <br>`);
item.splice(2, 2);
document.write(`바뀐 배열: ${item} <br>`);
item.splice(1, 0, ["오렌지", "딸기"]);
document.write(`현재 배열: ${item}`);

const animals = ["강아지", "고양이", "보노보노", "곰"];
document.write(`<p>동물은 ${animals}입니다.`);

const index = animals.indexOf("보노보노"); // indexOf : 찾고싶은 값과 같은것을 골라서 인덱스 번호로 반환해준다. 찾고싶은 값이 배열에 없으면 -1을 반환한다.

animals.splice(index, 1);
document.write(`<p>진짜 동물은 ${animals}입니다.`);

animals.splice(animals.length, 0, "스폰지밥");
document.write(`<p>동물은 ${animals}입니다.`);
