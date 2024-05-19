import { removeActiveClass, addActiveClass } from './menu-item.js';

import { onScrollToElement } from './scroll.js';

const headerMenuRef = document.querySelector('.js-menu');

headerMenuRef &&
  headerMenuRef.addEventListener('click', event => {
    const item = event.target;
    if (!item.matches('a')) return;
    event.preventDefault();
    removeActiveClass();
    addActiveClass(item);
    const targetId = item.getAttribute('href').substring(1);
    onScrollToElement(targetId);
  });
