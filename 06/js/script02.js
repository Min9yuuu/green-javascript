let el1 = document.getElementById("one");
el1.style.background="yellow";

let el2 = document.getElementsByTagName("li");

// for(let i = 0; i<el2.length;i++){
  
// }

for(let i in el2){
  if (i <= 2) {
    el2[i].style.backgroundImage = "url(http://qwerew.cafe24.com/example/javascript/chicken.png)";
    el2[i].style.backgroundSize = "20px";
    el2[i].style.backgroundRepeat = "no-repeat";
    el2[i].style.listStyle = "none";
    el2[i].style.paddingLeft = "24px";
  }
}
// for(let j of el2){
// }

let el4 = document.getElementsByClassName("highlight");
// cssText 속성 여러개 => 추가 X, 내용이 전부 수정됨
el4[1].style.cssText="width:500px; margin:auto;";

// queryselector
let el5 = document.querySelector(".highlight");

let el6 = document.querySelectorAll(".highlight");
el6.forEach((a,b,c)=>{
  el6[b].style.backgroundColor="skyblue";

  if(b==el6.length-1){
    el6[b].style.color = "red";
  }
  else if(b==1){
    el6[b].style.backgroundColor="pink";
  }
});


