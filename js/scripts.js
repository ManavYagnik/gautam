document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.querySelector('.search-bar button');
  const searchInput = document.querySelector('.search-bar input');

  searchButton.addEventListener('click', function () {
    const query = searchInput.value.trim();
    alert(query ? `You searched for: ${query}` : 'Please enter a search term.');
  });

  document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', () => alert('Item added to cart.'));
  });

  // Banner Slide Logic
  const slides = document.querySelectorAll(".banner-slide");
  let currentSlide = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  document.getElementById("nextSlide").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  document.getElementById("prevSlide").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  showSlide(currentSlide);
  startAutoSlide();
});
