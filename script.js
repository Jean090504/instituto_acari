// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('nav');

    // Efeito na Navbar ao rolar a página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-[#1A2E40]/90', 'backdrop-blur-md', 'shadow-md');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('bg-[#1A2E40]/90', 'backdrop-blur-md', 'shadow-md');
        }
    });
});