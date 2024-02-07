//dataset is used to store the word CHRISTINA or anything when not stored
const alpha = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789";
let interval = null;

document.querySelector("h1").addEventListener("mouseover", (event) => {
  clearInterval(interval);
  let iteration = 0; //this line must be inside the event listener function
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, idx) => {
        if (idx <= iteration) {
          return event.target.dataset.value[idx];
        }
        return alpha[Math.floor(Math.random() * alpha.length)];
      })
      .join("");

    iteration += 1/2; 
    console.log(iteration);
    if (iteration > event.target.dataset.value.length) {
      clearInterval(interval);
    }
  }, 21);
});
