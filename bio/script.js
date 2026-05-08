'use strict'

// Lógica de Redirecionamento com Transição
    document.querySelectorAll('.nav-link, .social-link').forEach(link => {
        link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = this.getAttribute('target');

        // Se for link externo (nova aba), apenas mostramos a animação de progresso rápida
        if (target === '_blank') {
            showLoader();
                return; 
            }

        // Se for link interno ou para o site oficial na mesma aba
        e.preventDefault();
        showLoader();
        document.getElementById('main-container').classList.add('fade-out');
                
        setTimeout(() => {
        window.location.href = href;
        }, 400); // Tempo da animação de saída
    });
});

    function showLoader() {
    const bar = document.getElementById('loader-bar');
    bar.style.width = '30%';
    setTimeout(() => bar.style.width = '70%', 100);
    setTimeout(() => bar.style.width = '100%', 300);
    setTimeout(() => bar.style.width = '0', 600);
}

