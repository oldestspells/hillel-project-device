import {showSection, hideSection} from './utils';

export default () => {
    const cartPopupLink = document.querySelector(`.user-menu__item--cart`);
    const cartPopup = document.querySelector(`.cart-popup`);
    const cartPopupCloseBtn = cartPopup.querySelector(`.cart__close`);
    const cartPageLink = cartPopup.querySelector(`.cart__btn`);

  cartPopupLink.addEventListener(`click`, () => {
    showSection(cartPopup);
  });
  cartPopupCloseBtn.addEventListener(`click`, () => {
    hideSection(cartPopup);
  });
  cartPageLink.addEventListener(`click`, () => {
    hideSection(cartPopup);
  });
}
