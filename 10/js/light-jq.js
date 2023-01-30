// $(function(){
//   let btn = $(".gallery").find('a'),
//     $target = $("#lightbox-overlay"),
//     $targetImg = $target.find("img");
//   btn.click(function () {
//     let overlayImg = $(this).find('img').attr("data-lightbox");

//     $targetImg.attr('src',overlayImg);
//     $target.addClass('visible');
//   });
//   $target.click(function(){
//     $target.removeClass('visible');
//     $targetImg.attr('src','')
//   });
// });

$(function(){
  let btn = $(".gallery").find('a'),
    $target = $("#lightbox-overlay"),
    $targetImg = $target.find("img");
  btn.click(function () {
    let overlayImg = $(this).find('img').attr("data-lightbox");

    $targetImg.attr('src',overlayImg);
    $target.addClass('visible');
  });
  $target.click(function(){
    $target.removeClass('visible');
    $targetImg.attr('src','');
  });
});