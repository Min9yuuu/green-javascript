let gnbLiA = document.querySelector(".gnb>li>a");
let subLiA = document.querySelector(".sub");
gnbLiA.addEventListener("click", function(){
  let classOn = subLiA.classList.contains("on");
  console.log(classOn);
  if(!classOn){
    subLiA.classList.add("on");
  }
  else{
    subLiA.classList.remove("on");
  }
});