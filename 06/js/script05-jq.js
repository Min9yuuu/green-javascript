$(function(){
  const textZone = $("#textZone");
  const btn1 = $("#btn1");
  const btn2 = $("#btn2");
  const btn3 = $("#btn3");

  btn1.click(function () {
    textZone.css("color", "blue");
  });

  btn2
    .mouseover(function () {
      textZone.css("background-color", "yellow");
    })
    .focus(function () {
      textZone.css("background-color", "yellow");
    });

  btn2
    .mouseleave(function () {
      textZone.css("background-color", "white");
    })
    .blur(function () {
      textZone.css("background-color", "white");
    });

  btn3
    .mouseover(function () {
      textZone.css({ color: "green", "background-color": "red" });
    })
    .focus(function () {
      textZone.css({ color: "green", "background-color": "red" });
    });

  // 다른 이벤트에 같은 실행문 적용;
  // btn3.on("mouseover focus",function(){
  //   textZone.css({ color: "green", "background-color": "red" });
  // });

  /* 이벤트도 다르고 실행문도 다를때 on()안에 이벤트를 
  객체화 시켜서 key:value를 이벤트 : 메소드 형태로 만든다.
  */
  btn3.on(
    {
      "mouseover focus":function(){
      textZone.css({ color: "green", "background-color": "red" });
      },
      "click":function(){
        alert("click");
        textZone.css("margin-left","80px");
      }
    }
    );
  $("#listWrap").hover(
    function(){
      $(".list1").css("display","block");
      $(this).css("background-color","aqua");
    },
    function(){
      $(".list1").css("display","none");
      $(this).css("background-color", "red");
    }
  );
});