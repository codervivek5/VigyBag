// const slider = document.querySelector(".slider");
// const slides = document.querySelectorAll(".slide");
// const leftArrow = document.querySelector(".controls i:nth-child(1)");
// const rightArrow = document.querySelector(".controls i:nth-child(2)");
// const dotsWrapper = document.querySelector(".dots");
// const dots = document.querySelectorAll(".dots span");

// let slideIndex = 0;

// const setIndex = () => {
//   document.querySelector(".dots .active").classList.remove("active");
//   slider.style.transform = `translateX(${slideIndex * -20}%)`;
// };

// dots.forEach((dot, ind) => {
//   dot.addEventListener("click", () => {
//     slideIndex = ind;
//     setIndex();
//     dot.classList.add("active");
//   });
// });

// leftArrow.addEventListener("click", () => {
//   slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
//   setIndex();
//   dotsWrapper.children[slideIndex].classList.add("active");
// });

// rightArrow.addEventListener("click", () => {
//   slideIndex =
//     slideIndex < slides.length - 1 ? slideIndex + 1 : slides.length - 1;
//   setIndex();
//   dotsWrapper.children[slideIndex].classList.add("active");
// });

// JavaScript (script.js)

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Toggle text content of the button
    const darkModeToggleBtn = document.getElementById("darkModeToggle");
    const isDarkMode = body.classList.contains("dark-mode");
    darkModeToggleBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

    // Save user preference to local storage
    localStorage.setItem("darkMode", isDarkMode);
}

// Function to apply saved dark mode preference
function applyDarkModePreference() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    const body = document.body;
    if (isDarkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
}

// Event listener for dark mode toggle button
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// Apply saved dark mode preference on page load
document.addEventListener("DOMContentLoaded", applyDarkModePreference);
