// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

Shery.makeMagnet("#mgnet");
Shery.makeMagnet("#submit");

document.addEventListener('DOMContentLoaded', function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
  });

  // Function to jump to a specific section
  function jumpToSection(sectionId) {
    const section = document.querySelector(sectionId);
    // Scroll to the selected section
    scroll.scrollTo(section);
  }
});


document.querySelector(".footer h1").addEventListener("click", () =>{
  scroll.scrollTo(0)
})

