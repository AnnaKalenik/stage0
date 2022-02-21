const gameTickTackToe = () => {
    const containerBgrMusic = document.querySelector('.header-item-track');

    const containerShortTracks = document.querySelector('.header-item-shorttrack');
    const clickAudio = document.querySelector('.header-click-audio');
    const messageAudio = document.querySelector('.header-message-audio');

    const playingArea = document.querySelector('.main-area');
    const cellsArr = document.querySelectorAll('.main-cell');
    const message = document.querySelector('.main-message');
    const whoseMove = document.querySelector('.main-player');
    const buttonReset = document.querySelector('.main-reset');
    let nextStep = 0;
    let xStep = 0;
    let oStep = 0;

    const toggleBgrMusic = (event) => {
        const bgrMusicAudio = document.querySelector('.header-track-audio');

        if (event.target.classList.contains('toggle')) {
            bgrMusicAudio.pause();
            containerBgrMusic.classList.remove('toggle');
        } else {
            bgrMusicAudio.play();
            bgrMusicAudio.volume = 0.1;
            containerBgrMusic.classList.add('toggle');
        }
    }
    containerBgrMusic.addEventListener('click', toggleBgrMusic);

    const toggleShortTracks = () => {
        containerShortTracks.classList.toggle('toggle');
        playShortTracks(clickAudio, messageAudio);
    }
    containerShortTracks.addEventListener('click', toggleShortTracks);

    const playShortTracks = (...elements) => {
        const containerShortTracksToggle = document.querySelector('.header-item-shorttrack.toggle');

        for(let el of elements) {
            if (!containerShortTracksToggle) {
                el.pause(); 
            } else if (containerShortTracksToggle) {
                el.play();
                el.volume = 0.1;    
            }
        }
    }

    const addXandO = (event) => {
        if (event.target.innerHTML != '') return;
        if (document.querySelector('.active')) return;

        if (nextStep % 2 == 0) {
            event.target.innerHTML = 'x';
            whoseMove.innerHTML = 'Plays "O"';
            xStep++;
        } else {
            event.target.innerHTML = 'o';
            whoseMove.innerHTML = 'Plays "X"'; 
            oStep++;
        }  

        nextStep++;
        playShortTracks(clickAudio);
        checkWin();
    }

    playingArea.addEventListener('click', addXandO);

    const addData = (player, steps) => {
        const togglePlayer = document.querySelector('.main-toggle-player');
        const countSteps = document.querySelector('.main-steps');

        togglePlayer.innerHTML = `${player}`;
        countSteps.innerHTML = `in ${steps} steps`;
        message.classList.add('active');
        whoseMove.innerHTML = 'Round over'; 
        playShortTracks(messageAudio);
    }

    const checkWin = () => {
        const combArr = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        for(let i = 0; i < combArr.length; i++) {  
            const conditionX = cellsArr[combArr[i][0]].innerHTML === 'x' && cellsArr[combArr[i][1]].innerHTML === 'x' && cellsArr[combArr[i][2]].innerHTML === 'x';
            const conditionO = cellsArr[combArr[i][0]].innerHTML === 'o' && cellsArr[combArr[i][1]].innerHTML === 'o' && cellsArr[combArr[i][2]].innerHTML === 'o';
            
            if (conditionX) addData('X', xStep);
            else if(conditionO) addData('O', oStep);
            // else if(nextStep === 9) addData('Friendship', '');
        };
    }; 

    const updateArea = () => {
        for (let i = 0; i < cellsArr.length; i++) {
            cellsArr[i].innerHTML = ''; 
        }
        whoseMove.innerHTML = 'Plays "X"'; 
        message.classList.remove('active');
        nextStep = 0;
        xStep = 0;
        oStep = 0;
    }
    buttonReset.addEventListener('click', updateArea)
};

window.addEventListener('load', function() {
    gameTickTackToe();
});