$(document).ready(function () {
  $(".bxslider").bxSlider({
    mode: "horizontal",
    speed: 500,
    captions: true,
    controls: true,
    nextText: '<i class="fas fa-wine-glass"></i>',
    prevText: '<i class="fas fa-wine-glass-alt"></i>',
    // auto가 없으면 autControls도 안된다
    auto: true,
    autoControls: true,
    startText: "▶️",
    stopText: "⏸",
  });
  $(".videoSlider").bxSlider({
    video: true,
    onSliderLoad: function (currentIndex) {
      $(".videoSlider div")
        .eq(currentIndex + 1)
        .find("video")
        .get(0)
        .play();
    },
    auto: true,
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
      console.log($slideElement, oldIndex, newIndex);
      $slideElement.siblings().find("video").get(0).pause();
      $slideElement.find("video").get(0).play();
    },
  });
  $(".active").bxSlider({
    auto: true,
    onSliderLoad: function (currnetIndex) {
      $(".active li")
        .eq(currnetIndex + 1)
        .addClass("active");
    },
    onSlideAfter: function ($slideElement) {
      $slideElement.addClass("active").siblings().removeClass("active");
    },
  });
});
