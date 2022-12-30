$(function(){
  const visual = $("#brandVisual>ul>li"),
    btn = $("#brandVisual>ul>li");
    
    let current = 0;//current: 현재
    let id; // setIntervalID
    const speed = 3000;

    // 버튼클릭함수
    btn.click(function(){

    });
    // 시간마다 실행
    timer();
    function timer(){
      setInterval(function(){
        let next = current+1;
        if(next==visual.length-1){
          next=0;
        }
        move(next);
      },speed);
    }
    // 이동
    function move(next){
      console.log("next" + next);
      let cu=visual.eq(current);
      let ne = visual.eq(next);
      cu.css("left","0").stop().animate({left:"-100%"});
      ne.stop().animate({left:"0%"});
    }

});//jQuery