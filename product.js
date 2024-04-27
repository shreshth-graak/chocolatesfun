const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const itemWidth = carouselItems[0].offsetWidth;
const totalItems = carouselItems.length;

function moveCarousel() {
  carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  moveCarousel();
}

let autoSlideInterval = setInterval(autoSlide, 3000); // Change slide every 3 seconds

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  moveCarousel();
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 3000);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  moveCarousel();
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 3000);
});

window.addEventListener('resize', moveCarousel);