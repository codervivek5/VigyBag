// Scroll to top button JS

const backToTopBtn = document.getElementById('backToTopBtn');

function toggleBackToTopButton() {
  if (document.documentElement.scrollTop > 0) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', toggleBackToTopButton);

// Initially, call the toggle function to set the initial state of the button
toggleBackToTopButton();