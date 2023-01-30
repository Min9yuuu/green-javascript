$(function(){
  $.ajax({
    url: "news.php",
    dataType: "xml",
    success: function (data) {
      var $items = $(data).find("item");
      // console.log($item);
      if ($items.length > 0) {
        $items = $items.slice(0, 10); //slice(시작 index번호, index 번호부터의 갯수);
        var $ul = $("<ul/>");
        //$.each($items(function(){}))
        $items.each(function (i, o) {
          var $title = $(o).find("title").text();
          var $link = $(o).find("link").text();
          var $aTAG = $('<a/>');
          $aTAG.attr({'href':$link,'target':"_blank"});
          $aTAG.text($title);
          var $li = $("<li/>");
          $li.append($aTAG);
          $ul.append($li);
        });
        $(".wrap").append($ul);
      }
    },
  });
})