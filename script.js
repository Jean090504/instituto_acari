'use strict'

const navbar = document.getElementById('navbar')

// 1. Controle do Scroll da Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'py-2')
        navbar.classList.remove('py-4')
    } else {
        navbar.classList.remove('shadow-lg', 'py-2')
        navbar.classList.add('py-4')
    }
})

// 2. Animação de Revelação
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
    });
}, { threshold: 0.1 })

document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10')
    observer.observe(el)
})