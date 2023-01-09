// addEventListener("load",function(){
//   var bt = document.querySelector("h1").nextElementSibling;

//   bt.onclick = function(){
//     // document.querySelector("h1").className="red";
//     // document.querySelector("h1").classList.remove('orange','class');
//     document.querySelector("h1").classList.toggle('toggle');
//     document.querySelector("h1").classList.replace('orange','red');
//   }
//   document.querySelector("h1").classList.add("bg-orange","orange","class");

//   // nextElemntSibling : 다음오는 형제 선택
//   document.querySelector("h1").nextElementSibling.classList.add("red");

//   document.querySelector("h1").nextElementSibling.nextElementSibling.classList.add("orange");

//   document.querySelector("h1").nextElementSibling.nextElementSibling.nextElementSibling.classList.add("bg-orange","white","red");

// });

$(function(){
  // 대상은 똑같고 함수만 다를경우 대상은 한번만 써줘도 된다.
  var bt = $("h1").next().next().next();
  bt.click(function(){
    // hasClass() : 해당요소가 값을 갖고 있는지 확인 후 논리값 반환
    if($(this).hasClass("red")){
      $(this).removeClass("bg-orange red");
    }
    else{
      $(this).addClass("bg-orange white red");
    }
    // class toggle
    $("h1").toggleClass("bg-orange");
  });
  $("h1").addClass("red").removeClass("red");
  $("h1").next().addClass("red");
  $("h1").next().next().addClass("orange");
  $("h1").next().next().next().addClass("bg-orange white red");
});