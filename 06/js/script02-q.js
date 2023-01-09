$(function(){
  $("#one").css("background", "yellow");
  var el1 = $("#one");
  el1.css("color", "red");
  $("li").css("background","pink");
  // 배열중 특정번째만 적용
  var el2=$("li");
  // $()는 jquery문법(jquery 객체로 만든 것)이기 때문에 jquery에 맞는 문법을 사용해야 출력된다.
  el2.eq(1).css("color","blue");
  // jquery 반복문 each(index,값 그대로 반환)
  // $.each(function(array,index,value){});
  el2.each(function(a,b,c){
    console.log(a,b,c);
    el2.eq(a).css("background","blue");
    $(b).css("color","white");
  })
  var el3 = $(".highlight");
  el3.eq(1).css({"background":"pink","margin":"auto",width:500})
});