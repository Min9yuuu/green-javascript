const gnb = document.querySelectorAll(".gnb>li");
const gnbAnc = document.querySelectorAll(".gnb>li>a");
const sideNav = document.querySelectorAll(".sideNav>li");
const sideNavAnc = document.querySelectorAll(".sideNav>li>a");
const sections = document.querySelectorAll(".section");
let winH = window.innerHeight;
let winSct;
const gap = 400;
//스크롤이벤트바인딩
window.addEventListener("scroll", function () {
  winSct = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
  sectionAni(winSct);
  sideNavAni();
});

//gnbAnc 클릭이벤트바인딩
gnbAnc.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(el.getAttribute("href")).scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
//sideNavAnc 클릭이벤트바인딩
sideNavAnc.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(el.getAttribute("href")).scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

//sideNav에 애니메이트효과
function sideNavAni() {
  document.querySelector(".sideNav").style.top = "-20%";
  setTimeout(() => {
    document.querySelector(".sideNav").style.top = parseInt((winH - document.querySelector(".sideNav").clientHeight) / 2) + "px";
  }, 400);
}

//sections에 스크롤양 전달받는 함수

const sectionAni = (winSct) => {
  winSct > sections[0].offsetTop ? document.querySelector("nav").classList.add("sticky") : document.querySelector("nav").classList.remove("sticky");
  sections.forEach((el, i) => {
    let sct = el.offsetTop;
    const delay = el.dataset.delay;
    if (winSct > sct - gap) {
      // section에 delay가 없는 경우
      el.classList.remove("sectionIn");
      if (delay == undefined) {
        if (el.hasChildNodes(".parallax")) {
          parallaxAni();
        } else {
          el.classList.add("sectionIn");
        }
      } else {
        setTimeout(() => {
          el.classList.add("sectionIn");
        }, delay);
      }
      gnb.forEach((el) => {
        el.classList.remove("on");
      });
      gnb[i].classList.add("on");
      sideNav.forEach((el) => {
        el.classList.remove("on");
      });
      sideNav[i].classList.add("on");
    }
  });
};
function parallaxAni() {
  const parallax = document.querySelectorAll(".parallax>.pbox");
  parallax.forEach((el) => {
    const delay = el.dataset.delay;
    el.classList.remove("sectionIn");
    setTimeout(() => {
      el.classList.add("sectionIn");
    }, delay);
  });
}
