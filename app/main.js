const hamburgerIcon = document.querySelector(".header__hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu--show");
  if (navMenu.classList.contains("nav-menu--show")) {
    hamburgerIcon.src = "/images/icon-close.svg";
  } else {
    hamburgerIcon.src = "/images/icon-hamburger.svg";
  }
});
