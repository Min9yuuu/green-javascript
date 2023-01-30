const divs = document.querySelectorAll("div");

divs.forEach(function(div){
  div.addEventListener("click",logEvent,{capture:true})
});
// 버블링 : 밑의 요소부터 탐색
// 캡쳐링 : 부모 요소부터 탐색                                                                                                                                                                                             
function logEvent(e){
  // .target : 이벤트가 발생한 요소를 반환한다.
  // .currentTarget : 이벤트가 발생한 요소를 반환한다.
  console.log(e.currentTarget.className);
}