$(function () {
  //변수
  let list = $("#banner");
  const show_num = 3;
  const total = list.find("li").length;
  const li_width = list.find("li").eq(0).width();
  const copyObj = list.find("li").clone().css("background", "gray");
  list.append(copyObj);

  //슬라이드기능 구현시 번호를 저장할 변수를 먼저 만들기.
  let num = 0;
  $(".next").click(function () {
    if (num == total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num++;
    list.stop().animate({ "margin-left": -li_width * num }, 1000);
    return false;
  });
  $(".prev").click(function () {
    if (num == -total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num--;
    list.stop().animate({ "margin-left": li_width * num }, 1000);
    return false;
  });
  function autoPlay() {
    if (num == total) {
      num = 0;
      list.css("margin-left", 0);
    }
    num++;
    list.stop().animate({ "margin-left": -li_width * num }, 1000);
  }

  let auto = setInterval(autoPlay, 1000);
  let toggle = true;
  $(".ctrl").click(function () {
    if (toggle) {
      clearInterval(auto);
      toggle = false;
    } else {
      auto = setInterval(autoPlay, 1000);
      toggle = true;
    }
  });
});
