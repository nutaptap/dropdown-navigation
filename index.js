/* Menus */
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
