const cup = document.getElementById('cup');
const confetti = document.getElementById('confetti');
const logosLeft = document.getElementById('logos-club-left');
const logosRight = document.getElementById('logos-club-right');
const logoPortland = document.getElementById('logo-portland');
const logoDallas = document.getElementById('logo-dallas');
const one = document.querySelector('.one');
const game = document.querySelector('.game');
const glory = document.querySelector('.glory');
const poster = document.querySelector('.poster-animation');

const t1 = gsap.timeline();

/*Cup animation*/
t1.to(cup, {
  ease: Power1.easeOut,
  y: 0,
  duration: 3,
}).to(
  confetti,
  {
    ease: Back.easeOut.config(1.7),
    y: -550,
    duration: 3,
  },
  '>-0.5',
);

/*Section fans animation*/
gsap.to(logosLeft, {
  ease: Power1.easeOut,
  duration: 1,
  opacity: 1,
  x: 0,
  delay: 4,
});

gsap.to(logosRight, {
  ease: Power1.easeOut,
  duration: 1,
  opacity: 1,
  x: 0,
  delay: 4,
});

t1.to(one, {
  ease: Power1.easeOut,
  opacity: 1,
  duration: 1,
})
  .to(game, {
    ease: Power1.easeOut,
    opacity: 1,
    duration: 1,
  })
  .to(glory, {
    ease: Power1.easeOut,
    opacity: 1,
    duration: 1,
  });

gsap.to(logoPortland, {
  ease: Power1.easeOut,
  duration: 2,
  scale: 1,
  opacity: 1,
  delay: 8,
});

gsap.to(logoDallas, {
  ease: Power1.easeOut,
  duration: 2,
  scale: 1,
  opacity: 1,
  delay: 8,
});

t1.to(one, {
  ease: Power1.easeOut,
  y: -500,
  duration: 1,
  delay: 2,
})
  .to(game, {
    ease: Power1.easeOut,
    y: -600,
    opacity: 1,
    duration: 1,
  })
  .to(glory, {
    ease: Power1.easeOut,
    y: -700,
    opacity: 1,
    duration: 1,
  })
  .to(poster, {
    ease: Power1.easeOut,
    opacity: 1,
    duration: 0.5,
  });

gsap.to(logosLeft, {
  ease: Power1.easeOut,
  duration: 1,
  x: -1200,
  delay: 14,
});

gsap.to(logosRight, {
  ease: Power1.easeOut,
  duration: 1,
  x: 1200,
  delay: 14,
});
