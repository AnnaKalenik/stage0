const player = document.querySelector('.player');
const video = document.querySelector('.player-video');

const btnBigPlay = document.querySelector('.player-big-button-play');
const btnPlay = document.querySelector('.player-button-play');
const btnSound = document.querySelector('.player-button-sound');

const inputPlay = document.querySelector('[name="playback"]');
const inputSound = document.querySelector('[name="volume"]');
const arrProgressInputs = document.querySelectorAll('.player-progress');

let progression;

video.addEventListener('click', toggleVideo);
btnBigPlay.addEventListener('click', toggleVideo);
btnPlay.addEventListener('click', toggleVideo);
function toggleVideo() {
    if (video.paused) {
        video.play();
        // updateCurrentPosVideo();
        // progression = window.setInterval(inputPlay.addEventListener('input', updateProgressVideo),200);
        btnPlay.classList.add('toggle');
        btnBigPlay.classList.add('transparent');
    } else {
        video.pause();
        // clearInterval(progression);
        btnPlay.classList.remove('toggle');
        btnBigPlay.classList.remove('transparent');
    }
}

// inputPlay.addEventListener('change', updateCurrentPosVideo);
// function updateCurrentPosVideo() {
//     const value = inputPlay.value;
//     video.currentTime = value * video.duration;
// }

video.addEventListener('ended', isVideoEnded);
function isVideoEnded() {
    if (video.ended) {
        btnPlay.classList.remove('toggle');
        btnBigPlay.classList.remove('transparent');
        inputPlay.value = '0';
    }
}

btnSound.addEventListener('click', toggleSound);
function toggleSound() {
    btnSound.classList.toggle('toggle');
    video.volume != 0 ? video.volume = 0 : video.volume = inputSound.value;
} 

inputSound.addEventListener('change', updateSound);
function updateSound() {
    const value = this.value;
    video.volume = value;
    isVolDisable();
}

function isVolDisable() {
    inputSound.value === '0' ? btnSound.classList.add('toggle') : btnSound.classList.remove('toggle');
}

arrProgressInputs.forEach((input) => input.addEventListener('input', updateProgress));
function updateProgress() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #d6eee2 0%, #c2f0da ${value * 100}%, #fff ${value * 100}%, #fff 100%)`;
}