// 변수생성
const myPop = document.querySelector(".popup"),
  checkbox = document.querySelector("#popup"),
  closeBtn = document.querySelector(".close");

// 방문여부 체크변수
let visited = false;

// 쿠키생성
function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);

  let setCookie = "";
  setCookie = `${name}=${value};`;
  setCookie += `Expires=${date.toUTCString()};`;
  document.cookie = setCookie;
}
// 쿠키삭제
function delCookie(name) {
  let date = new Date();
  date.setDate(date.getDate() - 1);

  let setCookie = "";
  setCookie = `${name}=popup01;`;
  setCookie += `Expires=${date.toUTCString()};`;
  document.cookie = setCookie;
}

// 쿠키체크
function checkCookie(name) {
  let cookies = document.cookie.split(";");
  // 브라우저에 저장된 쿠키들중 name 매개변수와 일치하는 값을 검색하는 for 문
  for (i in cookies) {
    if (cookies[i].indexOf(name) > -1) {
      // 재방문자
      visited = true;
    }
  }
  if (visited) {
    myPop.style.display = "none";
  } else {
    myPop.style.display = "block";
  }
}
closeBtn.addEventListener("click", function () {
  if (checkbox.checked) {
    // 오늘하루안보기, 쿠키생성
    setCookie("M9web", "popup01", 1);
    myPop.style.display = "none";
  } else {
    //팝업 또 띄움
    delCookie("M9web");
    myPop.style.display = "none";
  }
});

// setCookie("M9web", "popup01", 1);
checkCookie("M9web");
