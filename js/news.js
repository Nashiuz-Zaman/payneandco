'use strict';

class NewsTypeToggle {
  constructor() {
    const newsTypeList = document.querySelector('.news-type__list');

    const newsTypeLinks = document.querySelectorAll('.news-type-link');

    newsTypeLinks[0].style.borderBottomColor = '#555';

    newsTypeList.addEventListener('click', function (e) {
      const clickedNewsTypeLink = e.target.closest('.news-type-link');

      newsTypeLinks.forEach(el => (el.style.borderBottomColor = 'transparent'));

      clickedNewsTypeLink.style.borderBottomColor = '#555';
    });
  }
}

const newsTypeToggle = new NewsTypeToggle();
