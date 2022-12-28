// querySelector : 원하는 Element선택
let heading = document.querySelector('h1');

//$(선택자).css({"color","red",background-color:"skyblue"}) : JQuery사용 시

heading.style.color="red";
// javascript는 복합문자일 경우 camelCase사용
heading.style.backgroundColor="skyblue";

// $("선택자").css({"color":"red","background-color":"pink"});
// $("선택자").html("나는 바보입니다 -에브라-");
heading.onclick=function(){
  heading.style.backgroundColor="pink";
  heading.innerText="나는 바보입니다. -에브라-";
}


// let your_sex = prompt("당신의 성별을 입력해주세요","");
// document.write("당신은 "+your_sex+"이므로 ");
// if(조건){조건이 참일때 실행할 내용}
// if(your_sex == "남자"){
//   document.write("반바지를 입으세요.");
// }
// else if(your_sex == "여자"){
//   document.write("긴바지를 입으세요.");  
// }

// else{
//   document.write("당신은 사람이 아닙니다.")
// }

let current = new Date();
let dayTime = current.getHours();

if(dayTime<=18){
  document.write(`<img src="./images/day.gif" style="display:block;margin:0 auto">`);
}
else if(dayTime>18&&dayTime<=24){
  document.write(`<img src="./images/night.gif" style="display:block;margin:0 auto">`);
}
else{
  document.write(`정확한 시간을 입력해주세요`);
}


// =>


//  dayTime <= 18 ? document.write(`<img src="./images/day.gif" style="display:block;margin:0 auto">`) : document.write(`<img src="./images/night.gif" style="display:block;margin:0 auto;">`);

let num = Number(prompt("당신의 시험점수는?",""));
if(num >= 70){
  document.write(`<h2>합격</h2>`);
}
else{
  document.write(`<h2>불합격</h2>`);
}

num >= 70 ? document.write(`<h2>합격</h2>`) : document.write(`<h2>불합격</h2>`);