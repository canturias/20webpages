const bar = document.querySelector("b");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});
