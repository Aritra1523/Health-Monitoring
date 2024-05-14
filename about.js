Shery.makeMagnet("#mgnet");
Shery.makeMagnet("#submit");

document.addEventListener('DOMContentLoaded', function (){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
  });
});



var tl = gsap.timeline()

tl.from(".about",{
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from(".motive",{
    x:"-100",
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from(".member",{
    x:100,
    opacity:0,
    duration:1,
    delay:0.5
})