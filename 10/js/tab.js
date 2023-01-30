// var h1 = document.querySelector(".h1");
// var h2 = document.querySelector(".h2");
// var h3 = document.querySelector(".h3");
// var b1 = document.querySelector(".b1");
// var b2 = document.querySelector(".b2");
// var b3 = document.querySelector(".b3");
// var btn = document.querySelectorAll("li");
// var item = document.querySelectorAll("h3");


// h2.style.display="none";
// h3.style.display="none";

// b1.onclick = function () {
//   h1.style.display = "block";
//   h2.style.display = "none";
//   h3.style.display = "none";
// };
// b2.onclick = function () {
//   h1.style.display = "none";
//   h2.style.display = "block";
//   h3.style.display = "none";
// };
// b3.onclick = function () {
//   h1.style.display = "none";
//   h2.style.display = "none";
//   h3.style.display = "block";
// };


let btn = document.querySelectorAll("ul li");
let panel = document.querySelectorAll("h3");

panel.forEach((el,idx) => {
  unVisible(panel[idx]);
});

visible(panel[0]);

btn.forEach((el,bIdx) => {
  btn[bIdx].addEventListener("click", function () {
    panel.forEach((el,pIdx) => {
      unVisible(panel[pIdx]);
    });
    visible(panel[bIdx]);
  });
});

function visible(obj) {
  obj.style.display = "block";
}
function unVisible(obj) {
  obj.style.display = "none";
}