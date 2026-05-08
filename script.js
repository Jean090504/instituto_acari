'use strict';

// Envolvemos tudo no DOMContentLoaded para garantir que o HTML já carregou 100%
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. CONTROLE DO SCROLL DA NAVBAR
    // ==========================================
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'py-2');
                navbar.classList.remove('py-4');
            } else {
                navbar.classList.remove('shadow-lg', 'py-2');
                navbar.classList.add('py-4');
            }
        });
    }

    // ==========================================
    // 2. MENU MOBILE (ABRIR E FECHAR)
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        // Abrir/Fechar ao clicar no botão de hambúrguer
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Fechar automaticamente ao clicar em qualquer link do menu
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }

    // ==========================================
    // 3. ANIMAÇÃO DE REVELAÇÃO (SCROLL)
    // ==========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    // Pega todos os elementos com a classe .reveal, esconde primeiro, e passa a observar
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

});