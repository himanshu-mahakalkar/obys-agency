gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: "#main" });

ScrollTrigger.refresh();


var timeline = gsap.timeline();

timeline.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

timeline.from("#line1-part1",{
  opacity:0,
  onStart: function(){
    var h5timer = document.querySelector(".line h5");
    var grow = 0;
    var interval = setInterval(function(){
        if (grow<=100) {
            h5timer.innerHTML = grow++;
        } else {
            clearInterval(interval);
        }
    },35);
  }
});

timeline.to(".line h2",{
  animationName: "nowAnime",
  opacity: 1
});

timeline.to("#loader",{
  opacity:0,
  duration:0.2,
  delay:4
});

timeline.from("#page1",{
  y: 1200,
  opacity: 0,
  duration:0.5,
  delay:0.2,
  ease: Power4
});

timeline.to("#loader",{
  display: "none"
});