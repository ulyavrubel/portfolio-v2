const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

var isInViewportTop = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.bottom <=
    (window.innerHeight || document.documentElement.clientHeight)
  );
};

window.addEventListener(
  "scroll",
  function (event) {
    if (isInViewport(img1)) {
      img1.classList.add("recipe-img--1");
    }

    if (isInViewport(img2)) {
      img2.classList.add("recipe-img--2");
    }
    if (isInViewport(img3)) {
      img3.classList.add("recipe-img--3");
    }
  },
  false
);

window.addEventListener(
  "scroll",
  function (event) {
    if (!isInViewportTop(img1)) {
      img1.classList.remove("recipe-img--1");
    }

    if (!isInViewportTop(img2)) {
      img2.classList.remove("recipe-img--2");
    }
    if (!isInViewportTop(img3)) {
      img3.classList.remove("recipe-img--3");
    }
  },
  false
);
