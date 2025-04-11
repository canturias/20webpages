const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});

const containerEl = document.querySelector(".container");

const careers = ["Welcome.", "We sell keyboards.", "Take a look around."];

let careerIndex = 0;
let characterIndex = 0;
let typing = true;

updateText();

function updateText() {
  if (typing) {
    characterIndex++;
    containerEl.innerHTML = `<h1>${careers[careerIndex].slice(0, characterIndex)}</h1>`;
    
    if (characterIndex === careers[careerIndex].length) {
      typing = false;
      setTimeout(() => {
        careerIndex++;
        characterIndex = 0;
        if (careerIndex === careers.length) {
          careerIndex = 0;
        }
        typing = true;
        updateText();
      }, 1000);
    } else {
      setTimeout(updateText, 100);
    }
  }
}
