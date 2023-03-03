'use strict';

class ShowVideo {
  constructor() {
    const videoBox = document.querySelector('.video-box');
    const openVideo = document.querySelector(
      '.section-house-hero__play-button'
    );
    const closeButton = document.querySelector('.close-video');
    const backdrop = document.querySelector('.backdrop');
    const video = document.querySelector('.property-video');
    const videoLink = document.querySelector('.video-link');

    const open = function () {
      videoBox.classList.add('video-visible');
      backdrop.classList.add('backdrop-visible');
    };

    const close = function () {
      videoBox.classList.remove('video-visible');
      backdrop.classList.remove('backdrop-visible');
      video.pause();
      video.currentTime = 0;
    };

    openVideo.addEventListener('click', function () {
      open();
    });

    videoLink.addEventListener('click', open);
    closeButton.addEventListener('click', close);
    backdrop.addEventListener('click', close);
  }
}

const showVideo = new ShowVideo();

class ReadMore {
  constructor() {
    const detailed = document.querySelector('.detailed');
    const readMoreBtn = document.querySelector('.read-more-btn');
    let toggle = false;

    readMoreBtn.addEventListener('click', function () {
      toggle = toggle === true ? false : true;

      if (toggle === true) {
        detailed.style.maxHeight = `${detailed.scrollHeight}px`;
        detailed.style.opacity = '1';
        readMoreBtn.textContent = 'Read Less';
      }

      if (toggle === false) {
        detailed.style.maxHeight = '0';
        detailed.style.opacity = '0';
        readMoreBtn.textContent = 'Read More';
      }
    });
  }
}

const readMore = new ReadMore();

class BackgroundSwitch {
  constructor() {
    let turn = 0;

    const hero = document.querySelector('.section-house-hero');

    setInterval(function () {
      turn = turn === 11 ? 0 : turn + 1;
      hero.style.backgroundImage = `url('/img/house-listing/${turn + 1}.jfif')`;
    }, 10000);
  }
}

const backgroundSwitch = new BackgroundSwitch();

class PictureSwitcher {
  constructor() {
    const allImages = document.querySelectorAll('.property-carousel__img');
    const carouselOptions = document.querySelector('.carousel-options');
    let activeSlide = 1;
    const moveLeft = document.querySelector('.move-left');
    const moveRight = document.querySelector('.move-right');
    const lastSlide = allImages.length;
    const carouselSection = document.querySelector('.property-carousel');

    let timer;

    const showSlide = function () {
      allImages.forEach(function (el) {
        el.style.opacity = '0';

        if (Number(el.dataset.pic) === activeSlide) {
          el.style.opacity = '1';
        }
      });
    };

    const moveToNext = function () {
      activeSlide = activeSlide === lastSlide ? 1 : activeSlide + 1;
      showSlide();
    };

    const moveToPrev = function () {
      activeSlide = activeSlide === 1 ? lastSlide : activeSlide - 1;
      showSlide();
    };

    showSlide();
    carouselOptions.addEventListener('click', function (e) {
      if (e.target.classList.contains('carousel-options__box')) {
        const clicked = e.target;
        activeSlide = Number(clicked.dataset.box);

        showSlide();
      }
    });
    moveRight.addEventListener('click', moveToNext);
    moveLeft.addEventListener('click', moveToPrev);

    const startTimer = function () {
      const timer = setInterval(function () {
        moveToNext();
      }, 5000);

      return timer;
    };

    timer = startTimer();

    carouselSection.addEventListener('mouseenter', function () {
      clearInterval(timer);
      timer = null;
    });

    carouselSection.addEventListener('mouseleave', function () {
      if (!timer) {
        timer = startTimer();
      }
    });
  }
}

const pictureSwitcher = new PictureSwitcher();
