const container = document.querySelector(".container");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  container.classList.toggle("change");
});
