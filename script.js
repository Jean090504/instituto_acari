'use strict'


 const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-teal-deep/95', 'backdrop-blur-md', 'py-4', 'shadow-2xl');
                navbar.classList.remove('py-6');
            } else {
                navbar.classList.remove('bg-teal-deep/95', 'backdrop-blur-md', 'py-4', 'shadow-2xl');
                navbar.classList.add('py-6');
            }
        });

        