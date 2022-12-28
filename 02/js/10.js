// 10 선택문 switch case
// 조건 case:

const day = prompt("요일을 선택해주세요","");
document.write(`${day}요일에는<br>`);

switch (day) {
  case "월":
    document.write("오전 10시 수업시작");
    break;
  case "화":
    document.write("오후 2시 수업시작");
    break;
  case "수":
    document.write("오후 4시 수업시작");
    break;
  case "목":
    document.write("오전 10시 수업시작");
    break;
  case "금":
    document.write("오전 11시 수업시작");
    break;
  case "토":
    document.write("쉬는날");
    break;
  case "일":
    document.write("월요일을 준비");
    break;
  default :
    document.write("정확한 요일을 선택해주세요.")
}