const textZone = document.querySelector("#textZone");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
let color = true;
btn1.onclick = ()=>{
  if(color){
    textZone.style.color = "blue";
    textZone.classList.add("blue");
    color = false;
  }
  else{
    textZone.style.color = "black";
    textZone.classList.remove("blue");
    color = true;
  }
};

btn2.onmouseover = () =>{
  textZone.style.backgroundColor = "yellow";
}
btn2.onmouseleave = () =>{
  textZone.style.backgroundColor = "white";
}

btn2.onfocus = () => {
  textZone.style.backgroundColor = "yellow";
}
btn2.onblur = () => {
  textZone.style.backgroundColor = "white";
}
function textZone4(){
  textZone.style.color = "green";
  textZone.style.fontWeight = "bold";
  textZone.style.fontSize = "2em";
}function textZone5() {
  textZone.style.color = "black";
  textZone.style.fontWeight = "normal";
  textZone.style.fontSize = "1em";
}
btn3.onmouseover = textZone4;
btn3.onfocus = textZone4;

// property listener로 등록시 동일 이벤트 덮어 씌워짐
// btn3.onclick= ()=>{
//   alert("click");
// };
// btn3.onclick= ()=>{
//   textZone.style.marginLeft="80px";
// };

// 동일 이벤트 덮어씌워짐 제거시 addEventListener로 해야한다.
btn3.addEventListener("click",function(){
  alert("click");
});
btn3.addEventListener("click", function () {
  textZone.style.marginLeft = "80px";
});
const listWrap = document.querySelector("#listWrap");
const list1 = document.querySelector(".list1");

listWrap.addEventListener("mouseover",function(){
  list1.style.display="block";
}
  );
listWrap.addEventListener("mouseleave",function(){
  list1.style.display="none";
});


let hover = document.querySelector(".hover");
hover.addEventListener("mouseover",function(){
  this.style.color="aqua";
  }
);
hover.addEventListener("mouseleave",function(){
  this.style.color="red";
}
);
// eventListener를 화살표 함수로 작성시 this는 자신이 아닌 window를 가리킨다.
hover.addEventListener("mouseover", () => {
  console.log(this);
});