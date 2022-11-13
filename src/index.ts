import * as _ from 'lodash';
import '../styles/style.scss';
import { gameBoard, Ship, BoardArray } from './gameBoard';
import { startCoordArray, homePage, boat } from './homepage';
import { enemyBoard } from './aiBoard'
import { enemyChance } from './player';
import { gameOver } from './gameover'

function game(board: HTMLDivElement, boardArray: BoardArray[][], playerShip: Ship[]) {
    let enemyArray = gameBoard.createBoard()
    let enemyShips: Ship[] = boat()
    let enemyShipArray: Ship[] = []
    enemyShips.forEach(ship => {
        enemyShipArray.push(ship)
    })
    let main = document.querySelector('.container') as HTMLBodyElement
    main.innerHTML = ''
    let gameBoardDiv = document.createElement("div")
    gameBoardDiv.classList.add('game')
    gameBoardDiv.setAttribute("id", 'gameBoardDiv')
    main.appendChild(gameBoardDiv)
    gameBoardDiv.appendChild(board)
    enemyBoard(enemyArray, enemyShips)
    playGame(boardArray, playerShip, enemyArray, enemyShipArray)

}

function clickHandler(boardArray: BoardArray[][], shipsArray: Ship[], humanArray: BoardArray[][], humanShips: Ship[]) {
    let cells = document.querySelectorAll('.enemy-cell');
    cells.forEach(div => {
        div.addEventListener('click', (e) => {
            const target = e.target as HTMLDivElement
            let coordinates: string = target.id
            let coordArray: number[] = startCoordArray(coordinates)
            if (!humanShips.every(isGameOver) && !shipsArray.every(isGameOver)) {
                if (boardArray[coordArray[0]][coordArray[1]].attacked === false) {
                    target.classList.add("attacked")
                    gameBoard.receiveAttack(coordArray, boardArray)
                    if (boardArray[coordArray[0]][coordArray[1]].occupied) {
                        target.classList.remove('attacked')
                        target.classList.add('hit')
                        playGame(humanArray, humanShips, boardArray, shipsArray)
                    }
                    else {
                        enemyChance(humanArray)
                    }
                }
            }
        })
    })
}
function whoWon(humanShip: Ship[], enemyShip: Ship[]) {
    let winner: string = '';
    if (humanShip.every(isGameOver)) {
        winner = "Machines won this war"
    }
    if (enemyShip.every(isGameOver)) {
        winner = "Hurrah! you won you saved the humanity"
    }
    return winner
}


function isGameOver(element: Ship, index: number, arr: Ship[]) {
    return element.isSunk === true
}

function playGame(humanArray: BoardArray[][], humanShips: Ship[], enemyArray: BoardArray[][], enemyShips: Ship[]) {
    if (humanShips.every(isGameOver) || enemyShips.every(isGameOver)) {
        let winner = whoWon(humanShips, enemyShips);
        gameOver(winner)
    }
    clickHandler(enemyArray, enemyShips, humanArray, humanShips)
}


function startGame() {
    homePage()
}

startGame()
export { game, isGameOver, playGame, startGame } 