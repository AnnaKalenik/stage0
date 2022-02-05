const player = document.querySelector('.player');
const video = document.querySelector('.player-video');

const btnBigPlay = document.querySelector('.player-big-button-play');
const btnPlay = document.querySelector('.player-button-play');
const btnSound = document.querySelector('.player-button-sound');

const playerLoading = document.querySelector('.player-loading');
const playerLoadingBar = document.querySelector('.player-loading-bar');
const inputSound = document.querySelector('[name="volume"]');

video.addEventListener('click', toggleVideo);
btnBigPlay.addEventListener('click', toggleVideo);
btnPlay.addEventListener('click', toggleVideo);
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

video.addEventListener('timeupdate', updatelLoading)
function updatelLoading() {
    const percent = (video.currentTime / video.duration) * 100;
    playerLoadingBar.style.flexBasis = `${percent}%`;
}

playerLoading.addEventListener('click', handleLoading);
function handleLoading(e) {
    const handleTime = (e.offsetX / playerLoading.offsetWidth) * video.duration;
    console.log(e.offsetX);
    video.currentTime = handleTime;
}

video.addEventListener('ended', isVideoEnded);
function isVideoEnded() {
    if (video.ended) {
        btnPlay.classList.remove('toggle');
        btnBigPlay.classList.remove('transparent');
        playerLoadingBar.style.flexBasis = '0%';
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

inputSound.addEventListener('input', updateProgress);
function updateProgress() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #d6eee2 0%, #c2f0da ${value * 100}%, rgba(255, 255, 255, 0.4) ${value * 100}%, rgba(255, 255, 255, 0.4) 100%)`;
}