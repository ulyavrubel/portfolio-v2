var tl2 = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl2.from("#img1", 0.4, { y: 200, opacity: 0 });
tl2.from("#img2", 0.4, { y: 200, opacity: 0 });
tl2.from("#img3", 0.4, { y: 200, opacity: 0 });

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#mockups",
})
  .setTween(tl2)
  .addTo(controller);
