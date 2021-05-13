"use strict";

const hamburgerIcon = document.querySelector(".header__hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLitems = document.querySelectorAll(".nav-menu__litem");

//Closes the nav menu if clicked somewhere else in the page

window.addEventListener("click", (e) => {
  const className = e.target.classList[0] || "";
  const navSubList = document.querySelectorAll(".nav-menu__sublist");
  checkSubListsShow();

  if (
    !className.includes("nav-menu") &&
    e.target != hamburgerIcon &&
    (navMenu.classList.contains("nav-menu--show") || checkSubListsShow())
  ) {
    toggleNav();
  }
  // if (e.target == navMenu) navMenu.classList.remove("nav-menu");
});

//Opens the nav menu and changes the hamburger icon to close icon
hamburgerIcon.addEventListener("click", () => {
  toggleNav();
});

// get window innerWidth
const getWindowWidth = function () {
  return window.innerWidth;
};
//toggle (open / close ) the nav menu
const toggleNav = function () {
  // toggle hamburger only when screen width is smaller then 1024 pixels
  if (getWindowWidth() < 1024) {
    navMenu.classList.toggle("nav-menu--show");
    if (navMenu.classList.contains("nav-menu--show")) {
      hamburgerIcon.src = "images/icon-close.svg";
    } else {
      hamburgerIcon.src = "images/icon-hamburger.svg";
    }
  }
  closeSubLists();
};

// get the sublist from the menu item
const getSubList = function (item) {
  return item.firstElementChild.nextElementSibling.nextElementSibling;
};

//Closes all the Sublist items in the nav bar menu
const closeSubLists = function () {
  navLitems.forEach((item) => {
    getSubList(item).classList.remove("nav-menu--show");
  });
};

// check if some of the sublist are open
const checkSubListsShow = function () {
  return Object.values(navLitems).some((item) => {
    return getSubList(item).classList.contains("nav-menu--show");
  });
};

//check for each click event from the menu items for display the sublist
navLitems.forEach((item) => {
  item.addEventListener("click", () => {
    //get the sublistclass by clicked item nextelementsibling
    item.firstElementChild.nextElementSibling.nextElementSibling;
    // const subListClass = item.nextElementSibling.classList;
    const subListClass =
      item.firstElementChild.nextElementSibling.nextElementSibling.classList;
    const subListShown = subListClass.contains("nav-menu--show");
    if (subListShown) subListClass.remove("nav-menu--show");
    else {
      closeSubLists();

      subListClass.add("nav-menu--show");
    }
  });
});
