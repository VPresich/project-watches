import { onScrollDown } from "./scroll";

const scrollDownBtn = document.querySelector('.js-hero-scroll');
scrollDownBtn && scrollDownBtn.addEventListener('click', onScrollDown);