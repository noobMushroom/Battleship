import { gameBoard, Ship, BoardArray } from './gameBoard';
import { createShip } from './ship';
import { game } from './index';
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
            cellDiv.setAttribute('data-attacked', 'false')
            board.appendChild(cellDiv)
        }
    }
    return board
};

// returns starting coordinate from id of element
function startCoordArray(value: string) {
    let coordArray: number[] = []
    for (let i of value) {
        if (/[0-9]/.test(i)) {
            coordArray.push(Number(i))
        }
    }
    return coordArray;
}
// return start and end coordinates of the ship 
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



// display boat
function showBoat(coord: number[], boat: Ship, alignment: string) {
    let startCoord: number[] = endCoordStartCoord(coord, boat, alignment).startCoord;
    let endCoord: number[] = endCoordStartCoord(coord, boat, alignment).endCoord;
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            let shipDiv = document.getElementById(`[${i},${j}]`) as HTMLDivElement;
            shipDiv?.setAttribute('style', 'background:pink')
            shipDiv?.setAttribute('data-occupied', 'occupied')
        }
    }
}

// display the boat in the header which boat is to select
function boatDisplay(length: number) {
    const boatDiv = document.getElementById('boatDiv') as HTMLDivElement;
    boatDiv.innerHTML = ''
    for (let i = 0; i < length; i++) {
        let cell = document.createElement('div');
        cell.classList.add('boatDisplay')
        boatDiv.appendChild(cell)
    }
}


// checks is the spot is valid to place boat and returns a boolean value
function isValidSpot(startCoord: number[], endCoord: number[], alignment: string) {
    if (endCoord[1] > 9) return false
    if (endCoord[0] > 9) return false
    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            if (alignment == 'vertical') {
                let element1 = document.getElementById(`[${i - 1},${j}]`)!
                let element1_1 = document.getElementById(`[${i - 1},${j + 1}]`)!
                let element1_2 = document.getElementById(`[${i - 1},${j - 1}]`)!
                let element2 = document.getElementById(`[${i + 1},${j}]`)!
                let element2_1 = document.getElementById(`[${i + 1},${j + 1}]`)!
                let element2_2 = document.getElementById(`[${i + 1},${j - 1}]`)!
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
                let element3 = document.getElementById(`[${i},${j - 1}]`)!
                let element3_1 = document.getElementById(`[${i - 1},${j - 1}]`)!
                let element3_2 = document.getElementById(`[${i + 1},${j - 1}]`)!
                let element4 = document.getElementById(`[${i},${j + 1}]`)!
                let element4_1 = document.getElementById(`[${i - 1},${j + 1}]`)!
                let element4_2 = document.getElementById(`[${i + 1},${j + 1}]`)!
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



// create boat array and return it
function boat() {
    let submarine = createShip(Ships.submarine);
    let battleship = createShip(Ships.battleship);
    let cruiser = createShip(Ships.cruiser);
    let carrier = createShip(Ships.carrier);
    let destroyer = createShip(Ships.destroyer);
    return [submarine, battleship, cruiser, carrier, destroyer]
}

// show's boat when hover mouse
const mouseOver = (target: HTMLDivElement, boat: Ship, alignment: string) => {
    let coordinates: string = target.id
    let coord = startCoordArray(coordinates)
    let startCoord = endCoordStartCoord(coord, boat, alignment).startCoord
    let endCoord = endCoordStartCoord(coord, boat, alignment).endCoord
    if (isValidSpot(startCoord, endCoord, alignment)) { // todo set alignment
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                let shipDiv = document.getElementById(`[${i},${j}]`)!
                shipDiv.classList.add('background')
            }
        }
    } else target.classList.add('error')
}

const mouseOut = (target: HTMLDivElement, boat: Ship, alignment: string) => {
    let coordinates: string = target.id
    let coord = startCoordArray(coordinates)
    let startCoord = endCoordStartCoord(coord, boat, alignment).startCoord
    let endCoord = endCoordStartCoord(coord, boat, alignment).endCoord
    if (isValidSpot(startCoord, endCoord, alignment)) { // todo set alignment
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                let shipDiv = document.getElementById(`[${i},${j}]`)!
                shipDiv.classList.remove('background')
            }
        }
    } else target.classList.remove('error')
}



//this function places ship on the board and in the board array
function placeShip(array: BoardArray[][], board:HTMLDivElement) {
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

        }
    })
    cells.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            const target = e.target as HTMLDivElement
            if (count <= 4) {
                mouseOver(target, shipArray[count], alignment)
            }
        })
    })
    cells.forEach(div => {
        div.addEventListener('mouseout', (e) => {
            const target = e.target as HTMLDivElement
            if (count <= 4) {
                mouseOut(target, shipArray[count], alignment)
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
                if (isValidSpot(start, endCoord, alignment)) {
                    gameBoard.placeBoat(startCoord, shipArray[count], shipAlignment, array)
                    showBoat(startCoord, shipArray[count], shipAlignment)
                    count += 1
                    if (count <= 4) boatDisplay(shipArray[count].length)
                    if (count>4) startGameBtn(board, array, shipArray)
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


const startGameBtn = (board:HTMLDivElement, array: BoardArray[][], ships:Ship[]) => {
    let main = document.querySelector('body') as HTMLBodyElement
    let btnDiv= document.createElement('div');
    let startBtn= document.createElement('button');
    btnDiv.appendChild(startBtn);
    main.appendChild(btnDiv) 
    startBtn.innerHTML='game start'
    startBtn.addEventListener('click', ()=>{
        game(board, array, ships)
    })
}


function homePage() {
    let main = document.querySelector('body') as HTMLBodyElement
    main.appendChild(header())
    let board = gameBoard.createBoard()
    let playerBoard= createGame()
    main.appendChild(playerBoard)
    placeShip(board, playerBoard)

}

export { endCoordStartCoord, boat, isValidSpot, showBoat, startCoordArray, homePage }