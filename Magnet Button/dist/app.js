const circle = document.getElementById('ball')

window.addEventListener("mousemove", (e) => {
    gsap.to(circle, {
      x: e.clientX,
      y: e.clientY,
      ease: Expo.easeOut,
      duration: 0.3,
    });
  });
  