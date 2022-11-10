import * as _ from 'lodash';
import '../styles/style.scss';
import { gameBoard, Ship, BoardArray } from './gameBoard';
import { startCoordArray, homePage, boat } from './homepage';
import { enemyBoard } from './aiBoard'
import { enemyChance } from './player';


function game(board: HTMLDivElement, boardArray: BoardArray[][], playerShip: Ship[]) {
    let enemyArray = gameBoard.createBoard()
    let enemyShips: Ship[] = boat()
    let exp: Ship[] = []
    enemyShips.forEach(ship => {
        exp.push(ship)
    })
    let main = document.querySelector('body') as HTMLBodyElement
    main.innerHTML = ''
    main.appendChild(board)
    enemyBoard(enemyArray, enemyShips)
    playGame(boardArray, playerShip, enemyArray, exp)

}

function clickHandler(boardArray: BoardArray[][], shipsArray: Ship[]) {
    let cells = document.querySelectorAll('.enemy-cell');
    console.log(shipsArray)
    cells.forEach(div => {
        div.addEventListener('click', (e) => {
            const target = e.target as HTMLDivElement
            let coordinates: string = target.id
            let coordArray: number[] = startCoordArray(coordinates)
            if (boardArray[coordArray[0]][coordArray[1]].attacked === false) {
                target.style.background = 'red'
                gameBoard.receiveAttack(coordArray, boardArray)
            }
        })
    })
}

function isGameOver(shipsArray: Ship[], array: BoardArray[][]) {
    for (let i = 0; i <= shipsArray.length; i++) {
        if (shipsArray[i].isSunk === true) return true
        return false
    }
}


function playGame(humanArray: BoardArray[][], humanShips: Ship[], enemyArray: BoardArray[][], enemyShips: Ship[]) {
    console.log({ humanArray })
    console.log({ humanShips })
    console.log({ enemyArray })
    console.log({ enemyShips })
    let isGameOn = true
    let turn = "human"
    while (isGameOn) {
        if (turn == 'human') {
            if (!isGameOver(enemyShips, enemyArray)) {
                clickHandler(humanArray, humanShips)
                turn= 'computer'
            } else {
                isGameOn = false

            }
        }
        if (turn == 'computer') {
            if (!isGameOver(humanShips, humanArray)) {
                enemyChance(enemyArray);
                turn = 'human'
            } else {
                isGameOn = false
            }
        }
    }
}

(function startGame() {
    homePage()
})()
export { game, isGameOver } 