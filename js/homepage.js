'use strict';
class Carousel {
  constructor() {
    // Declaring all the Variables
    const mainCarousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel__slide');
    const dotsContainer = document.querySelector('.carousel__dots');
    const lastSlide = slides.length - 1;
    let prevSlide = lastSlide;
    let activeSlide = 0;
    let nextSlide = activeSlide + 1;
    const selected = [prevSlide, activeSlide, nextSlide];
    let timer;

    // Declaring all the functions
    const createDots = function (slides) {
      slides.forEach(function (_, index) {
        dotsContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="button dot" data-slideButton = "${index}"></button>`
        );
      });
    };
    const activateDot = function () {
      dots.forEach(function (el) {
        el.classList.remove('dot--active');
      });
      dots[activeSlide].classList.add('dot--active');
    };
    const showSlides = function () {
      slides.forEach(function (el, index) {
        if (selected.includes(index) === false) {
          el.style.zIndex = 0;
          el.style.display = 'none';
          el.style.transform = 'translateX(200%)';
        }

        if (index === prevSlide) {
          el.style.zIndex = '1';
          el.style.display = 'block';
          el.style.transform = `translateX(-100%)`;
        }

        if (index === activeSlide) {
          el.style.zIndex = '2';
          el.style.display = 'block';
          el.style.transform = `translateX(0%)`;
        }

        if (index === nextSlide) {
          el.style.zIndex = '1';
          el.style.display = 'block';
          el.style.transform = `translateX(100%)`;
        }
      });
    };
    const goToNext = function () {
      activeSlide = activeSlide === lastSlide ? 0 : activeSlide + 1;
      prevSlide = activeSlide === 0 ? lastSlide : activeSlide - 1;
      nextSlide = activeSlide === lastSlide ? 0 : activeSlide + 1;

      selected.splice(0, selected.length, prevSlide, activeSlide, nextSlide);

      showSlides();
      activateDot();
    };

    // Creating the slides
    createDots(slides);

    // Declaring the dots because they are created
    const dots = document.querySelectorAll('.dot');

    const init = function () {
      slides.forEach(function (el, index) {
        if (!selected.includes(index)) {
          el.style.zIndex = '0';
          el.style.display = 'none';
          el.style.transform = 'translateX(200%)';
        }
      });
      slides[prevSlide].style.zIndex = '1';
      slides[prevSlide].style.display = 'none';
      slides[prevSlide].style.transform = `translateX(-100%)`;
      slides[nextSlide].style.zIndex = '1';
      slides[nextSlide].style.display = 'none';
      slides[nextSlide].style.transform = `translateX(100%)`;
      slides[activeSlide].style.display = 'block';
      slides[activeSlide].style.transform = `translateX(0%)`;
      slides[activeSlide].style.zIndex = '2';
    };

    init();
    setTimeout(function () {
      showSlides();
    }, 2000);
    activateDot();

    const startTimer = function () {
      const timer = setInterval(goToNext, 7000);

      return timer;
    };

    timer = startTimer();

    mainCarousel.addEventListener('mouseenter', function () {
      clearInterval(timer);
      timer = null;
    });

    mainCarousel.addEventListener('mouseleave', function () {
      if (!timer) {
        timer = startTimer();
      }
    });
  }
}

const carousel = new Carousel();

class PropertiesCarousel {
  constructor() {
    const mainContainer = document.querySelector('.properties__main');
    const slides = document.querySelectorAll('.properties-carousel__slide');

    const leftArrow = document.querySelector('.arrow--left');
    const rightArrow = document.querySelector('.arrow--right');
    let propertiesTimer;
    const lastSlide = slides.length - 1;
    let prevSlide = lastSlide;
    let activeSlide = 0;
    let nextSlide = activeSlide + 1;
    const selected = [prevSlide, activeSlide, nextSlide];

    const showSlides = function () {
      slides.forEach(function (el, index) {
        el.style.zIndex = 0;
        if (selected.includes(index) === false) {
          el.style.display = 'none';
        }

        if (index === prevSlide) {
          el.style.display = 'grid';
          el.style.transform = `translateX(-100%)`;
        }

        if (index === activeSlide) {
          el.style.zIndex = 1;
          el.style.display = 'grid';
          el.style.transform = `translateX(0%)`;
        }

        if (index === nextSlide) {
          el.style.display = 'grid';
          el.style.transform = `translateX(100%)`;
        }
      });
    };
    const goToPrev = function () {
      activeSlide = activeSlide === 0 ? lastSlide : activeSlide - 1;
      prevSlide = activeSlide === 0 ? lastSlide : activeSlide - 1;
      nextSlide = activeSlide === lastSlide ? 0 : activeSlide + 1;

      selected.splice(0, selected.length, prevSlide, activeSlide, nextSlide);

      showSlides();
    };

    const goToNext = function () {
      activeSlide = activeSlide === lastSlide ? 0 : activeSlide + 1;
      prevSlide = activeSlide === 0 ? lastSlide : activeSlide - 1;
      nextSlide = activeSlide === lastSlide ? 0 : activeSlide + 1;

      selected.splice(0, selected.length, prevSlide, activeSlide, nextSlide);

      showSlides();
    };

    showSlides();

    leftArrow.addEventListener('click', goToPrev);
    rightArrow.addEventListener('click', goToNext);

    const startTimer = function () {
      const propertiesTimer = setInterval(goToNext, 5000);
      return propertiesTimer;
    };

    propertiesTimer = startTimer();

    mainContainer.addEventListener('mouseenter', function () {
      clearInterval(propertiesTimer);
      propertiesTimer = null;
    });
    mainContainer.addEventListener('mouseleave', function () {
      if (!propertiesTimer) {
        propertiesTimer = startTimer();
      }
    });
  }
}

const propertiesCarousel = new PropertiesCarousel();

class ModalValuationVt {
  constructor() {
    const backdrop = document.querySelector('.backdrop');

    const modalVt = document.querySelector('.section-modal-book-valuation-vt');
    const closeModalButton = document.querySelectorAll('.button-closemodal');
    const openModalButton = document.querySelector('.free-valuation__button');

    const closeModal = function () {
      if (modalVt.classList.contains('modal-visible-vt')) {
        modalVt.classList.remove('modal-visible-vt');
      }

      backdrop.classList.remove('backdrop-visible');
    };

    openModalButton.addEventListener('click', function (e) {
      e.preventDefault();

      modalVt.classList.add('modal-visible-vt');

      backdrop.classList.add('backdrop-visible');
    });

    closeModalButton.forEach(el => el.addEventListener('click', closeModal));

    backdrop.addEventListener('click', closeModal);
  }
}

const modalValuationVt = new ModalValuationVt();
