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

unVisible(panel);
visible(panel[0]);

btn.forEach((el,idx) => {
  el.addEventListener("click",function(){
    unVisible(panel);
    visible(panel[idx]);
  });
});

function visible(obj) {
  obj.length == undefined
    ? obj.style.display = "block"
    : obj.forEach((el) => {
        el.style.display = "none";
      });
}

function unVisible(obj) {
  obj.forEach((el) => {
    el.style.display="none"
  });
}