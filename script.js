// Fecha actual en cabecera
const dateElement = document.querySelector('.date-today');
if (dateElement) {
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Mostrar artículo al hacer click en el título
document.querySelectorAll('.headline.clickable').forEach(title => {
    title.addEventListener('click', () => {
        const article = title.closest('.news-article');

        // Cierra todos los demás
        document.querySelectorAll('.news-article').forEach(a => {
            if (a !== article) {
                a.classList.add('closed');
            }
        });

        // Abre o cierra el actual
        article.classList.toggle('closed');
    });
});

// Leer más / menos
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const article = this.closest('.news-article');
        const moreText = article.querySelector('.more-text');

        if (moreText.style.display === 'block') {
            moreText.style.display = 'none';
            this.textContent = 'Leer más';
        } else {
            moreText.style.display = 'block';
            this.textContent = 'Leer menos';
        }
    });
});
