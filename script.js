'use strict'


 const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                nav.classList.add('bg-teal-deep/95', 'backdrop-blur-md', 'py-4', 'shadow-2xl');
                nav.classList.remove('py-6');
            } else {
                nav.classList.remove('bg-teal-deep/95', 'backdrop-blur-md', 'py-4', 'shadow-2xl');
                nav.classList.add('py-6');
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));