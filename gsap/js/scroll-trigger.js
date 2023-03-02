let scroll_tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".factsContainer",
    markers: false,
    start: "top center",
    end: "+=300",
    scrub: true,
  },
});
let facts = document.querySelectorAll(".fact");

scroll_tl.to(".factsContainer h2", {
  scale: 1.2,
  duration: 1,
  ease: "slow",
});
scroll_tl.to(facts, {
  xPercent: -85 * (facts.length - 1),
  scrollTrigger: {
    trigger: ".factsContainer_sm",
    start: "center center",
    pin: true,
    scrub: 1,
    snap: 1 / (facts.length - 1),
    end: () => `+=4320`,
    // horizontal: true,
    // pinSpacing:false,
    // markers: true,
    // base vertical scrolling on how wide the container is so it feels more natural.
    // end: () => `+=${smallFactsContainer.offsetWidth}`
  },
});
gsap.config({ trialWarn: false });
