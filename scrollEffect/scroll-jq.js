/* 1. 스크롤 양 확인 */
const gap = 500;
function js() {
  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("nav");
  const gnb = document.querySelectorAll(".gnb>li");

  let scrollTop;
  window.addEventListener("scroll", function () {
    // scrollTop=window.pageYOffset;
    // scrollTop=document.documentElement.scrollTop;
    scrollTop = window.scrollY; //이게 표준
    animate(scrollTop);
  });

  const animate = (sct) => {
    //sections
    sections.forEach(function (el) {
      let sectiontop = el.offsetTop;
      if (sct > sectiontop - gap) {
        el.classList.add("sectionIn");
      } else {
        el.classList.remove("sectionIn");
      }
    });
    //sticky-nav
    //(조건) ? (참일 때 실행) : (거짓일 때 실행)
    sct >= gap ? nav.classList.add("sticky") : nav.classList.remove("sticky");
    // if (sct >= gap) {
    //     nav.classList.add("sticky");
    // } else {
    //     nav.classList.remove("sticky");
    // }
  };

  //gnb를 클릭하면 해당 섹션으로 부드럽게 이동
  gnb.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      gnb.forEach((obj) => {
        obj.classList.remove("on");
      });
      el.classList.add("on");
    });
  });
}
js();

/* 2. 제이쿼리 */
function jq() {
  const sections = $("section");
  let scrollTop;
  $(window).scroll(function () {
    scrollTop = $(this).scrollTop();
    animate(scrollTop);
  });

  const animate = (sct) => {
    sections.each((idx, el) => {
      /* el이 제이쿼리 객체로 반환되지 않고 일반태그로 반환돼서 매번 반환값을 객체로 변환해야함 
                idx를 .eq 메서드에 넣어서 작성함
            */
      let tg = sections.eq(idx);
      if (sct > tg.offset().top - gap) {
        tg.addClass("sectionIn");
      }
    });
  };
}
// jq();
