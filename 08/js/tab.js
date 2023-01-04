/*
  .tab-menu 버튼 그룹 > a
  .tab-content 패널그룹 > div
*/

var menus = $(".tab-menu a");
var panels = $(".tab-content>div");

// 브라우저 이벤트 종류 => event handler를 연결하면 -> event object(이벤트가 발생한 대상의 정보를 가진 객체)를 불러올 수 있다.

menus.eq(0).addClass('active');
panels.eq(0).show();

menus.click(function(e){
  e.preventDefault();
  let tg =$(this);
  let currentLink = tg.attr("href");

  panels.hide();
  $(currentLink).show();

  menus.removeClass("active");
  tg.addClass("active");
});

