const scrollContainer = document.querySelector("main");
scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  // scrollLeft => 요소의 수평 스크롤바 위치 반환
  // e.deltaY => delta 휠 방향반환(위 : -100 아래 : 100)
  console.log(scrollContainer.scrollLeft, e.deltaY);
  let amt = (scrollContainer.scrollLeft += e.deltaY);
});
