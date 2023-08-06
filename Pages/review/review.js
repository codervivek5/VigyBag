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