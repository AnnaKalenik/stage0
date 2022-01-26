console.log ('1.Вёрстка соответствует макету. Ширина экрана 768px +48\n2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n3.На ширине экрана 768рх и меньше реализовано адаптивное меню +22\nИтого: 75 баллов');

const hamburger = document.querySelector('.header-hamburger');
const headerContainer = document.querySelector('.header-container');
const headerNav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.nav-link');

const portfolioBtnsContainer = document.querySelector('.portfolio-buttons');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-img');

//Menu-burger
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

// Changing images in the portfolio section
function changeImage (event) {
    if (event.target.classList.contains('portfolio-btn')) {
        let dataSeason = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${dataSeason}/${index + 1}.jpg`);

        portfolioBtns.forEach((btn) => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
}
portfolioBtnsContainer.addEventListener('click', changeImage);

