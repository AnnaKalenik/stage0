const player = document.querySelector('.player');
const video = document.querySelector('.player-video');

const btnBigPlay = document.querySelector('.player-big-button-play');
const btnPlay = document.querySelector('.player-button-play');
const btnSound = document.querySelector('.player-button-sound');
const btnScreen = document.querySelector('.player-button-fullscreen');

const playerLoading = document.querySelector('.player-loading');
const playerLoadingBar = document.querySelector('.player-loading-bar');
const inputSound = document.querySelector('[name="volume"]');

video.addEventListener('click', toggleVideo);
btnBigPlay.addEventListener('click', toggleVideo);
btnPlay.addEventListener('click', toggleVideo);

let mousedown = false;
video.addEventListener('timeupdate', updatelLoading)
playerLoading.addEventListener('click', handleLoading);
playerLoading.addEventListener('mousedown', () => mousedown = true);
playerLoading.addEventListener('mousemove', (e) => mousedown && handleLoading(e));
playerLoading.addEventListener('mouseup', () => mousedown = false);
video.addEventListener('ended', isVideoEnded);

btnSound.addEventListener('click', toggleSound);
inputSound.addEventListener('change', updateSound);
inputSound.addEventListener('input', updateProgress);

btnScreen.addEventListener('click', toggleScreen);

function toggleVideo() {
    if (video.paused) {
        video.play();
        btnPlay.classList.add('toggle');
        btnBigPlay.classList.add('transparent');
    } else {
        video.pause();
        btnPlay.classList.remove('toggle');
        btnBigPlay.classList.remove('transparent');
    }
}

function updatelLoading() {
    const percent = (video.currentTime / video.duration) * 100;
    playerLoadingBar.style.flexBasis = `${percent}%`;
}

function handleLoading(e) {
    const handleTime = (e.offsetX / playerLoading.offsetWidth) * video.duration;
    video.currentTime = handleTime;
}

function isVideoEnded() {
    if (video.ended) {
        btnPlay.classList.remove('toggle');
        btnBigPlay.classList.remove('transparent');
    }
}

function toggleSound() {
    btnSound.classList.toggle('toggle');
    video.volume != 0 ? video.volume = 0 : video.volume = inputSound.value;
} 

function updateSound() {
    const value = this.value;
    video.volume = value;
    isVolDisable();
}

function isVolDisable() {
    inputSound.value === '0' ? btnSound.classList.add('toggle') : btnSound.classList.remove('toggle');
}

function updateProgress() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #d6eee2 0%, #c2f0da ${value * 100}%, rgba(255, 255, 255, 0.4) ${value * 100}%, rgba(255, 255, 255, 0.4) 100%)`;
}

function toggleScreen() {
    if (video.webkitSupportsFullscreen) video.webkitEnterFullScreen()
}