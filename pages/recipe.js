var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();

const controller = new ScrollMagic.Controller();

// tl.from("#img1", 0.5, { x: 200, opacity: 0 });

tl2.from("#img1", 1, { x: -200, opacity: 0 });
tl2.from("#img2", 1, { x: 200, opacity: 0 });
tl2.from("#img3", 1, { x: 200, opacity: 0 });

// tl2.from("#mockups", 1, { opacity: 0, scale: 0 });

// tl2.from("#box", 1, { opacity: 0, scale: 0 });

// const scene = new ScrollMagic.Scene({
//   triggerElement: "#mockups",
//   triggerHook: "onLeave",
//   duration: "100%",
// })
//   .setPin(".sticky")
//   .setTween(tl)
//   .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#mockups",
})
  .setTween(tl2)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}

// const scene2 = new ScrollMagic.Scene({
//   triggerElement: "#img1",
// })
//   .setTween(tl2)
//   .addTo(controller);

// function updatePercentage() {
//   tl.progress();
//   console.log(tl.progress());
// }

// const img1 = document.getElementById("img1");
// const img2 = document.getElementById("img2");
// const img3 = document.getElementById("img3");
// const mockups = document.getElementById("mockups");

// var isInViewport = function (elem) {
//   var bounding = elem.getBoundingClientRect();
//   return (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// var isInViewportTop = function (elem) {
//   var bounding = elem.getBoundingClientRect();
//   return (
//     bounding.bottom <=
//     (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// window.addEventListener(
//   "scroll",
//   function (event) {
//     if (isInViewport(mockups)) {
//       img1.classList.add("recipe-img--1");
//       img2.classList.add("recipe-img--2");
//       img3.classList.add("recipe-img--3");
//     }
//   },
//   false
// );

// window.addEventListener(
//   "scroll",
//   function (event) {
//     if (!isInViewportTop(mockups)) {
//       img1.classList.remove("recipe-img--1");
//       img2.classList.remove("recipe-img--2");
//       img3.classList.remove("recipe-img--3");
//     }
//   },
//   false
// );
