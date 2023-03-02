/* 1. 스크롤 양 확인 */
const gap = 500;
function js() {
  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("nav");
  const gnb = document.querySelectorAll(".gnb>li");
  const sideNav = document.querySelectorAll(".sideNav > li");

  let scrollTop;
  window.addEventListener("scroll", function () {
    scrollTop = window.scrollY; //이게 표준
    animate(scrollTop);
  });

  const animate = (sct) => {
    //sections
    sections.forEach(function (el, idx) {
      let sectiontop = el.offsetTop;
      if (sct > sectiontop - gap) {
        gsap.to(el, { backgroundColor: "#8d3dae" });
        cOnOff(gnb, gnb[idx]);
        cOnOff(sideNav, sideNav[idx]);
      } else {
        el.classList.remove("sectionIn");
      }
    });
    //sticky-nav
    // nav의 높이만큼 스크롤이 내려오면 stickyx`
    sct >= nav.clientHeight ? nav.classList.add("sticky") : nav.classList.remove("sticky");
  };

  //gnb를 클릭하면 해당 섹션으로 부드럽게 이동
  gnb.forEach((el) => {
    el.addEventListener("click", function (e) {
      smooth(e, el);
      cOnOff(gnb, el);
    });
  });

  sideNav.forEach((el) => {
    el.addEventListener("click", function (e) {
      smooth(e, el);
      cOnOff(sideNav, el);
    });
  });
}
function cOnOff(obj, el) {
  obj.forEach((el) => {
    el.classList.remove("on");
  });
  el.classList.add("on");
}
function smooth(e, el) {
  e.preventDefault();
  document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
}
js();
