const containerEl = document.querySelector(".container");

const careers = ["Christian Canturias", "a Computer Science Student", "21", "living in Dipolog City"];

let careerIndex = 0;
let characterIndex = 0;
let typing = true;

updateText();

function updateText() {
  if (typing) {
    characterIndex++;
    containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, characterIndex)}|</h1>`;
    
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

