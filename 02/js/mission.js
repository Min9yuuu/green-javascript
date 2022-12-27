// 돈 mission

// let moneyA = 3000;
// let moneyB = 6000;
// let moneyC = 3000;
// let limitMoney = 10000;
// let moneySum = moneyA + moneyB + moneyC;

// document.write(`교통비 : ${moneyA}원<br> 식비 : ${moneyB}원 <br> 음료비 : ${moneyC}원 <br>`)
// moneySum > limitMoney ? document.write(`${moneySum-limitMoney}원 초과했어요`) : document.write(`${limitMoney-moneySum}원 남았어요.`);

// 20대 여성 Mission

let age = prompt("당신의 나이는", "");
let gender = ""
age = Number(age);
let twenty = age >= 20 && age < 30;

twenty ? gender = prompt("당신의 성별을 입력하세요","") : document.write(`당신은 20대가 아닙니다.<br>`);
twenty && gender == "여성" ? document.write(`당신은 ${age}살 ${gender}입니다.<h2>합격입니다.</h2>`) : document.write(`당신은 ${age}살 ${gender}입니다.<h2>최종탈락입니다.</h2>`);
