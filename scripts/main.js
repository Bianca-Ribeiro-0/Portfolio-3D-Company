//Responsividade do navbar
const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// abrir e fechar menu hamburger-dispositivos mobile e tablet
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());


window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
});
