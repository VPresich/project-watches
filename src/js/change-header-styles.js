const headerRef = document.querySelector('.header-page');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 100) {
    headerRef.classList.add('header-page-mini');
  } else {
    headerRef.classList.remove('header-page-mini');
  }
});
