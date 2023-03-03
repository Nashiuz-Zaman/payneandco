'use strict';

class SearchBox {
  constructor() {
    const button = document.querySelector('.expand-search');
    const buttonMoreOptions = document.querySelector('.button-more-options');
    const hiddenSearchBar = document.querySelector('.hidden-parameters');
    let isExpanded = false;

    const openHidden = function () {
      hiddenSearchBar.style.maxHeight = `${hiddenSearchBar.scrollHeight}px`;
      hiddenSearchBar.style.opacity = '1';
    };
    const closeHidden = function () {
      hiddenSearchBar.style.maxHeight = '0';
      hiddenSearchBar.style.opacity = '0';
    };

    closeHidden();

    buttonMoreOptions.addEventListener('click', function () {
      isExpanded = isExpanded === false ? true : false;

      if (isExpanded === true) {
        openHidden();
      } else {
        closeHidden();
      }
    });

    button.addEventListener('click', function () {
      isExpanded = isExpanded === false ? true : false;

      if (isExpanded === true) {
        openHidden();
      } else {
        closeHidden();
      }
    });
  }
}

const searchBox = new SearchBox();

class SearchFilters {
  constructor() {
    const searchFiltersBtn = document.querySelector('.mobile-search-button');
    const hiddenSearchBar = document.querySelector('.hidden-parameters');
    const parameters = document.querySelector('.section-parameters');
    let toggle = false;

    const closeParameters = function () {
      parameters.style.maxHeight = '0';
      parameters.style.paddingBottom = '0';

      hiddenSearchBar.style.maxHeight = '0';
    };

    const openParameters = function () {
      parameters.style.maxHeight = `${
        parameters.scrollHeight + hiddenSearchBar.scrollHeight + 20
      }px`;
      parameters.style.paddingBottom = '2rem';
    };

    searchFiltersBtn.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        toggle = toggle === false ? true : false;

        if (toggle === true) {
          openParameters();
        } else {
          closeParameters();
        }
      }
    });
  }
}

const searchFilters = new SearchFilters();
