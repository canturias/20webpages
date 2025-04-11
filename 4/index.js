const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
  bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}

const containerEl = document.querySelector(".title");

const careers = ["Welcome to Flowy.", "We sell flowers.", "Have a look around."];

let careerIndex = 0;
let characterIndex = 0;
let typing = true;

updateText();

function updateText() {
  if (typing) {
    characterIndex++;
    containerEl.innerHTML = `<h1>${careers[careerIndex].slice(0, characterIndex)}`;
    
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


