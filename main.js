import './global.scss'

const currentDate = new Date().getFullYear();
document.querySelector('footer span').innerHTML = currentDate


const players = Array.from(document.querySelectorAll('.plyr__video-embed')).map((p) => new Plyr(p, { controls: ['play-large'], ratio: "h:w" } ));

// const playersPortrait = Array.from(document.querySelectorAll('.plyr__video-embed.plyr__portrait')).map((p) => new Plyr(p, { controls: ['play-large'], vimeo: [{ portrait: true }] }));