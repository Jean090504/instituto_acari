'use strict';

// 1. FUNÇÃO DE TROCA DA GARRAFA (Escopo Global)
// Precisa estar fora para o 'onclick' do HTML funcionar
function updateBottle(colorName, hex) {
    const img = document.getElementById('main-bottle');
    const border = document.getElementById('bottle-border');
    const bg = document.getElementById('bottle-bg');
    const link = document.getElementById('whatsapp-buy');
    
    if (!img || !border || !bg || !link) return;

    // 1. Troca a imagem com efeito de fade
    img.style.opacity = '0';
    img.style.transform = 'scale(0.9)'; // Leve encolhida para o efeito ficar mais premium
    
    setTimeout(() => {
        img.src = `./img/garrafa-${colorName}.png`;
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    }, 200);

    // 2. Troca as cores de destaque no card
    border.style.borderColor = hex;
    bg.style.backgroundColor = hex;

    // 3. Atualiza o link do WhatsApp com a cor escolhida
    const message = encodeURIComponent(`Olá! Gostaria de adquirir a Garrafa Térmica ${colorName.toUpperCase()} do Instituto.`);
    link.href = `https://api.whatsapp.com/send?phone=5511994657566&text=${message}`;

    // 4. Efeito visual nos botões de cor (Destaque do botão selecionado)
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('ring-2', 'ring-offset-2');
    });
    
    // Opcional: Adiciona o anel de seleção ao botão clicado
    if (window.event) {
        window.event.currentTarget.classList.add('ring-2', 'ring-offset-2');
    }
}

// 2. CONTROLES QUE DEPENDEM DO CARREGAMENTO DO HTML
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // CONTROLE DO SCROLL DA NAVBAR
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
    // MENU MOBILE
    // ==========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }

    // ==========================================
    // ANIMAÇÃO DE REVELAÇÃO (SCROLL)
    // ==========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    // Pega todos os elementos com a classe .reveal e aplica o estado inicial
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        init: function () {
            // Garante que o primeiro slide apareça
            document.querySelectorAll('.swiper-slide').forEach(s => s.classList.add('opacity-100'));
        },
    },
});