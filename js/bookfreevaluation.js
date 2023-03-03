'use strict';

class ModalValuationVt {
  constructor() {
    const backdrop = document.querySelector('.backdrop');

    const modalVt = document.querySelector('.section-modal-book-valuation-vt');

    const getStartedButton = document.querySelector('.get-started__button');

    getStartedButton.addEventListener('click', function () {
      modalVt.classList.add('modal-visible-vt');
      backdrop.classList.add('backdrop-visible');
    });
  }
}

const modalValuationVt = new ModalValuationVt();
