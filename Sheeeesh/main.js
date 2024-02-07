var circle = document.querySelector("#circle");
var frame = document.querySelector(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a; //lerp function equation js

//cursor ball
window.addEventListener("mousemove", (e) => {
  gsap.to(circle, {
    x: e.clientX,
    y: e.clientY,
    ease: Expo.easeOut,
    duration: 0.3,
  });
});

//main hover text effect
frame.addEventListener("mousemove", (e) => {
  var dimension = frame.getBoundingClientRect(); //retrieves the dimensions
  var xStart = dimension.x; //distance to left starting point of frame 
  var xEnd = dimension.x + dimension.width; //distance to right ending point of frame 

  var ZeroToOne = gsap.utils.mapRange(xStart, xEnd, 0, 1, e.clientX); //mapping xStart and xEnd with 0 and 1 respectively

  gsap.to(circle, {
    scale: 7,
  });
  gsap.to(".frame span", {
    color: "#f0f0f0",
    y: "-5vw",
    x: lerp(-50, 50, ZeroToOne),
    duration: 0.3,
  });
});
frame.addEventListener("mouseleave", () => {
  gsap.to(circle, {
    scale: 1,
  });
  gsap.to(".frame span", {
    color: "black",
    y: "0",
    x: '0'
  });
});
