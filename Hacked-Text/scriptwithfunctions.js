let rand = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text = document.querySelector("h1");
let interval;
let count;

//on mouseover effect
text.onmouseover = (e) => {
  count = 0;

  //execute code on intervals
  interval = setInterval(() => {
    runEffect(e); //call the text effect
    count += 1 / 5;
    if (count == e.target.dataset.value.length) {
      clearInterval(interval);
    }
  }, 10);
};

//the main effect
function runEffect(event) {
  event.target.innerText = event.target.innerText
    .split("")
    .map((letter, idx) => {
      if (idx < count) {
        return event.target.dataset.value[idx];
      }
      return rand[Math.floor(Math.random() * rand.length)];
    })
    .join("");
}
