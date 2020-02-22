"use strict";
export default () => {
    const dropDown = Array.from(document.querySelectorAll('.catalog-menu__link'));
    const mainLink = document.querySelector('.site-menu__link--dropdown');
    const categories = Array.from(document.querySelectorAll('.category__filter'));

    dropDown.forEach(item => {
        item.addEventListener('click', () => {
           categories.forEach(category => {
            if(item.dataset.id === category.id){
                category.click();
            } 
           })
        })
    })
}