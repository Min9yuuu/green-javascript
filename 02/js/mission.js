// 돈 mission

// let moneyA = 3000;
// let moneyB = 6000;
// let moneyC = 3000;
// let limitMoney = 10000;
// let moneySum = moneyA + moneyB + moneyC;

// document.write(`교통비 : ${moneyA}원<br> 식비 : ${moneyB}원 <br> 음료비 : ${moneyC}원 <br>`)
// moneySum > limitMoney ? document.write(`${moneySum-limitMoney}원 초과했어요`) : document.write(`${limitMoney-moneySum}원 남았어요.`);

// 20대 여성 Mission

// let age = prompt("당신의 나이는", "");
// let gender = ""
// age = Number(age);
// let twenty = age >= 20 && age < 30;

// twenty ? gender = prompt("당신의 성별을 입력하세요","") : document.write(`당신은 20대가 아닙니다.<br>`);
// twenty && gender == "여성" ? document.write(`당신은 ${age}살 ${gender}입니다.<h2>합격입니다.</h2>`) : document.write(`당신은 ${age}살 ${gender}입니다.<h2>최종탈락입니다.</h2>`);


// 점수 Mission

// let kor = Number(prompt("당신의 국어점수는?",""));
// let eng = Number(prompt("당신의 영어점수는?",""));
// let math = Number(prompt("당신의 수학점수는?",""));

// avg = kor + eng + math;
// let result = kor >= 60 && eng >= 60 && math >= 60 && avg/3 >=70;

// result ? document.write(`<h2>합격입니다. 총점은${avg}점 입니다.</h2>`) : document.write(`<h2>탈락입니다. 총점은 ${avg}점 입니다.</h2>`);



// 적정몸무게계산기

// let cm = Number(prompt("당신의 키는 얼마인가요?",""));
// let kg = Number(prompt("당신의 몸무게는 얼마인가요?",""));
// let bmi = Math.floor((cm-100)*0.9);

// let result = bmi >= kg ? `<h2>적정몸무게입니다.</h2>` : `<h2>적정몸무게보다 ${kg - bmi}kg 초과하셨습니다.적정몸무게는 ${bmi}kg입니다.</h2>`;
// document.write(result);

// inch계산기

// let cm = Number(prompt("변환하고 싶은 cm를 입력해주세요",""));
// let inch = Math.floor(cm * 0.393701);

// document.write(`<h2>${cm}cm는 ${inch}inch 입니다.</h2>`);

// 홀수 짝수 switch case

// const number = prompt("숫자를 입력해주세요","숫자")%2;

// switch (number) {
//   case 0:
//     document.write("짝수입니다.");
//     break;
//   case 1:
//     document.write("홀수입니다.");
//     break;
//   default:
//     document.write("숫자가 아닙니다.");
// }

// if(number==0){
//   document.write("짝수입니다.")
// }
// else if(number==1){
//   document.write("홀수입니다.")
// }
// else{
//   document.write("숫자가 아닙니다.")
// }

// let num1 = Number(prompt("숫자1을 입력해주세요","숫자"));
// let num2 = Number(prompt("숫자2를 입력해주세요","숫자"));

// if(num1>num2){
//   document.write(`${num1}이 ${num2}보다 큽니다.`);
// }
// else if(num1<num2){
//   document.write(`${num1}이 ${num2}보다 작습니다.`);
// }
// else if(num1==num2){
//   document.write(`숫자1과 숫자2는 같습니다.`);
// }
// else{
//   document.write("숫자가 아닌 값을 입력했습니다.");
// }

// 3의 배수확인

let userNum = prompt("숫자를 입력하세요");

// if (userNum !== null) {
//   if(userNum === ''){
//     document.write(`값을 입력해주세요`);
//   }
//   else if(userNum==0){
//     document.write(`0을 입력하였습니다.`);
//   }
//   else{
//     if(userNum%3==0){
//       document.write(`3의 배수입니다.`);
//     }
//     else{
//       document.write(`3의 배수가 아닙니다.`);
//     }
//   }

// }
// else {
//   document.write(`입력이 취소되었습니다.`);
// }

if(userNum !== null){
  if(userNum === ''){
    document.write(`값을 입력해주세요`);
  }
  else if(userNum == 0){
    document.write(`0을 입력하였습니다.`);
  }
  else{
    (userNum % 3 == 0) ? document.write(`${userNum}은 3의 배수입니다.`) : document.write(`${userNum}은 3의 배수가 아닙니다.`);
  }
}
else{
  document.write(`입력을 취소했습니다.`)
}