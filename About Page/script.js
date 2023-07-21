// Dark Mode button Function
const section = document.getElementById('about-me');
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener("change", () => {
  section.classList.toggle("about-me");
});