// $(function(){
//   $(window).scroll(function(){
//     let sct = $(this).scrollTop();
//     let arts = $("article");
//     let speed = 200;
//     if(sct>=arts.eq(0).offset().Top){
//       $('.article1').addClass('on');
//     }
//     if(sct>=arts.eq(1).offset().Top - speed){
//       $(".article2").addClass("on");
//     };
//   });
// });

$(function () {
  $(window).scroll(function () {
    let sct = $(this).scrollTop();
    let arts = $("article");
    let speed = 200;
    if (sct >= arts.eq(0).offset().top) {
      $(".article1").addClass("on");
    }
    if (sct >= arts.eq(1).offset().top - speed) {
      $(".article2").addClass("on");
    }
  });
});
