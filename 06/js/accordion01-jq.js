let sub = $(".sub");
sub.css("display","none");

$(".gnb>li>a").click(function(){
  let i = $(this).next(".sub").css("display");
  if(i==='none'){
    $(this).next(".sub").slideDown(200);
  }
  else{
    $(this).next(".sub").slideUp(200);
  }
});