// window.open("popup.html","배너","width=300,height=300,left=50,top=10");

function expandingWindow(website){
  let winWidth = window.screen.availWidth;
  let winHeight = window.screen.availHeight;
  let sizer=window.open("","","left=0,top=0,scrollbar=yes");
  for(let sizeWidth=1; sizeWidth<winWidth;sizeWidth+=100){
    sizer.resizeTo(sizeWidth,500);
  }
  for (let sizeHeight = 1; sizeHeight < winHeight; sizeHeight += 100) {
    sizer.resizeTo(sizeHeight, 500);
  }
  /* 작업표시줄 뺀 화면의 크기를 반환한다.*/
  /*console.log(winWidth,winHeight);
  console.log(`화면크기 알아내기
  window : 창 크기(주소창 포함)
  window.outerWidth : ${window.outerWidth}
  window.innerWidth : ${window.innerWidth}
  screen : 창 안의 화면크기(작업표시줄 제외)
  screen.width : ${screen.width}
  screen.availWidth : ${screen.availWidth}
  `)*/
}