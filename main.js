import './global.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const currentDate = new Date().getFullYear();
document.querySelector('footer span').innerHTML = currentDate


const players = Array.from(document.querySelectorAll('.plyr__video-embed')).map((p) => new Plyr(p, { controls: ['play-large'], ratio: "h:w" } ));

gsap.set(".hi", { xPercent: 10, yPercent: 0 });
const cur = document.querySelector(".hi");
const trigger = document.querySelector('h1 span');
trigger.addEventListener("mouseenter", (e) => {
  gsap.to(cur, 0, { autoAlpha: 1 });
});

trigger.addEventListener("mouseleave", (e) => {
  gsap.to(cur, 0, { autoAlpha: 0 });
});

window.addEventListener("mousemove", (e) => {
    const X = e.clientX;
    const Y = e.clientY;
    gsap.to(cur, 0, { x: e.pageX, y: e.pageY });
});

const SECTIONS = gsap.utils.toArray("section");

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

const HEADER_ELEMENTS = document.querySelectorAll("header .container > *");
// HEADER_ELEMENTS.forEach( (item) => {
//   gsap.fromTo(item, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 1, stagger: 1 });
// })

gsap.fromTo(HEADER_ELEMENTS, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 1, stagger: 0.125 });



document.addEventListener("DOMContentLoaded", function () {

  gsap.utils.toArray("section").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () { animateFrom(elem) },
      onEnterBack: function () { animateFrom(elem, -1) },
      onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
