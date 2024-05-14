Shery.makeMagnet("#mgnet");
Shery.makeMagnet("#submit");

document.addEventListener('DOMContentLoaded', function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
  });
});


var tl = gsap.timeline()

tl.from(".bg",{
    scale:3,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from(".contactbox",{
    x:100,
    opacity:0,
    duration:0.7,
    delay:0.5
})
tl.from(".foorm",{
    x:"-300",
    opacity:0,
    duration:0.7,
    delay:0.5
})
tl.from(".footer",{
    scale:"-2",
    opacity:0,
    duration:0.7,
    delay:0.5
})