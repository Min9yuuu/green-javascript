let sub = document.querySelector(".sub");

sub.style.transition="height .3s";
sub.style.overflow="hidden";
sub.style.height="0px";



document.querySelector(".gnb>li>a").addEventListener(
  "click",function(){
    let i = this.nextElementSibling.style.height;
    // 단위는 정확히 작성할 것
    if (i === "0px") {
      this.nextElementSibling.style.height="100px"
    }
    else {
      this.nextElementSibling.style.height="0px";
    }
  }
);


