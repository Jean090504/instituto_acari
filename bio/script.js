// 1. Efeito Parallax no Fundo
window.addEventListener('scroll', () => {
    const bg = document.getElementById('bg-parallax');
    const scrollValue = window.scrollY;
    
    // Ele move 20% da velocidade do scroll
    bg.style.transform = `translateY(${scrollValue * 0.2}px)`;
});

// 2. Lógica de Redirecionamento e Loader
document.querySelectorAll('.nav-link, .social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = this.getAttribute('target');

        if (target === '_blank' || href.startsWith('#')) return;

        e.preventDefault();
        showLoader();
        document.getElementById('main-container').style.opacity = '0';
        
        setTimeout(() => {
            window.location.href = href;
        }, 400);
    });
});

function showLoader() {
    const bar = document.getElementById('loader-bar');
    bar.style.width = '30%';
    setTimeout(() => bar.style.width = '70%', 100);
    setTimeout(() => bar.style.width = '100%', 300);
}