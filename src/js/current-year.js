const currentYear = () => new Date().getFullYear();
const currYearRef = document.querySelector('.js-year');

if (currYearRef) currYearRef.textContent = currentYear();
