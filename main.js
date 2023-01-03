const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', showDesktopMenu);

burgerIcon.addEventListener('click', showMobileMenu);

function showDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
}

function showMobileMenu (){
    mobileMenu.classList.toggle('inactive');
}