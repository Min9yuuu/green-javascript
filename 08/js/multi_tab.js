/*
  .tab-wrapper 버튼과 패널의 부모
    .tab-menu 버튼 그룹 > a
    .tab-content 패널그룹 > div
*/
var tabWrapper = $(".tab-wrapper");
tabWrapper.each(function(){
  var currentEl = $(this);
  var menus = currentEl.find(".tab-menu a");
  var panels = currentEl.find(".tab-content>div");

  menus.eq(0).addClass("active");
  panels.eq(0).show();
  
  menus.click(function (e) {
    e.preventDefault();
    let tg = $(this);
    let currentLink = tg.attr("href");

    panels.hide();
    $(currentLink).show();
    
    menus.removeClass("active");
    tg.addClass("active");
  });
});

