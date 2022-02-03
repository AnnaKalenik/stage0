const player = document.querySelector('.player');
const video = document.querySelector('.player-video');

const btnBigPlay = document.querySelector('.player-big-button-play');
const btnPlay = document.querySelector('.player-button-play');
const btnSound = document.querySelector('.player-button-sound');

const inputPlay = document.querySelector('.player-button-sound');
const inputSound = document.querySelector('.player-button-sound');
const arrProgressInputs = document.querySelectorAll('.player-progress');

video.addEventListener('click', toggleVideo);
btnBigPlay.addEventListener('click', toggleVideo);
btnPlay.addEventListener('click', toggleVideo);

function toggleVideo() {
    video.paused ? video.play() : video.pause();
}



// btnPlay.classList.toggle('toggle');
// btnSound.classList.toggle('toggle');
// btnBigPlay.classList.add('transparent');

arrProgressInputs.forEach((input) => input.addEventListener('input', updateProgress));

function updateProgress() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #d6eee2 0%, #c2f0da ${value}%, #fff ${value}%, #fff 100%)`;
}
