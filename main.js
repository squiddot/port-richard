import './global.scss'
import gsap from 'gsap';

const currentDate = new Date().getFullYear();
document.querySelector('footer span').innerHTML = currentDate


const players = Array.from(document.querySelectorAll('.plyr__video-embed')).map((p) => new Plyr(p, { controls: ['play-large'], ratio: "h:w" } ));

gsap.set(".hi", { xPercent: 10, yPercent: 10 });
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