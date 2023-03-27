const carousel = document.querySelector('.carousel');
const items = document.querySelector('.carousel-items');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentPosition = 0;

nextBtn.addEventListener('click', () => {
  currentPosition -= 33.33;
  items.style.transform = `translateX(${currentPosition}%)`;
});

prevBtn.addEventListener('click', () => {
  currentPosition += 33.33;
  items.style.transform = `translateX(${currentPosition}%)`;
});