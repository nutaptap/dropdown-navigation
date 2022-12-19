/* Desktop Menus */
const featuresButton = document.getElementById("features-button");
const companyButton = document.getElementById("company-button");
const featuresMenu = document.getElementById("features-menu");
const companyMenu = document.getElementById("company-menu");
let features = "hidden";
let company = "hidden";

function featuresClicked() {
  if (features == "hidden") {
    company = "hidden";
    companyMenu.classList.add("hide");
    features = "visible";
    featuresMenu.classList.remove("hide");
  } else {
    features = "hidden";
    featuresMenu.classList.add("hide");
  }
}

function companyClicked() {
  if (company == "hidden") {
    features = "hidden";
    featuresMenu.classList.add("hide");
    company = "visible";
    companyMenu.classList.remove("hide");
  } else {
    company = "hidden";
    companyMenu.classList.add("hide");
  }
}

featuresButton.addEventListener("click", featuresClicked);
companyButton.addEventListener("click", companyClicked);

window.onclick = function (event) {
  if (
    event.target.closest("#features-button") ||
    event.target.closest("#company-button")
  ) {
    return;
  } else {
    features = "hidden";
    featuresMenu.classList.add("hide");
    company = "hidden";
    companyMenu.classList.add("hide");
  }
};

/* Mobile Menus */

const hamburgerButton = document.getElementById("hamburger-button");
const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerImage = document.getElementById("button-image");
let hamburger = "hidden";

function hamburgerClicked() {
  if (hamburger == "hidden") {
    hamburger = "visible";
    hamburgerMenu.classList.remove("hide");
    hamburgerImage.src = "images/icon-close-menu.svg";
  } else {
    hamburger = "hidden";
    hamburgerMenu.classList.add("hide");
    hamburgerImage.src = "images/icon-menu.svg";
  }
}

hamburgerButton.addEventListener("click", hamburgerClicked);

/* Inside of the hamburger */

const featuresToggle = document.getElementById("features-toggle");
const companyToggle = document.getElementById("company-toggle");
const featuresHamburgerMenu = document.getElementById(
  "features-hamburger-menu"
);
const companyHamburgerMenu = document.getElementById("company-hamburger-menu");
let featuresHamburger = "remove";
let companyHamburger = "remove";

function featuresToggled() {
  if (featuresHamburger == "remove") {
    featuresHamburger = "visible";
    featuresHamburgerMenu.classList.remove("remove");
  } else {
    featuresHamburger = "remove";
    featuresHamburgerMenu.classList.add("remove");
  }
}

function companyToggled() {
  if (companyHamburger == "remove") {
    companyHamburger = "visible";
    companyHamburgerMenu.classList.remove("remove");
  } else {
    companyHamburger = "remove";
    companyHamburgerMenu.classList.add("remove");
  }
}

featuresToggle.addEventListener("click", featuresToggled);
companyToggle.addEventListener("click", companyToggled);
