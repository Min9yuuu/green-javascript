// 배열의 수정

// 배열 추가 - array.push() : ()안의 내용을 배열의 맨끝에 추가
//         - array.unshift() : ()안의 내용을 배열의 맨앞에 추가
//         - array.splice("위치", 0, ["요소1", "요소2" ... ]) : 원하는 위치에 요소를 추가 가능

const toDos = ["우유구매", "업무메일확인", "필라테스수업"];
toDos.push("망고산책");
toDos.push("망고목욕");
document.write(`<h2>오늘 스케줄 : ${toDos} </h2>`);

// 배열추가 - index 번호를 활용해서 추가, length를 활용한 추가
const basket = ["소세지", "소주", "햇반"];
basket[basket.length] = "삽겹살";
basket[basket.length] = "불고기";
basket[basket.length] = "LA갈비";
basket[basket.length] = "한우부채살";
basket[10] = "귤";
document.write(`<h2>저녁식단 : ${basket} </h2>`);
