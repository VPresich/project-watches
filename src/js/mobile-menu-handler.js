import { onScrollToElement } from './scroll';
const mobileNavRef = document.querySelector('.js-mobile-nav');
const mobileMenuRef = document.querySelector('.js-mobile-menu');

mobileNavRef &&
  mobileMenuRef &&
  mobileNavRef.addEventListener('click', event => {
    event.preventDefault();
    const item = event.target;
    if (!event.target.matches('a')) return;
    const targetId = item.getAttribute('href').substring(1);
    onScrollToElement(targetId);
    mobileMenuRef.classList.remove('is-open');
  });
