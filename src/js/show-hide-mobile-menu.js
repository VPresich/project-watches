const buttonMenuRef = document.querySelector('.js-open-mobile-menu-button');
const mobileMenuRef = document.querySelector('.js-mobile-menu');
const buttonCloseMenuRef = document.querySelector(
  '.js-close-mobile-menu-button'
);

buttonMenuRef &&
  mobileMenuRef &&
  buttonMenuRef.addEventListener('click', () => {
    mobileMenuRef.classList.add('is-open');
  });

buttonCloseMenuRef &&
  mobileMenuRef &&
  buttonCloseMenuRef.addEventListener('click', () => {
    mobileMenuRef.classList.remove('is-open');
  });
