// Open and Close of Navbar
const burgerIcon = document.getElementById('icon')
const navMenu = document.querySelector('.nav_menu2');
const header = document.querySelector('.header');

burgerIcon.addEventListener('click', () => {
    console.log("Hello")
    burgerIcon.classList.toggle('fa-bars')
    burgerIcon.classList.toggle('fa-xmark')
    navMenu.classList.toggle('show');
})