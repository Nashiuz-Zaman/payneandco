'use strict';

class PostCodeEvaluation {
  constructor() {
    const findButton = document.querySelector('.find-post-code');

    const inputBox = document.querySelector('.post-code-box');

    inputBox.addEventListener('keyup', function () {
      if (inputBox.value.trim() !== '') {
        findButton.disabled = false;
      } else {
        findButton.disabled = true;
      }
    });
  }
}

const postCodeEvaluation = new PostCodeEvaluation();

class ToggleInfoBoxHz {
  constructor() {
    const noAddressButton = document.querySelector('.no-address');
    const backToAddressButton = document.querySelector('.back-to-address');
    const postCodeBox = document.querySelector('.post-code');
    const hiddenAddressBox = document.querySelector('.hidden-address-box');

    let postCodeBoxToggle = false;
    hiddenAddressBox.style.display = 'none';

    noAddressButton.addEventListener('click', function () {
      postCodeBoxToggle = true;

      if (postCodeBoxToggle === true) {
        postCodeBox.style.display = 'none';
        hiddenAddressBox.style.display = 'block';
      }
    });

    backToAddressButton.addEventListener('click', function () {
      postCodeBoxToggle = false;

      if (postCodeBoxToggle === false) {
        postCodeBox.style.display = 'flex';
        hiddenAddressBox.style.display = 'none';
      }
    });
  }
}

const toggleInfoBoxHz = new ToggleInfoBoxHz();

class ModalValuation {
  constructor() {
    const backdrop = document.querySelector('.backdrop');
    const modalHz = document.querySelector('.section-modal-book-valuation-hz');
    const modalVt = document.querySelector('.section-modal-book-valuation-vt');
    const closeModalButton = document.querySelectorAll('.button-closemodal');
    const openModalButton = document.querySelector('.float-valuation-button');
    const getStartedButton = document.querySelector('.get-started__button');

    const closeModal = function () {
      if (modalVt.classList.contains('modal-visible-vt')) {
        modalVt.classList.remove('modal-visible-vt');
      }

      if (modalHz.classList.contains('modal-visible-hz')) {
        modalHz.classList.remove('modal-visible-hz');
      }
      backdrop.classList.remove('backdrop-visible');
    };

    openModalButton.addEventListener('click', function (e) {
      e.preventDefault();

      if (window.innerWidth <= 1024) {
        modalVt.classList.add('modal-visible-vt');
      } else {
        modalHz.classList.add('modal-visible-hz');
      }
      backdrop.classList.add('backdrop-visible');
    });

    closeModalButton.forEach(el => el.addEventListener('click', closeModal));

    backdrop.addEventListener('click', closeModal);

    // getStartedButton.addEventListener('click', function () {
    //   modalVt.classList.add('modal-visible-vt');
    //   backdrop.classList.add('backdrop-visible');
    // });
  }
}

const modalValuation = new ModalValuation();

class ToggleInfoBoxVt {
  constructor() {
    const noAddressButton = document.querySelector('.no-address-vt');
    const backToAddressButton = document.querySelector('.back-to-address-vt');
    const postCodeBox = document.querySelector('.post-code-vt');
    const hiddenAddressBox = document.querySelector('.hidden-address-box-vt');

    let postCodeBoxToggle = false;
    hiddenAddressBox.style.display = 'none';

    noAddressButton.addEventListener('click', function () {
      postCodeBoxToggle = true;

      if (postCodeBoxToggle === true) {
        postCodeBox.style.display = 'none';
        hiddenAddressBox.style.display = 'block';
      }
    });

    backToAddressButton.addEventListener('click', function () {
      postCodeBoxToggle = false;

      if (postCodeBoxToggle === false) {
        postCodeBox.style.display = 'flex';
        hiddenAddressBox.style.display = 'none';
      }
    });
  }
}

const toggleInfoBoxVt = new ToggleInfoBoxVt();

class MobileNav {
  constructor() {
    const openMobileNavBtn = document.querySelector('.mobile-nav-button');
    const mobileNav = document.querySelector('.mobile-navigation');
    const dropdownMenus = document.querySelectorAll('.mobile-dropdown-menu');
    const dropdownButtons = document.querySelectorAll(
      '.mobile-dropdown-button'
    );
    let mobileNavOpen = false;
    let aboutToggle = false;
    let lettingsToggle = false;

    openMobileNavBtn.addEventListener('click', function () {
      mobileNavOpen = mobileNavOpen === false ? true : false;

      if (mobileNavOpen === true) {
        mobileNav.style.maxHeight = `${mobileNav.scrollHeight}px`;
      } else {
        mobileNav.style.maxHeight = '0';
        aboutToggle = false;
        lettingsToggle = false;

        dropdownMenus.forEach(el => (el.style.maxHeight = '0'));
      }
    });

    dropdownButtons.forEach(function (el) {
      el.addEventListener('click', function (e) {
        const clickedMenu = e.target.closest('.mobile-dropdown-button').dataset
          .dropdownbutton;

        if (clickedMenu === 'about') {
          aboutToggle = aboutToggle === false ? true : false;

          const menuToOpen = Array.from(dropdownMenus).find(function (el) {
            return el.dataset.dropdown === clickedMenu;
          });

          if (aboutToggle === true) {
            menuToOpen.style.maxHeight = `${menuToOpen.scrollHeight}px`;
          } else {
            menuToOpen.style.maxHeight = '0';
          }
        }

        if (clickedMenu === 'lettings') {
          lettingsToggle = lettingsToggle === false ? true : false;

          const menuToOpen = Array.from(dropdownMenus).find(function (el) {
            return el.dataset.dropdown === clickedMenu;
          });

          if (lettingsToggle === true) {
            menuToOpen.style.maxHeight = `${menuToOpen.scrollHeight}px`;
          } else {
            menuToOpen.style.maxHeight = '0';
          }
        }
      });
    });
  }
}

const mobileNav = new MobileNav();
