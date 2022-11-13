import {startGame} from "./index"



function gameOver(winner:string){
    const main = document.getElementById('gameBoardDiv') as HTMLDivElement;
    const gameOverDiv = document.createElement('div')
    gameOverDiv.classList.add('gameOverDiv')
    const winnerDiv = document.createElement('div');
    main.appendChild(gameOverDiv)
    winnerDiv.classList.add('winnerDiv')
    winnerDiv.innerHTML=winner
    gameOverDiv.appendChild(winnerDiv)
    const resetGameBtn = document.createElement('button')
    resetGameBtn.classList.add('resetBtn')
    resetGameBtn.setAttribute('id', 'resetGameBtn')
    resetGameBtn.innerHTML="RESET"
    gameOverDiv.appendChild(resetGameBtn)


    resetGameBtn.addEventListener('click', ()=>{
        startGame()
    })
}


export {gameOver}