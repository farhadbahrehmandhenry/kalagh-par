gsap.registerPlugin(ScrollTrigger);

var one = document.getElementById('one');
var footOne = document.querySelector('.foot-one');
var footTwo = document.querySelector('.foot-two');

var two = document.getElementById('two');
var zahhakOne = document.querySelector('.zahhak-one');

var three = document.getElementById('three');
var imageOne = document.querySelector('.one');
var imageTwo = document.querySelector('.two');
var imageThree = document.querySelector('.three');
var imageFour = document.querySelector('.four');

var landing = document.getElementById('landing');
var afterLanding = document.getElementById('after-landing');

var title = document.getElementById('title');
var description = document.getElementById('description');

var four = document.getElementById('four');
var amameh = document.querySelector('.amameh');

var scroll = document.getElementById('scroll');

userHasScrolled = false;
waitTreshold = 0;

window.onscroll = function (e) {
  userHasScrolled = true;
  scroll.classList.remove('active');
  clearInterval(userScroll);
}

var userScroll = setInterval(() => {
  if (!userHasScrolled) {
    waitTreshold++

    console.log('asdasda')
    if (waitTreshold === 3) {
      scroll.classList.add('active');
    }
  }
}, 2000);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const landingTL = gsap.timeline({
  scrollTrigger: {
    trigger: afterLanding,
    start: "top 95%",
    end: "bottom 60%",
    pin: landing,
    pinSpacing: false,
    scrub: 1,
  }
});

landingTL
  .to(title, { opacity: 0.5, duration: 2 })
  .to(title, { scale: 1.2, duration: 2 })
  .to(description, { opacity: 0.5, duration: 2 })
  .to(title, { opacity: 0.8, duration: 2 })
  .to(title, { scale: 1, duration: 2 })
  .to(description, { opacity: 0, duration: 2 })
  .to(title, { opacity: 0, duration: 2 })


gsap.fromTo(footOne, {
  opacity: 0,
  scale: 1.1
}, {
  opacity: 0.5,
  scale: 0.7,
  duration: 5,
  scrollTrigger: {
    trigger: one,
    start: "10% 10%",
    end: "bottom top",
    scrub: 3,
    pin: footOne,
  }
});

gsap.fromTo(footTwo, {
  opacity: 0,
  scale: 1.1
}, {
  opacity: 0.5,
  scale: 0.7,
  duration: 5,
  scrollTrigger: {
    trigger: one,
    start: "30% 10%",
    end: "bottom top",
    scrub: 3,
    pin: footTwo,
  }
});

const zahhakTL = gsap.timeline({
  scrollTrigger: {
    trigger: two,
    start: "10% 20%",
    end: "bottom 90%",
    scrub: 3,
    pin: zahhakOne,
  }
});

zahhakTL
  .to(two, { opacity: 0.7, duration: 2 })
  .to(zahhakOne, { opacity: 0.7, duration: 2 })
  .to(zahhakOne, { scale: 1, duration: 10 })
  .to(zahhakOne, { y: -300, duration: 2 })
  .to(zahhakOne, { opacity: 0.6, duration: 2 })
  .to(zahhakOne, { opacity: 0.3, duration: 2 })
  .to(zahhakOne, { opacity: 0, duration: 2 })

const boysTl = gsap.timeline({
  scrollTrigger: {
    trigger: three,
    start: "top 30%",
    end: "bottom 10%",
    scrub: 3,
    pin: three,
  }
});

boysTl
  .to(three, { opacity: 1, duration: 2 })
  .to(imageOne, { opacity: 0.8, duration: 2 })
  .to(imageTwo, { opacity: 0.8, duration: 2 })
  .to(imageOne, { opacity: 0, duration: 2 })
  .to(imageThree, { opacity: 0.8, duration: 2 })
  .to(imageTwo, { opacity: 0, duration: 2 })
  .to(imageFour, { opacity: 0.8, duration: 2 })
  .to(imageThree, { opacity: 0, duration: 2 })
  .to(imageFour, { opacity: 0, duration: 2 })

gsap.fromTo(amameh, {
  transform: "rotate(0deg)",
}, {
  transform: "rotate(180deg)",
  duration: 3,
  scrollTrigger: {
    trigger: four,
    start: "top 10%",
    end: "bottom 10%",
    pin: four,
    scrub: 1,
  }
})

// const amamehTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: four,
//     start: "top 50%",
//     end: "bottom 10%",
//     scrub: 1,
//     pin: four,
//   }
// });

// amamehTl
//   .to(amameh, { transform: "rotate(45deg)", duration: 2 })
//   .to(amameh, { transform: "rotate(90deg)", duration: 2 })
//   .to(amameh, { opacity: 0.5, duration: 2 })
//   .to(amameh, { opacity: 0, duration: 2 })
