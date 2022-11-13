import { endCoordStartCoord, boat } from "./homepage";
import { Ship, gameBoard, BoardArray } from "./gameBoard";

const board = () => {
    const enemyBoard = document.createElement('div');
    enemyBoard.classList.add('board')
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('enemy-cell');
            cellDiv.setAttribute('id', `enemy-[${i},${j}]`)
            cellDiv.setAttribute('data-occupied', 'false')
            enemyBoard.appendChild(cellDiv)
        }
    }
    return enemyBoard
}

function isValidEnemySpot(startCoord: number[], endCoord: number[], alignment: string) {
    if (endCoord[1] > 9) return false
    if (endCoord[0] > 9) return false
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            if (alignment == 'vertical') {
                let element1 = document.getElementById(`enemy-[${i - 1},${j}]`)!
                let element1_1 = document.getElementById(`enemy-[${i - 1},${j + 1}]`)!
                let element1_2 = document.getElementById(`enemy-[${i - 1},${j - 1}]`)!
                let element2 = document.getElementById(`enemy-[${i + 1},${j}]`)!
                let element2_1 = document.getElementById(`enemy-[${i + 1},${j + 1}]`)!
                let element2_2 = document.getElementById(`enemy-[${i + 1},${j - 1}]`)!
                if (element1 != null) {
                    if (element1.dataset.occupied == "occupied") return false
                }
                if (element1_1 != null) {
                    if (element1_1.dataset.occupied == "occupied") return false
                }
                if (element1_2 != null) {
                    if (element1_2.dataset.occupied == "occupied") return false
                }
                if (element2 != null) {
                    if (element2.dataset.occupied == "occupied") return false
                }
                if (element2_1 != null) {
                    if (element2_1.dataset.occupied == "occupied") return false
                }
                if (element2_2 != null) {
                    if (element2_2.dataset.occupied == "occupied") return false
                }
            }
            if (alignment == 'horizontal') {
                let element3 = document.getElementById(`enemy-[${i},${j - 1}]`)!
                let element3_1 = document.getElementById(`enemy-[${i - 1},${j - 1}]`)!
                let element3_2 = document.getElementById(`enemy-[${i + 1},${j - 1}]`)!
                let element4 = document.getElementById(`enemy-[${i},${j + 1}]`)!
                let element4_1 = document.getElementById(`enemy-[${i - 1},${j + 1}]`)!
                let element4_2 = document.getElementById(`enemy-[${i + 1},${j + 1}]`)!
                if (element3 != null) {
                    if (element3.dataset.occupied == "occupied") return false
                }
                if (element3_1 != null) {
                    if (element3_1.dataset.occupied == "occupied") return false
                }
                if (element3_2 != null) {
                    if (element3_2.dataset.occupied == "occupied") return false
                }
                if (element4 != null) {
                    if (element4.dataset.occupied == "occupied") return false
                }
                if (element4_1 != null) {
                    if (element4_1.dataset.occupied == "occupied") return false
                }
                if (element4_2 != null) {
                    if (element4_2.dataset.occupied == "occupied") return false
                }

            }
        }
    }
    return true
}

const randomNum = () => {
    let num1 = Math.floor(Math.random() * 9)
    let num2 = Math.floor(Math.random() * 9)
    return [Number(num1), Number(num2)]
}
function randomAlignment() {
    let randomArray = ['horizontal', 'vertical']
    let randNumber = Math.floor(Math.random() * 2)
    return randomArray[randNumber]
}



// generating random spot for ai boats
const randomSpot = (array: BoardArray[][], shipArray: Ship[]) => {
    let ships = shipArray
    while (ships.length) {
        let alignment = randomAlignment()
        let randArray = randomNum()
        let startCoord = endCoordStartCoord(randArray, ships[0], alignment).startCoord
        let endCoord = endCoordStartCoord(randArray, ships[0], alignment).endCoord
        if (isValidEnemySpot(startCoord, endCoord, alignment)) {
            enemyBoatShow(startCoord, ships[0], alignment)
            gameBoard.placeBoat(startCoord, ships[0], alignment, array)
            ships.shift()
        }
    }
}


function enemyBoatShow(coord: number[], boat: Ship, alignment: string) {
    let startCoord: number[] = endCoordStartCoord(coord, boat, alignment).startCoord;
    let endCoord: number[] = endCoordStartCoord(coord, boat, alignment).endCoord;
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            let shipDiv = document.getElementById(`enemy-[${i},${j}]`) as HTMLDivElement;
            // shipDiv.style.background='green'
            shipDiv.setAttribute('data-occupied', 'occupied')
        }
    }
}


const enemyBoard = (array: BoardArray[][], boatArray: Ship[]) => {
    let main = document.getElementById("gameBoardDiv") as HTMLDivElement
    main.appendChild(board())
    randomSpot(array, boatArray)
}


export { enemyBoard, randomNum }