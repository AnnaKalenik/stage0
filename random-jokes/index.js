const body = document.getElementsByTagName('body');
const button = document.querySelector('.main-btn');
const quote = document.querySelector('.main-quote');
const author = document.querySelector('.main-author');

const url = 'https://type.fit/api/quotes';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    showRandomData(data);
}
getData();

const showRandomData = (data) => {
    const min = Math.ceil(0);
    const max = Math.floor(1642);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    quote.textContent = `«${data[randomNumber].text}»`;
    author.textContent = `© ${data[randomNumber].author}`;

    randomColor();
}

button.addEventListener('click', getData);

const randomColor = () => {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    body[0].style.backgroundColor = color;

    button.addEventListener('mouseover', () => {
        button.classList.add('active')
        button.style.color = color;
    });

    button.addEventListener('mouseout', () => {
        button.classList.remove('active')
        button.style.color = '#ffffff';
    });
}