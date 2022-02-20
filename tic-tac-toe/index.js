const gameTickTackToe = () => {
    
    const playingArea = document.querySelector('.main-area');
    let nextStep = 0;
   
    const addXandO = (event) => {
        const whoseMove = document.querySelector('.main-player');

        if (event.target.innerHTML != '') return;
        if (document.querySelector('.active')) return;

        if (nextStep % 2 == 0) {
            event.target.innerHTML = 'x';
            whoseMove.innerHTML = 'Plays "O"';
        } else {
            event.target.innerHTML = 'o';
            whoseMove.innerHTML = 'Plays "X"'; 
        }  
        nextStep++;

        checkWin();
    }

    playingArea.addEventListener('click', addXandO);

    const checkWin = () => {
        const cellsArr = document.querySelectorAll('.main-cell');
        const message = document.querySelector('.main-message');
        const togglePlayer = document.querySelector('.main-toggle-player');

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
            if (cellsArr[combArr[i][0]].innerHTML === 'x' && cellsArr[combArr[i][1]].innerHTML === 'x' && cellsArr[combArr[i][2]].innerHTML === 'x') {
                message.classList.add('active');
                togglePlayer.innerHTML = 'X';

                setTimeout(function(){
                    window.location.reload()
                }, 4000);
            }
            else if(cellsArr[combArr[i][0]].innerHTML === 'o' && cellsArr[combArr[i][1]].innerHTML === 'o' && cellsArr[combArr[i][2]].innerHTML === 'o') {
                message.classList.add('active');
                togglePlayer.innerHTML = 'O';

                setTimeout(function(){
                    window.location.reload()
                }, 4000);
            }
            else if(nextStep === 9) {
                message.classList.add('active');
                togglePlayer.innerHTML = 'Friendship';

                setTimeout(function(){
                    window.location.reload()
                }, 4000);
            };
        };
    };   
};

window.addEventListener('load', function() {
    gameTickTackToe();
});