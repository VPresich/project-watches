import { onScrollUp, onScrollToElement } from './scroll';

const scrollUpBtn = document.querySelector('.js-footer-scroll');
scrollUpBtn && scrollUpBtn.addEventListener('click', onScrollUp);

const footerMenuRef = document.querySelector('.js-footer-menu');

footerMenuRef &&
  footerMenuRef.addEventListener('click', event => {
    const item = event.target;
    if (!item.matches('a')) return;
    event.preventDefault();
    const targetId = item.getAttribute('href').substring(1);
    onScrollToElement(targetId);
  });
