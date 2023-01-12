$(function(){
  $(window).mousemove(function(e){
    const pointer = {
      x:e.clientX,
      y:e.clientY,
    }
    $("#m1").css({left:pointer.x/3,top:pointer.y/2});
    $("#cursor").css({ left: pointer.x, top: pointer.y, "margin-left": -pointer.x / 2, "margin-top": -pointer.y / 2 });
  });
})