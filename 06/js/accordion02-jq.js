let gnbLiA = $(".gnb>li>a");
let aH = $('.sub>li>a').outerHeight()-4;
let check=false;

  gnbLiA.click(function () {
      $(".sub").css("height","0px");
      $(this)
        .next()
        .css("height", aH * 4 + "px");
    function toggle(){
      let classOn = $(".sub").hasClass("on");
    if (!classOn) {
      $(this).next().addClass("on");
    } else {
      $(this).next().removeClass("on");
    }
    }
});

