$(function(){
  const visual = $("#brandVisual>ul>li"),
    btn = $("#buttonList>li");
    
    let current = 0;//current: 현재
    let id; // setIntervalID
    const speed = 3000;

    // 버튼클릭함수
    btn.click(function(){
      // jQuery 문법에서 this를 그냥 쓸경우 jQuery함수를 사용 못한다.(this는 javaScript문법)
      // jQuery 문법에서 this를 사용하고 싶으면 $(this)를 사용, javaScript문법만 사용하는경우는 this로 사용해도 된다.
      let btnIdx = $(this).index();
      /* 
        선택된 것만 적용하기
          1. 다 지우고 선택된 것만 적용하기
      */
      btn.removeClass("on");
      $(this).addClass("on");
      move(btnIdx);
    });

    // 시간마다 실행
    timer();
    function timer(){
      id = setInterval(function(){
        let next = current+1;
        if(next==visual.length){
          next=0;
        }
        console.log(next);
        btn.eq(next).trigger("click");
      },speed);
    }
        

    // 이동
    function move(btnIdx){
      if(btnIdx==current)return;
      console.log("무브" + current);
      let cu=visual.eq(current);
      let ne = visual.eq(btnIdx);
      cu.css("left","0").stop().animate({left:"-100%"});
      ne.css("left","100%").stop().animate({left:"0%"});
      current=btnIdx;
    }

    $("#brandVisual,#buttonList").mouseenter(function () {
      clearInterval(id);
    });
    $("#brandVisual,#buttonList").mouseleave(function () {
      timer();
    });

});//jQuery