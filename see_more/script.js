
// Show Pop-Up
// Get the modal
var ebModal = document.getElementById('mySizeChartModal');
var ebBtn = document.getElementById("mySizeChart");
var ebSpan = document.getElementsByClassName("ebcf_close")[0];
var modalImg = document.getElementById("modalImage");

ebBtn = function() {
    ebModal.style.display = "block";
}

ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}

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