export function removeActiveClass() {
  const menuItems = getHeaderMenuItems();
  if (menuItems.length === 0) return;
  menuItems.forEach(item => {
    item.classList.remove('header-menu-item-link-active');
  });
}

export function addActiveClass(item) { 
  item.classList.add('header-menu-item-link-active');
}

export function getLastElementMenu() {
  const menuItems = getHeaderMenuItems();
  if (menuItems.length === 0) return;

  return menuItems[menuItems.length - 1];
}

export function getFirstElementMenu() {
  const menuItems = getHeaderMenuItems();
  if (menuItems.length === 0) return;

  return menuItems[0];
}

function getHeaderMenuItems() {
  const headerMenuRef = document.querySelector('.js-menu');
  let menuItems = [];
  if (headerMenuRef) {
    menuItems = headerMenuRef.querySelectorAll('a');
  }
  return menuItems;
}
