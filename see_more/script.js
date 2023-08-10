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

// Search functionality -
function searchProduct() {
  const searchInput = document.getElementById("search");
  const itemCards = document.querySelectorAll(".item-card");
  const itemSections = document.querySelectorAll(".item-row");

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
      item.closest(".item-row").style.display = "none";
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
}