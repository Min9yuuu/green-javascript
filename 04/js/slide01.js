$(function(){
  const visual = $("#brandVisual>ul>li"),
    btn = $("#buttonList>li");
    
    let current = 0;//current: 현재
    let id; // setIntervalID
    const speed = 3000;
    let btnIdx = 0; // 클릭한 페이저(페이지번호를 갖는)버튼의 인덱스
    // 버튼클릭함수
    btn.click(function(){
      // jQuery 문법에서 this를 그냥 쓸경우 jQuery함수를 사용 못한다.(this는 javaScript문법)
      btnIdx = $(this).index();
      // jQuery 문법에서 this를 사용하고 싶으면 $(this)를 사용, javaScript문법만 사용하는경우는 this로 사용해도 된다.
      /* 
        선택된 것만 적용하기
          1. 다 지우고 선택된 것만 적용하기
      */
      btn.removeClass("on");
      $(this).addClass("on");
      move();
    });

    // 시간마다 실행
    timer();
    function timer(){
      id = setInterval(function(){
        let next = current+1; 
        if(next==visual.length){
          next=0;
        }
        btn.eq(next).trigger("click");
      },speed);
    }
        

    // 이동
    function move(){
      if(btnIdx==current)return;
      let cu=visual.eq(current);
      let ne = visual.eq(btnIdx);
      cu.css("left","0").stop().animate({left:"-100%"});
      ne.css("left","100%").stop().animate({left:"0%"});
      current=btnIdx;
    }

    //clear
    clearAuto();
    function clearAuto(){
      $("#brandVisual,#buttonList,.controls").mouseenter(function () {
        clearInterval(id);
      });
      $("#brandVisual,#buttonList.controls").mouseleave(function () {
        timer();
      });
    }

    // 좌우 컨트롤 버튼
    controls();
    function controls(){
      $('.controls .next').click(function(){
        btnIdx = btnIdx+1;
        if(btnIdx == visual.length){
          btnIdx = 0;
        }
        btn.removeClass("on");
        btn.eq(btnIdx).addClass("on");
        let cu = visual.eq(current);
        let ne = visual.eq(btnIdx);
        cu.css("left", "0").stop().animate({ left: "-100%" });
        ne.css("left", "100%").stop().animate({ left: "0%" });
        current = btnIdx;
      });

      $(".controls .prev").click(function () {
        btnIdx = btnIdx - 1;
        if (btnIdx < 0) {
          btnIdx = visual.length-1;
        }
        btn.removeClass("on");
        btn.eq(btnIdx).addClass("on");
        let cu = visual.eq(current);
        let pr = visual.eq(btnIdx);
        cu.css("left", "0").stop().animate({ left: "100%" });
        pr.css("left", "-100%").stop().animate({ left: "0%" });
        current = btnIdx;
      });
    }
});//jQuery