console.log ('1.Вёрстка соответствует макету. Ширина экрана 768px +48\n2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n3.На ширине экрана 768рх и меньше реализовано адаптивное меню +22\nИтого: 75 баллов');

import i18Obj from './translate.js';

// constants for menu-burger
const hamburger = document.querySelector('.header-hamburger');
const headerContainer = document.querySelector('.header-container');
const headerNav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.nav-link');

// constants for changing images in the portfolio section
const portfolioBtnsContainer = document.querySelector('.portfolio-buttons');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-img');

// constants for translate en/ru
const headerLangContainer = document.querySelector('.header-languages');
const dataArr = document.querySelectorAll('[data-i18]');
const btnsLanguage = document.querySelectorAll('.header-button');

//MENU-BURGER
function toogleClassOpen () {
    hamburger.classList.toggle('open');
    headerNav.classList.toggle('open');
    headerContainer.classList.toggle('open');
}
hamburger.addEventListener('click', toogleClassOpen);

function removeClassOpen (event) {
    if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('open');
        headerNav.classList.remove('open');
    }
}
navLinks.forEach((link) => link.addEventListener('click', removeClassOpen));

// ADD CLASS 'active'
function changeClassActive (event, elementsContainer) {
    elementsContainer.forEach((elem) => elem.classList.remove('active'));
    event.target.classList.add('active');
}

// CHANGING IMAGES in the portfolio section
function changeImage (event) {
    if (event.target.classList.contains('portfolio-btn')) {
        const dataSeason = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${dataSeason}/${index + 1}.jpg`);

        changeClassActive(event, portfolioBtns);
    }
}
portfolioBtnsContainer.addEventListener('click', changeImage);

// TRANSLATE en/ru
function getTranslate (event) {
    if (event.target.classList.contains('header-button')) {
        dataArr.forEach((elem) => {
            const language = event.target.textContent;
            elem.textContent = i18Obj[language][elem.dataset.i18];

            if(elem.placeholder) {
                elem.placeholder = i18Obj[language][elem.dataset.i18];
                elem.textContent = '';
            }

            changeClassActive(event, btnsLanguage);
        });
    }
}
headerLangContainer.addEventListener('click', getTranslate);
