"use strict";

const hamburgerIcon = document.querySelector(".header__hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLitems = document.querySelectorAll(".nav-menu__litem");

hamburgerIcon.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu--show");
  if (navMenu.classList.contains("nav-menu--show")) {
    hamburgerIcon.src = "/images/icon-close.svg";
  } else {
    hamburgerIcon.src = "/images/icon-hamburger.svg";
  }
});

//Closes all the Sublist items in the nav bar menu
const closeSubLists = function () {
  navLitems.forEach((item) => {
    item.nextElementSibling.classList.remove("nav-menu--show");
  });
};

//check for each click event from the menu items for display the sublist
navLitems.forEach((item) => {
  item.addEventListener("click", () => {
    //get the sublistclass by clicked item nextelementsibling
    const subListClass = item.nextElementSibling.classList;
    const subListShown = subListClass.contains("nav-menu--show");
    if (subListShown) subListClass.remove("nav-menu--show");
    else {
      closeSubLists();
      subListClass.add("nav-menu--show");
    }
  });
});
