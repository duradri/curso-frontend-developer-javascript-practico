const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailMenu = document.querySelector('.product-detail');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');

navbarEmail.addEventListener('click', showDesktopMenu);

burgerIcon.addEventListener('click', showMobileMenu);

shoppingCartIcon.addEventListener('click', showProductDetailMenu);

function showProductDetailMenu(){
    productDetailMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}

function showDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
    productDetailMenu.classList.add('inactive');
}

function showMobileMenu (){
    mobileMenu.classList.toggle('inactive');
    productDetailMenu.classList.add('inactive');
}