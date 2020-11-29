window.onload = function () {
  gsap.from("#main-title", {
    scrollTrigger: "#main-title",
    delay: 0.5,
    opacity: 0,
    y: 100,
  });
  gsap.from("#list-1", {
    scrollTrigger: "#list-1",
    delay: 0.5,
    opacity: 0,
    x: -100,
  });
  gsap.from("#list-2", {
    scrollTrigger: "#list-2",
    delay: 0.5,
    opacity: 0,
    x: 100,
  });
  gsap.from("#list-3", {
    scrollTrigger: "#list-3",
    delay: 0.5,
    opacity: 0,
    x: -100,
  });
  gsap.from("#list-4", {
    scrollTrigger: "#list-4",
    delay: 0.5,
    opacity: 0,
    x: 100,
  });
  gsap.from("#list-5", {
    scrollTrigger: "#list-5",
    delay: 0.5,
    opacity: 0,
    x: -100,
  });
};
