// 1. 함수 1
function funcA() {
  console.log("함수 A 실행완료");
}
// 2. 함수 2
function funcB(test) {
  console.log(test, "함수 B 실행완료");
}
// 3. 변수
const varC = "안녕하세요";

// export로 여러개를 내보낼때는 객체형식으로 내보내야 한다.
export { funcA, funcB, varC };
