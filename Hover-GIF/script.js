var o = document.querySelector("#o");
var main = document.querySelector("#main");

main.addEventListener("mousemove", function (event) {
  var x = event.clientX;
  var y = event.clientY;

  o.style.transform = `translate(${x}px,${y}px)`;
});

var overlays = document.querySelectorAll(".overlay");
overlays.forEach(() => {
  document.querySelector("#overlay1").addEventListener("mousemove", (event) => {
    document.querySelector("#elem1 img").style.scale = 1;
    document.querySelector("#elem1 img").style.opacity = 1;
    o.style.opacity = 0;
    //document.querySelector('#elem1 img').style.transform = `translate${event.clientX}px,${event.clientY}px`
    document.querySelector("#elem1 img").style.left = event.x - 470 + "px";
    document.querySelector("#elem1 img").style.top = event.y - 370 + "px";
  });
  document
    .querySelector("#overlay1")
    .addEventListener("mouseleave", (event) => {
      document.querySelector("#elem1 img").style.scale = 0;
      document.querySelector("#elem1 img").style.opacity = 0;
      o.style.opacity = 1;
    });

  document.querySelector("#overlay2").addEventListener("mousemove", (event) => {
    document.querySelector("#elem2 img").style.scale = 1;
    document.querySelector("#elem2 img").style.opacity = 1;
    o.style.opacity = 0;
    //document.querySelector('#elem1 img').style.transform = `translate${event.clientX}px,${event.clientY}px`
    document.querySelector("#elem2 img").style.left = event.x - 1000 + "px";
    document.querySelector("#elem2 img").style.top = event.y - 370 + "px";
  });
  document
    .querySelector("#overlay2")
    .addEventListener("mouseleave", (event) => {
      document.querySelector("#elem2 img").style.scale = 0;
      document.querySelector("#elem2 img").style.opacity = 0;
      o.style.opacity = 1;
    });
});
