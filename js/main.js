import "../styles/App.scss";

/* ScrollMagic Controller */
let controller = new ScrollMagic.Controller();

const scrollContainers = document.querySelectorAll(".scroll-container");

scrollContainers.forEach((scrollContainer) => {
  const starImages = scrollContainer.querySelectorAll(".star");

  //directions
  const left = scrollContainer.classList.contains("left");
  const right = scrollContainer.classList.contains("right");
  const top = scrollContainer.classList.contains("top");
  const bottom = scrollContainer.classList.contains("bottom");

  let tl = gsap.timeline();

  if (left || top || bottom) {
    tl.add("start")
      .fromTo(
        scrollContainer,
        {
          x: 250,
        },
        {
          x: -50,
        },
        "start"
      )
      .fromTo(
        starImages,
        {
          rotateZ: 719,
        },
        {
          rotateZ: 33,
        },
        "start"
      );
  } else if (right) {
    tl.add("start")
      .fromTo(
        scrollContainer,
        {
          x: -50,
        },
        {
          x: 250,
        },
        "start"
      )
      .fromTo(
        starImages,
        {
          rotateZ: 33,
        },
        {
          rotateZ: 719,
        },
        "start"
      );
  }

  //adding scenes
  if (left || right) {
    new ScrollMagic.Scene({
      triggerElement: scrollContainer,
      triggerHook: "onEnter",
      duration: "100%",
    })
      .setTween(tl)
      .addTo(controller);
  } else if (top || bottom) {
    new ScrollMagic.Scene({
      triggerElement: scrollContainer.parentElement.parentElement.parentElement,
      triggerHook: "onEnter",
      duration: "200%",
    })
      .setTween(tl)
      .addTo(controller);
  }
});

// Info sections
const infoSection = document.querySelectorAll(".info-section.lg");

infoSection.forEach((section) => {
  const scrollContainer = section.querySelector(".inner-scroll");

  let tl = gsap.timeline();
  tl.fromTo(
    scrollContainer,
    {
      y: "36vw",
    },
    {
      y: "-24vw",
    }
  );

  new ScrollMagic.Scene({
    triggerElement: section,
    triggerHook: "onEnter",
    duration: "200%",
  })
    .setTween(tl)
    .addTo(controller);
});

//bottle animation

const bottleContainer = document.querySelector(".bottle-container");
const bottle = bottleContainer.querySelector(".bottle");

let botTl = gsap.timeline();

botTl
  .to(bottle, 1200, {
    x: "61vw",
    rotateZ: 18,
  })
  .to(bottle, 1900, { x: "-61vw", rotateZ: -18 })
  .to(bottle, 2100, { x: "61vw", rotateZ: 18 })
  .to(bottle, 1100, { x: "0", rotateZ: 0 })
  .to(bottle, 300, { x: "-61vw", rotateZ: -9 })
  .to(bottle, 300, { x: "0", rotateZ: 0 })
  .to(bottle, 320, { x: "0", rotateZ: 0 });

new ScrollMagic.Scene({
  triggerElement: document,
  triggerHook: "onEnter",
  duration: "7220",
})
  .setTween(botTl)
  .addTo(controller);
