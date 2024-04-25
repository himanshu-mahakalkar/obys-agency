function gsapScrollTrigger() {
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
}
function loadingAnimation() {
  var timeline = gsap.timeline();

  timeline.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  timeline.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector(".line h5");
      var grow = 0;
      var interval = setInterval(function () {
        if (grow <= 100) {
          h5timer.innerHTML = grow++;
        } else {
          clearInterval(interval);
        }
      }, 35);
    },
  });

  timeline.to(".line h2", {
    animationName: "nowAnime",
    opacity: 1,
  });

  timeline.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
    // delay: 0,
  });

  timeline.from("#page1", {
    y: 1600,
    duration: 0.5,
    delay: 0.2,
    ease: Power4,
  });

  timeline.to("#loader", {
    display: "none",
  });

  timeline.from("#nav", {
    opacity: 0,
  });

  timeline.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });

  timeline.from(
    "#hero1,#page2",
    {
      opacity: 0,
    },
    "-=1.5"
  );
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (details) {
    gsap.to("#cursor", {
      left: details.x,
      top: details.y,
    });
  });
  Shery.makeMagnet("#nav-part2 h4");

  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove",function(dets) {
      gsap.to("#cursor",{
        opacity:0
      });
      gsap.to("#video-cursor",{
        left:dets.x - 350,
        y:dets.y - 300
      });
    });
  });
  videoContainer.addEventListener("mouseleave", function (){
      gsap.to("#cursor",{
        opacity:1
      });
      gsap.to("#video-cursor",{
        left:"70%",
        top:"-15%"
      });
    });
    var flag = 0;
    videoContainer.addEventListener("click",function(){
      if(flag == 0){
        video.play();
        video.style.opacity = 1;
        document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-fill"></i>`;
        gsap.to("#video-cursor",{
          scale:0.5
        });
        flag = 1;
      } else{
        video.pause();
        video.style.opacity = 0;
        document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-fill"></i>`;
        gsap.to("#video-cursor",{
          scale:1
        });
        flag = 0;
      }
    });
}
function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config: {
      a: { value: 1.37, range: [0, 30] },
      b: { value: -0.86, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749932567818 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: true },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.12, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.6, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
}
function footerAnimation() {

  var clutter = ""
  var clutter2 = ""
  document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  document.querySelector("#footer h1").innerHTML = clutter
  document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
    clutter2 += `<span>${elem}</span>`
  })
  document.querySelector("#footer h2").innerHTML = clutter2


  document.querySelector("#footer-text").addEventListener("mouseenter", function () {
    gsap.to("#footer h1 span", {
      opacity: 0,
      stagger: 0.05
    });
    gsap.to("#footer h2 span", {
      delay: 0.35,
      opacity: 1,
      stagger: 0.05
    });
  });
  document.querySelector("#footer-text").addEventListener("mouseleave", function () {
    gsap.to("#footer h1 span", {
      opacity: 1,
      stagger: 0.1,
      delay: 0.05,
    });
    gsap.to("#footer h2 span", {
      opacity: 0,
      stagger: 0.05
    });
  });
};
function flagAnimation() {
  document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      x:dets.x,
      y:dets.y
    });
    });
    document.querySelector("#hero3").addEventListener("mouseenter",function () {
      gsap.to("#flag",{
        opacity:1
      });
    });
    document.querySelector("#hero3").addEventListener("mouseleave",function () {
      gsap.to("#flag",{
        opacity:0
      });
    });
};

gsapScrollTrigger();
loadingAnimation();
cursorAnimation();
sheryAnimation();
flagAnimation();
footerAnimation();
