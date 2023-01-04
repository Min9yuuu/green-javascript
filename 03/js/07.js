for(let i = 0;true;i++){
  // 무한반복
  alert(i+"번째 반복입니다.");
  const isContinue = confirm("계속하시겠습니까?");
  if(!isContinue){
    break;
  }
}
alert("첫번째 반복문 종료");

alert("두번째 반복문 시작");

for (let i = 0; true; i++) {
  // 무한반복
  alert(i + "번째 반복입니다.");
  const isContinue = confirm("계속하시겠습니까?");
  if (!isContinue) {
    continue;
  }
}