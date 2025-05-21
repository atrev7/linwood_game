
let currentSlide = 0;
const slides = document.querySelectorAll('.news-slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

document.getElementById('nextNews').addEventListener('click', nextSlide);
document.getElementById('prevNews').addEventListener('click', prevSlide);

setInterval(nextSlide, 7000); // Auto-cycle every 7s
