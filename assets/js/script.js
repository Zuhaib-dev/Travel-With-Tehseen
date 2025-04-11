"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
// Field js
const dropdown = document.getElementById("destinationOptions");
const multiSelect = document.querySelector(".custom-multiselect");
const hiddenInput = document.getElementById("destinationInput");
let selectedDestinations = [];

function toggleDropdown() {
  dropdown.classList.toggle("active");
}

function selectDestination(destination) {
  if (!selectedDestinations.includes(destination)) {
    selectedDestinations.push(destination);
    updateUI();
  }
}

function removeDestination(destination) {
  selectedDestinations = selectedDestinations.filter((d) => d !== destination);
  updateUI();
}

function updateUI() {
  multiSelect.innerHTML = "";
  selectedDestinations.forEach((dest) => {
    const tag = document.createElement("span");
    tag.innerHTML = `${dest} <i onclick="removeDestination('${dest}')">&times;</i>`;
    multiSelect.appendChild(tag);
  });
  hiddenInput.value = selectedDestinations.join(", ");
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".multi-select-wrapper")) {
    dropdown.classList.remove("active");
  }
});
// js for btn
function openPopup() {
  document.getElementById("packagePopup").style.display = "block";
}
function closePopup() {
  document.getElementById("packagePopup").style.display = "none";
}
// js for prevebting menu apperance
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
// js for iternery popup model
// Open popup on Explore button click
document.getElementById("explore-gold").addEventListener("click", function () {
  document.getElementById("gold-package").style.display = "flex";
});

// Close popup when the Close button (X) is clicked
document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("gold-package").style.display = "none";
});
// for other tour
// Open popup for Platinum Package
document.getElementById("explore-platinum").addEventListener("click", function () {
  document.getElementById("platinum-package").style.display = "flex";
});

// Close popup for Platinum Package
document.getElementById("close-popup-platinum").addEventListener("click", function () {
  document.getElementById("platinum-package").style.display = "none";
});
// for another tour
// Open popup for Diamond Package
document.getElementById("explore-diamond").addEventListener("click", function () {
  document.getElementById("diamond-package").style.display = "flex";
});

// Close popup for Diamond Package
document.getElementById("close-popup-diamond").addEventListener("click", function () {
  document.getElementById("diamond-package").style.display = "none";
});
