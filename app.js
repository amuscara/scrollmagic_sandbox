const intro = document.querySelector('.intro');
const video = document.querySelector('video');
const text = intro.querySelector('h1');
//End Section
const section = document.querySelector('section');
const end = document.querySelector('h1');

//SCROLLMAGIC
let controller = new ScrollMagic.Controller();
//scenes
let scene = new ScrollMagic.Scene({
    duration: 8000,
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 1, {opacity: 1}, {opacity: 0});

let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller)


//video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    //scrollPos comes from scrollmagic lib
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    

    video.currentTime = delay;
}, 33.3)