class Carousel {
    constructor(container, slides, prevButton, nextButton) {
        this.container = container;
        this.slides = slides;
        this.prevButton = prevButton;
        this.nextButton = nextButton;
        this.currentIndex = 0;
        this.totalSlides = slides.length;

        this.init();
    }

    init() {
        this.updateCarousel();
        this.addEventListeners();
        this.autoSlide();
    }

    addEventListeners() {
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());
        window.addEventListener('resize', () => this.updateCarousel());
    }

    updateCarousel() {
        const offset = -this.currentIndex * 100;
        this.container.style.transform = `translateX(${offset}%)`;
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateCarousel();
    }

    autoSlide() {
        setInterval(() => {
            this.nextSlide();
        }, 3000); // Change slide every 3 seconds
    }
}

// Initialize the carousel after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    new Carousel(carouselContainer, slides, prevButton, nextButton);
});
