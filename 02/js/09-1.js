// 다중 조건문
const date = new Date();
const hour = date.getHours();

if(hour<11){
  document.write(`오전입니다.`);
}
else if(hour < 15){
  document.write(`점심입니다.`);
}
else{
  document.write(`오후입니다.`);
}


