const burgerIcon = document.getElementById("icon");
const navMenu = document.querySelector(".nav_menu2");
const header = document.querySelector(".header");
const btnvar1 = document.getElementById("btn1");
const addbtn1 = document.getElementById("addBtn1");
const btnvar2 = document.getElementById("btn2");
const addbtn2 = document.getElementById("addBtn2");
const btnvar3 = document.getElementById("btn3");
const addbtn3 = document.getElementById("addBtn3");
const btnvar4 = document.getElementById("btn4");
const addbtn4 = document.getElementById("addBtn4");
const stars = document.querySelectorAll(".items-star i");
const copyright = document.querySelector("#copyright p span");
const contactBox = document.getElementById("contact-box");
const contactHeader = document.getElementById("contact-header");
const submitBtn = document.getElementById("submit-btn");
const contactSection2 = document.getElementById("contact-sec-2");

// Dark Mode button Function
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  contactBox.classList.toggle("contact-box-dark");
  contactHeader.classList.toggle("contact-header-dark");
  submitBtn.classList.toggle("submit-btn-dark");
  contactSection2.classList.toggle("contact-sec-2-dark")
});
burgerIcon.addEventListener("click", () => {
  console.log("Hello");
  burgerIcon.classList.toggle("fa-bars");
  burgerIcon.classList.toggle("fa-xmark");
  navMenu.classList.toggle("show");
});

function Toggle1() {
  if (btnvar1.style.color == "red") {
    btnvar1.style.color = "gray";
  } else {
    btnvar1.style.color = "red";
  }
}
function tog1() {
  if (addbtn1.style.color == "green") {
    addbtn1.style.color = "gray";
    addbtn1.style.backgroundColor = "#d9d9d9";
    addbtn1.style.borderStyle = "none";
  } else {
    addbtn1.style.color = "green";
    addbtn1.style.borderColor = "#e8f6e8";
    addbtn1.style.borderColor = "yellowgreen";
    addbtn1.style.borderStyle = "solid";
  }
}
function Toggle2() {
  if (btnvar2.style.color == "red") {
    btnvar2.style.color = "gray";
  } else {
    btnvar2.style.color = "red";
  }
}
function tog2() {
  if (addbtn2.style.color == "green") {
    addbtn2.style.color = "gray";
    addbtn2.style.backgroundColor = "#d9d9d9";
    addbtn2.style.borderStyle = "none";
  } else {
    addbtn2.style.color = "green";
    addbtn2.style.borderColor = "#e8f6e8";
    addbtn2.style.borderColor = "yellowgreen";
    addbtn2.style.borderStyle = "solid";
  }
}
function Toggle3() {
  if (btnvar3.style.color == "red") {
    btnvar3.style.color = "gray";
  } else {
    btnvar3.style.color = "red";
  }
}
function tog3() {
  if (addbtn3.style.color == "green") {
    addbtn3.style.color = "gray";
    addbtn3.style.backgroundColor = "#d9d9d9";
    addbtn3.style.borderStyle = "none";
  } else {
    addbtn3.style.color = "green";
    addbtn3.style.borderColor = "#e8f6e8";
    addbtn3.style.borderColor = "yellowgreen";
    addbtn3.style.borderStyle = "solid";
  }
}
function Toggle4() {
  if (btnvar4.style.color == "red") {
    btnvar4.style.color = "gray";
  } else {
    btnvar4.style.color = "red";
  }
}
function tog4() {
  if (addbtn4.style.color == "green") {
    addbtn4.style.color = "gray";
    addbtn4.style.backgroundColor = "#d9d9d9";
    addbtn4.style.borderStyle = "none";
  } else {
    addbtn4.style.color = "green";
    addbtn4.style.borderColor = "#e8f6e8";
    addbtn4.style.borderColor = "yellowgreen";
    addbtn4.style.borderStyle = "solid";
  }
}

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

// Copyright link {clickable}
copyright.addEventListener("click", function () {
  window.open("https://codervivek.live/", "_blank");
});

// Path: VigyBag/script.js

// Show Pop-Up
// Get the modal
var ebModal = document.getElementById("mySizeChartModal");
var ebBtn = document.getElementById("mySizeChart");
var ebSpan = document.getElementsByClassName("ebcf_close")[0];
var modalImg = document.getElementById("modalImage");

ebBtn = function () {
  ebModal.style.display = "block";
};

ebSpan.onclick = function () {
  ebModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == ebModal) {
    ebModal.style.display = "none";
  }
};
