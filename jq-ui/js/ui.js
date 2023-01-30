$(function(){
  $("#departure").datepicker({
    dateFormat: "yy-mm-dd", //input value 표기방법
    showOtherMonths: true,
    showWeek: true,
    changeYear: true,
    changeMonth: false,
    showOn: "button",
    buttonImage: "https://cdn-icons-png.flaticon.com/512/45/45663.png",
    buttonImageOnly: true,
    yearSuffix: "년",
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토", "일"],
    showAnim:"bounce"
  });
  $("#airport").autocomplete({
    source:airports
  });
  $("#meal").selectmenu({
    width:400
  });
  $("#bags").css('display','block').buttonset();
  $("#seatTypes").buttonset();
  $("#next").button({
    icons:{secondary:"ui-icon-circle-arrow-e"}
  });

  $("#telme").dialog({
    autoOpen:false,
    width:500,
  });
  $("#telmeLink").click(function(e){
    e.preventDefault();
    $("#telme").dialog("opne",$("p[title]").tooltip());
  });
});