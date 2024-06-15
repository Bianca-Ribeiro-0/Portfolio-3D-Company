// Responsividade do navbar
const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// abrir e fechar menu hamburger-dispositivos mobile e tablet
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Alterar cor de fundo do navbar ao rolar
window.addEventListener('scroll', function() {
    header.classList.toggle('scrolling-active', window.scrollY > 0);
});

// Alterar cor de fundo do navbar ao rolar para além da hero-section
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.fixed-navbar');
    const heroSection = document.querySelector('.hero-section');

    function checkScroll() {
        if (window.scrollY >= heroSection.offsetHeight) {
            navbar.classList.add('scrolling-active');
        } else {
            navbar.classList.remove('scrolling-active');
        }
    }

    window.addEventListener('scroll', checkScroll);
});

//Valida campos do formulário
function validarForm() {
    var nomeInput = document.getElementById("nome");
    var sobrenomeInput = document.getElementById("sobrenome");
    var emailInput = document.getElementById("email");
    var jobRoleInput = document.getElementById("job_role");
    var uploadInput = document.getElementById("upload");

    if (!nomeInput.checkValidity() || !sobrenomeInput.checkValidity() || !emailInput.checkValidity() || !jobRoleInput.checkValidity() || !uploadInput.checkValidity()) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    }

    return true;
}

var inputs = document.querySelectorAll('.input');
inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.checkValidity()) {
            input.style.borderColor = 'green';
        } else {
            input.style.borderColor = 'red';
        }
    });
});