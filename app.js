const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//End Section
const section = document.querySelector('.second-section');
const end = document.querySelector('.second-h1');

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
    duration: 3000,
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
    
    // console.log(' delay: ' + delay);
    video.currentTime = delay;
}, 40)

// VIDEO 2 ==================================================
const ourPartners = document.querySelector('.our-partners');
const dbacksVid = ourPartners.querySelector('video');
const text2 = ourPartners.querySelector('h1');
//End Section
// const section2 = document.querySelector('.second-section');
// const end2 = document.querySelector('.second-h1');


// //SCROLLMAGIC
// let dbacksController = new ScrollMagic.Controller();
//scenes
let dbacksScene = new ScrollMagic.Scene({
    duration: 4500,
    triggerElement: ourPartners,
    triggerHook: 0
})
.addIndicators()
.setPin(ourPartners)
.addTo(controller);


//Text Animation
const dbacksTextAnim = TweenMax.fromTo(text, 1, {opacity: 1}, {opacity: 0});

let dbacksScene2 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: ourPartners,
    triggerHook: 0
})
.setTween(dbacksTextAnim)
.addTo(controller)


//video animation
let dbacksAccelamount = 0.1;
let dbacksScrollpos = 0;
let dbacksDelay = 0;

dbacksScene.on('update', e => {
    // console.log('scrollmagic ScrollPos: ' + e.scrollPos)
    //scrollPos comes from scrollmagic lib
    dbacksScrollpos = e.scrollPos / 1000;
    // console.log('dbacksScrollpos: ' + dbacksScrollpos)
});

setInterval(() => {
    console.log(dbacksScrollpos)
    if (dbacksScrollpos >= 9.9) {
        // console.log('fire fire')
        // dbacksDelay += ((dbacksScrollpos - dbacksDelay) * dbacksAccelamount);
    
        // console.log('dbacks delay: ' + dbacksDelay);
        dbacksVid.currentTime = dbacksScrollpos - 10;
        // console.log('dbacks currentTime: ' + dbacksVid.currentTime);
    } else {
        // console.log('not yet')
    }

 
}, 50)