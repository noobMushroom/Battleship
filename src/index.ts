import * as _ from 'lodash';
import '../styles/style.scss';
import { gameBoard, Ship, BoardArray } from './gameBoard';
import { startCoordArray, homePage, boat } from './homepage';
import { enemyBoard } from './aiBoard'
import { enemyChance } from './player';


function game(board: HTMLDivElement, boardArray: BoardArray[][], playerShip: Ship[]) {
    let enemyArray = gameBoard.createBoard()
    let enemyShips: Ship[] = boat()
    let enemyShipArray: Ship[] = []
    enemyShips.forEach(ship => {
        enemyShipArray.push(ship)
    })
    let main = document.querySelector('body') as HTMLBodyElement
    main.innerHTML = ''
    main.appendChild(board)
    enemyBoard(enemyArray, enemyShips)
    playGame(boardArray, playerShip, enemyArray, enemyShipArray)

}

function clickHandler(boardArray: BoardArray[][], shipsArray: Ship[], humanArray: BoardArray[][], humanShips: Ship[]) {
    let cells = document.querySelectorAll('.enemy-cell');
    console.log(shipsArray)
    cells.forEach(div => {
        div.addEventListener('click', (e) => {
            const target = e.target as HTMLDivElement
            let coordinates: string = target.id
            let coordArray: number[] = startCoordArray(coordinates)
            if (!humanShips.every(isGameOver) && !shipsArray.every(isGameOver)) {
                if (boardArray[coordArray[0]][coordArray[1]].attacked === false) {
                    target.style.background = 'red'
                    gameBoard.receiveAttack(coordArray, boardArray)
                    if (boardArray[coordArray[0]][coordArray[1]].occupied) {
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

function isGameOver(element: Ship, index: number, arr: Ship[]) {
    return element.isSunk === true
}

function playGame(humanArray: BoardArray[][], humanShips: Ship[], enemyArray: BoardArray[][], enemyShips: Ship[]) {
    clickHandler(enemyArray, enemyShips, humanArray, humanShips)
}


(function startGame() {
    homePage()
})()
export { game, isGameOver, playGame } 