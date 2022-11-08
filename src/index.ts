import * as _ from 'lodash';
import '../styles/style.scss';
import { gameBoard, Ship } from './gameBoard';
import { createShip, ship } from './ship';

enum Ships { destroyer = 2, submarine = 3, cruiser = 3, battleship = 4, carrier = 5 }


const createGame = () => {
    const board = document.createElement('div');
    board.classList.add('board')
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.setAttribute('id', `[${i},${j}]`)
            cellDiv.innerHTML = `${i},${j}`
            cellDiv.setAttribute('data-occupied', 'false')
            board.appendChild(cellDiv)
        }
    }
    return board
};

function startCoordArray(value: string) {
    let coordArray: number[] = []
    for (let i of value) {
        if (/[0-9]/.test(i)) {
            coordArray.push(Number(i))
        }
    }
    return coordArray;
}

function endCoordStartCoord(coord: number[], boat: Ship, alignment: string) {
    let startCoord: number[] = [];
    let endCoord: number[] = [];
    if (alignment == 'horizontal') {
        startCoord = coord;
        endCoord = [coord[0], coord[1] + (boat.length - 1)]
    } else if (alignment == 'vertical') {
        startCoord = coord;
        endCoord = [coord[0] + (boat.length - 1), coord[1]]
    }
    return { startCoord, endCoord }
}

function showBoat(coord: number[], boat: Ship, alignment: string) {
    let startCoord: number[] = endCoordStartCoord(coord, boat, alignment).startCoord;
    let endCoord: number[] = endCoordStartCoord(coord, boat, alignment).endCoord;
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            let shipDiv = document.getElementById(`[${i},${j}]`)
            shipDiv?.setAttribute('style', 'background:pink')
            shipDiv?.setAttribute('data-occupied', 'occupied')
        }
    }
}


function clickHandler(boardArray: { occupied: boolean; attacked: boolean, ship: { hits: number; length: number } }[][]) {
    let div = document.querySelectorAll('.cell');
    div.forEach(div => {
        div.addEventListener('click', (e) => {
            const target = e.target as HTMLDivElement
            let coordinates: string = target.id
            let coordArray: number[] = startCoordArray(coordinates)
            target.style.background = 'red'
            if (boardArray[coordArray[0]][coordArray[1]].attacked === false) {
                gameBoard.receiveAttack(coordArray, boardArray)

            }
        })
    })
}

function boatDisplay(length: number) {
    const boatDiv = document.getElementById('boatDiv') as HTMLDivElement;
    boatDiv.innerHTML = ''
    for (let i = 0; i < length; i++) {
        let cell = document.createElement('div');
        cell.classList.add('boatDisplay')
        boatDiv.appendChild(cell)
    }
}
function isValidSpotDisplay(startCoord: number[], endCoord: number[]) {
    if (endCoord[1] > 9) return false
    if (endCoord[0] > 9) return false
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            if (gameBoard.isInside(i)) {
                let element = document.getElementById(`[${i - 1},${j}]`)!
                if (element.dataset.occupied == "occupied") return false
            }
            if (gameBoard.isInside(i)) {
                let element = document.getElementById(`[${i - 1},${j}]`)!
                if (element.dataset.occupied == "occupied") return false
            }
            if (gameBoard.isInside(i)) {
                let element = document.getElementById(`[${i + 1},${j}]`)!
                if (element.dataset.occupied == "occupied") return false
            }
            if (gameBoard.isInside(j)) {
                let element = document.getElementById(`[${i},${j - 1}]`)!
                if (element.dataset.occupied == "occupied") return false
            }
            if (gameBoard.isInside(j)) {
                let element = document.getElementById(`[${i},${j + 1}]`)!
                if (element.dataset.occupied == "occupied") return false
            }
        }
    }
    return true
}
function boat() {
    let submarine = createShip(Ships.submarine);
    let battleship = createShip(Ships.battleship);
    let cruiser = createShip(Ships.cruiser);
    let carrier = createShip(Ships.carrier);
    let destroyer = createShip(Ships.destroyer);

    let shipArray = [submarine, battleship, cruiser, carrier, destroyer]
    return shipArray
}


const mouseOver = (target: HTMLDivElement, count: number, boat: Ship, alignment: string) => {
    let coordinates: string = target.id
    let coord = startCoordArray(coordinates)
    let startCoord = endCoordStartCoord(coord, boat, alignment).startCoord
    let endCoord = endCoordStartCoord(coord, boat, alignment).endCoord
    if (isValidSpotDisplay(startCoord, endCoord)) { // todo set alignment
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                let shipDiv = document.getElementById(`[${i},${j}]`)!
                shipDiv.classList.add('background')
            }
        }
    } else target.classList.add('error')
}

const mouseOut = (target: HTMLDivElement, count: number, boat: Ship, alignment: string) => {
    let coordinates: string = target.id
    let coord = startCoordArray(coordinates)
    let startCoord = endCoordStartCoord(coord, boat, alignment).startCoord
    let endCoord = endCoordStartCoord(coord, boat, alignment).endCoord
    if (isValidSpotDisplay(startCoord, endCoord)) { // todo set alignment
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                let shipDiv = document.getElementById(`[${i},${j}]`)!
                shipDiv.classList.remove('background')
            }
        }
    } else target.classList.remove('error')
}

function placeShip(array: { occupied: boolean; attacked: boolean; ship: Ship }[][]) {
    let alignment = 'horizontal'
    let shipArray = boat()
    let cells = document.querySelectorAll('.cell');
    let count = 0
    boatDisplay(shipArray[count].length)
    const btn = document.getElementById("alignmentBtn") as HTMLButtonElement
    btn.addEventListener('click', () => {
        if (count <= 4) {
            if (alignment == 'horizontal') {
                btn.textContent = 'vertical'
                alignment = 'vertical'
            } else {
                btn.textContent = 'horizontal'
                alignment = 'horizontal'
            }
            console.log(alignment)

        }
    })
    cells.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            const target = e.target as HTMLDivElement
            if (count <= 4) {
                mouseOver(target, count, shipArray[count], alignment)
            }
        })
    })
    cells.forEach(div => {
        div.addEventListener('mouseout', (e) => {
            const target = e.target as HTMLDivElement
            if (count <= 4) {
                mouseOut(target, count, shipArray[count], alignment)
            }
        })
    })

    cells.forEach(div => {
        div.addEventListener('click', (e) => {
            let shipAlignment = alignment
            const target = e.target as HTMLDivElement
            if (count <= 4) {
                let coordinates: string = target.id
                let startCoord = startCoordArray(coordinates)
                let start = endCoordStartCoord(startCoord, shipArray[count], alignment).startCoord
                let endCoord = endCoordStartCoord(startCoord, shipArray[count], alignment).endCoord
                if (isValidSpotDisplay(start, endCoord)) {
                    gameBoard.placeBoat(startCoord, shipArray[count], shipAlignment, array)
                    showBoat(startCoord, shipArray[count], shipAlignment)
                    count += 1
                    if (count <= 4) boatDisplay(shipArray[count].length)

                }
            }

        })
    })

}

function header() {
    const head = document.createElement('header');
    head.classList.add("header")
    head.innerHTML = `<h1>cool?</h1>`
    const boatDiv = document.createElement('div');
    boatDiv.textContent = 'here will have boats'
    boatDiv.classList.add('boatContainer');
    boatDiv.setAttribute('id', 'boatDiv')
    head.appendChild(boatDiv)
    const alignmentBtn = document.createElement('button')
    alignmentBtn.setAttribute('id', "alignmentBtn");
    alignmentBtn.classList.add('alignmentBtn')
    alignmentBtn.textContent = 'horizontal'
    head.appendChild(alignmentBtn)
    return head

}

function startGame() {
    const homePage = document.querySelector('body') as HTMLElement;
    homePage.appendChild(header())
    let board = gameBoard.createBoard()
    homePage.appendChild(createGame())
    // clickHandler(board)
    placeShip(board)
}
export { endCoordStartCoord }

startGame()