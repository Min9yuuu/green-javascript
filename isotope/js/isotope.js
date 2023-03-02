const grid = document.querySelector("#container");
const iso = new Isotope(grid, {
  // 조회할 데이터 요소
  itemSelector: ".element",
  layoutMode: "fitRows",
});
const opt = document.querySelector("#option");
opt.addEventListener("click", function (e) {
  let key = e.target.parentNode.getAttribute("data-isotope-key");
  let value = e.target.getAttribute("data-isotope-value");
  console.log(value);
  // 클릭시 필링할 문자열을 취득
  iso.options[key] = value;
  // 42번에서 취득한 조건에 맞는 요소만 필터링
  iso.arrange();
});
