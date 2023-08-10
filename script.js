// Open and Close of Navbar
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

// Dark Mode button Function
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
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

// Search functionality -\
function searchProduct() {
  const searchInput = document.getElementById("search");
  const itemCards = document.querySelectorAll(".item-card");
  const itemSections = document.querySelectorAll(".item-row");
  const seeMoreLinks = document.querySelectorAll(".see-more-text");

  const searchQuery = searchInput.value.trim().toLowerCase();

  itemCards.forEach((item) => {
    const itemTitle = item
      .querySelector(".item-heading a")
      .innerText.toLowerCase();
    if (itemTitle.includes(searchQuery)) {
      item.style.display = "block";
      item.closest(".item-row").style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  // Show the item sections if at least one item is visible in them
  itemSections.forEach((section) => {
    const visibleItems = section.querySelectorAll(
      '.item-card[style="display: block;"]'
    );
    if (visibleItems.length > 0) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });

     // Hide the "See more..." links if the corresponding section has no visible items
    seeMoreLinks.forEach((link) => {
      const section = link.previousElementSibling;
      const visibleItems = section.querySelectorAll('.item-card[style="display: block;"]');
      if (visibleItems.length > 0) {
        link.style.display = 'block';
      } else {
        link.style.display = 'none';
      }
    });
  }

  // Function to show all items and "See more..." links when clearing the search
  function clearSearch() {
    const itemCards = document.querySelectorAll(".item-card");
    const itemSections = document.querySelectorAll(".item-row");
    const seeMoreLinks = document.querySelectorAll(".see-more-text");

    itemCards.forEach((item) => {
      item.style.display = "block";
    });

    itemSections.forEach((section) => {
      section.style.display = "block";
    });

    seeMoreLinks.forEach((link) => {
      link.style.display = "block";
    });
  }