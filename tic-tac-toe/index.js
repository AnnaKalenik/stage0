const gameTickTackToe = function () {

    let game = document.querySelector('.main'),
        nextStep = 0;
   
    //создание игровой области
    const area = document.createElement('div');
    area.classList.add('area');
    game.appendChild(area);

    //создание игровой области
    const whoseMove = document.createElement('div');
    whoseMove.classList.add('player');
    whoseMove.innerHTML = 'Play "x"';
    game.appendChild(whoseMove);

    //создание 9 ячеек
    for(let i = 0; i < 9; i++) {
        area.innerHTML += '<div class="cell"></div>';  
    }

    //добавление Х и O по клику
    area.addEventListener('click', function(event) {
        if (event.target.innerHTML != '') return;
        if (document.querySelector('.victory')) return;

        if (nextStep % 2 == 0) {
            event.target.innerHTML = 'x';
            whoseMove.innerHTML = 'Play "o"';
        } else {
            event.target.innerHTML = 'o';
            whoseMove.innerHTML = 'Play "x"'; 
        }  

        nextStep++;

        checkWin();
    });

    //проверка совпадений и объявление победителя
    const checkWin = function(event) {

        const arr = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        const cells = document.querySelectorAll('.cell'),
            windVictory = document.createElement('div');

        game.appendChild(windVictory);

        for(let i = 0; i < arr.length; i++) {
            if (cells[arr[i][0]].innerHTML == 'x' && cells[arr[i][1]].innerHTML == 'x' && cells[arr[i][2]].innerHTML == 'x') {
                windVictory.classList.add('victory');
                windVictory.innerHTML = '"x" won!';

                setTimeout(function(){
                    window.location.reload()
                }, 3000);
            }
            else if(cells[arr[i][0]].innerHTML == 'o' && cells[arr[i][1]].innerHTML == 'o' && cells[arr[i][2]].innerHTML == 'o') {
                windVictory.classList.add('victory');
                windVictory.innerHTML = '"o" won!';

                setTimeout(function(){
                    window.location.reload()
                }, 3000);
            }
            else if(nextStep == 9) {
                    setTimeout(function(){
                    window.location.reload()
                }, 3000);
            };
        };
    };   
};

window.addEventListener('load', function() {
    gameTickTackToe();
});