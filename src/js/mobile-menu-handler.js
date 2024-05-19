const mobileNavRef = document.querySelector('.js-mobile-nav');
const mobileMenuRef = document.querySelector('.js-mobile-menu');

mobileNavRef &&
  mobileMenuRef &&
  mobileNavRef.addEventListener('click', (event) => {
    if (!event.target.matches('a')) return;
    mobileMenuRef.classList.remove('is-open');
  });
