console.log ('1.Смена изображений в секции portfolio +25\n2.Перевод страницы на два языка +25\n3.Переключение светлой и тёмной темы +25\n4.Дополнительный функционал: сложные эффекты для кнопки в секции hero при клике +5\nИтого: 80 баллов');

import i18Obj from './translate.js';

// constants for menu-burger
const hamburger = document.querySelector('.header-hamburger');
const hamburgerLines = document.querySelectorAll('.line');
const headerNav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.nav-link');

// constants for changing images in the portfolio section
const portfolioBtnsContainer = document.querySelector('.portfolio-buttons');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-img');

// constants for buttons effect
const btns = document.querySelectorAll('.button');

// constants for translate en/ru
const headerLangContainer = document.querySelector('.header-languages');
const dataArr = document.querySelectorAll('[data-i18]');
const btnsLanguage = document.querySelectorAll('.header-button');

// constants for change theme
const headerLogo = document.querySelector('.header-logo');
const headerBtnToogleTheme = document.querySelector('.header-button-theme');
const headerImgBg = document.querySelector('.header-container');
const heroImgBg = document.querySelector('.hero-container');
const heroBtn = document.querySelector('.hero-button');
const contactsImgBg = document.querySelector('.container-contacts');
const contactsBtn = document.querySelector('.contacts-button');
const elemArr = [headerLogo, headerBtnToogleTheme, headerImgBg, heroImgBg, heroBtn, contactsImgBg, contactsBtn];

const priceBtns = document.querySelectorAll('.price-button');
const footerBtns = document.querySelectorAll('.footer-item');

//MENU-BURGER
function toogleClassOpen () {
    hamburger.classList.toggle('open');
    headerNav.classList.toggle('open');
}
hamburger.addEventListener('click', toogleClassOpen);

function addHoverEffectHamburger (event) {
    hamburgerLines.forEach(line => {
        if(event.target.classList.contains('open')) {
            line.classList.add('open-hover');
        } /*else {
            line.classList.add('hover');
        }*/
    });
}
hamburger.addEventListener('mouseenter', addHoverEffectHamburger);

function removeHoverEffectHamburger () {
    hamburgerLines.forEach(line => {
        line.classList.remove('hover');
        line.classList.remove('open-hover');
    });
}
hamburger.addEventListener('mouseleave', removeHoverEffectHamburger);

function removeClassOpen (event) {
    if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('open');
        headerNav.classList.remove('open');
    }
}
navLinks.forEach((link) => link.addEventListener('click', removeClassOpen));

//BUTTONS EFFECT
btns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;
      
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
      
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
      
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
      
        btn.appendChild(circle);
      
        setTimeout(() => circle.remove(), 500);
    })
}) 

// ADD CLASS 'active'
function changeClassActive (event, arrElements) {
    arrElements.forEach((elem) => elem.classList.remove('active'));
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

// CHANGE THEME
function changeTheme (event) {
    if (event.target.classList.contains('dark-theme')) {
        document.documentElement.style.setProperty('--color-body', '#ffffff');
        document.documentElement.style.setProperty('--color-text', '#1C1C1C');
        document.documentElement.style.setProperty('--color-text-section', '#1C1C1C');
        document.documentElement.style.setProperty('--color-hover-header', '#ffffff');
        document.documentElement.style.setProperty('--color-hover-burger', '#ffffff');
        document.documentElement.style.setProperty('--color-line-title', '#1C1C1C');
        document.documentElement.style.setProperty('--color-input-bg', 'rgba(255, 255, 255, 0.5)');   
    } else {
        document.documentElement.style.setProperty('--color-body', '#000000');
        document.documentElement.style.setProperty('--color-text', '#ffffff');
        document.documentElement.style.setProperty('--color-text-section', '#bdae82');
        document.documentElement.style.setProperty('--color-hover-header', '#bdae82');
        document.documentElement.style.setProperty('--color-hover-burger', '#bdae82');
        document.documentElement.style.setProperty('--color-line-title', '#bdae82');
        document.documentElement.style.setProperty('--color-input-bg', 'rgba(0, 0, 0, 0.5)');   
    }

    headerBtnToogleTheme.classList.toggle('dark-theme');

    elemArr.forEach((el) => el.classList.toggle('light-theme'));
    portfolioBtns.forEach((el) => el.classList.toggle('light-theme'));
    priceBtns.forEach((el) => el.classList.toggle('light-theme'));
    footerBtns.forEach((el) => el.classList.toggle('light-theme'));
}
headerBtnToogleTheme.addEventListener('click', changeTheme);

//IMAGES CACHING
function preloadImages () {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];

    seasons.forEach(el => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();

            img.src = `./assets/img/${el}/${i}.jpg`;
        }
    })
}
preloadImages();