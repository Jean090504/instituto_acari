'use strict'


const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');

// 1. Controle do Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-teal-deep/95', 'backdrop-blur-md', 'py-4', 'shadow-2xl');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.remove('bg-teal-deep/95', 'backdrop-blur-md', 'py-4', 'shadow-2xl');
        navbar.classList.add('py-6');
    }
});

// 2. Função Abrir/Fechar
function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    
    if (isOpen) {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        // Reset do Hamburger
        line1.classList.remove('rotate-45', 'translate-y-1.5');
        line2.classList.remove('-rotate-45', '-translate-y-1');
    } else {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        // Transforma em X
        line1.classList.add('rotate-45', 'translate-y-1.5');
        line2.classList.add('-rotate-45', '-translate-y-1');
    }
}

hamburger.addEventListener('click', toggleMenu);

// 3. Fechar menu ao clicar no link (Resolve o bug da imagem 13dd9b)
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

// 4. Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));