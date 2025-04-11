const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");
const section = document.querySelector("section");
const author = document.getElementById("author");
const message = document.getElementById("message");
const time = document.getElementById("time");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "rgb(16, 16, 16)";
    section.style.background = "rgb(32, 32, 32)";
    author.style.color = "white";
    message.style.color = "white";
    message.textContent = "It's a beautiful night 🌚";
    time.style.color = "lightgray"
  } else {
    bodyEl.style.background = "white";
    section.style.background = "lightgray";
    author.style.color = "black";
    message.style.color = "black";
    message.textContent = "It's a beautiful day 🌞";
    time.style.color = "rgb(32, 32, 32)"
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}`;

  document.getElementById("time").textContent = timeString;
}

updateTime();

setInterval(updateTime, 60000);