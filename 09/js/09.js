addEventListener("load",function(){
  // 가르키는 객체가 window이기 때문에 화살표함수 사용 가능, 가르키는 객체가 window가 아닌경우 arrow function 사용시 this가 가르키는 객체는 window
  addEventListener("scroll",()=>{
    let wsc= parseInt(this.scrollY);
    let articleNum = this.document.querySelectorAll("article");
    articleNum.forEach((el,idx)=>{
      if (wsc > articleNum[idx].offsetTop) {
        articleNum[idx].classList.add("on");
      }
    }); 
  });
});