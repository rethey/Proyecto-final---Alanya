document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    const dotsContainer = document.querySelector('.slider-dots');

    let currentIndex = 0;

    // Crear los puntos de navegación
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.dataset.slide = i;
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(index) {
        // Ocultar el slide actual
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        // Actualizar el índice
        currentIndex = index;

        // Mostrar el nuevo slide
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    nextButton.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % slides.length;
        goToSlide(newIndex);
    });

    prevButton.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(newIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const newIndex = parseInt(e.target.dataset.slide);
            goToSlide(newIndex);
        });
    });

    // Opcional: Cambio automático de slide cada 5 segundos
    setInterval(() => {
        const newIndex = (currentIndex + 1) % slides.length;
        goToSlide(newIndex);
    }, 7000);
});