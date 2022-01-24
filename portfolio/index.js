console.log ('1.Вёрстка соответствует макету. Ширина экрана 768px +48\n2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n3.На ширине экрана 768рх и меньше реализовано адаптивное меню +22\nИтого: 75 баллов');

const hamburger = document.querySelector('.header-hamburger');
const headerContainer = document.querySelector('.header-container');
const headerNav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.nav-link'); 

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    headerNav.classList.toggle('open');
    headerContainer.classList.toggle('open');
});

navLinks.forEach((el) => el.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('open');
        headerNav.classList.remove('open');
    }
}))