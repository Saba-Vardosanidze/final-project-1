const burgerButton = document.querySelector(".burger-menu");
const closeButton = document.querySelector(".close-burgener-menu-button");
const burgerMenu = document.querySelector(".burger-menu-container");

burgerButton.addEventListener("click", () => {
  burgerMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  burgerMenu.style.display = "none";
});
