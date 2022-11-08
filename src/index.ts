import * as _ from 'lodash';
import { doc } from 'prettier';
import '../styles/style.scss';
import { gameBoard, Ship } from './gameBoard';
import { createShip, ship } from './ship';

enum Ships { destroyer = 2, submarine = 3, cruiser = 3, battleship = 4, carrier = 5 }


const createGame = () => {
    const board = document.createElement('div');
    board.classList.add('board')
    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j <= 6; j++) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.setAttribute('id', `[${i},${j}]`)
            cellDiv.innerHTML = `${i},${j}`
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


function showBoat(coord: number[], boat: Ship, alignment: string) {
    let startCoord: number[] = [];
    let endCoord: number[] = [];

    if (alignment == 'horizontal') {
        console.log('i am from horizontal')
        startCoord = coord;
        endCoord = [coord[0], coord[1] + (boat.length - 1)]
    } else if (alignment == 'vertical') {
        console.log('i am from the vertical')
        startCoord = coord;
        endCoord = [coord[0] + (boat.length - 1), coord[1]]
    }
    console.log('thisis the ', startCoord)
    console.log('this', endCoord)

    for (let i = startCoord[0]; i <= endCoord[0]; i++) {
        for (let j = startCoord[1]; j <= endCoord[1]; j++) {
            let shipDiv = document.getElementById(`[${i},${j}]`)
            shipDiv?.setAttribute('style', 'background:pink')
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


function alignment(){
    let alignment= 'horizontal'
    const btn = document.getElementById("alignmentBtn") as HTMLButtonElement
    btn?.addEventListener('click', ()=>{
        if(alignment==='horizontal'){
            btn.textContent='vertical'
            alignment='vertical'
        }else{
            btn.textContent='horizontal'
            alignment='horizontal'
        }
        console.log(alignment)

    })
    return alignment
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

function boat() {
    let submarine = createShip(Ships.submarine);
    let battleship = createShip(Ships.battleship);
    let cruiser = createShip(Ships.cruiser);
    let carrier = createShip(Ships.carrier);
    let destroyer = createShip(Ships.destroyer);

    let shipArray = [submarine, battleship, cruiser, carrier, destroyer]
    return shipArray
}

function placeShip(array: { occupied: boolean; attacked: boolean; ship: Ship }[][]) {
    let shipArray = boat()
    let cells = document.querySelectorAll('.cell');
    let count = 0
    if (count > 5) return
    boatDisplay(shipArray[count].length)
    cells.forEach(div => {
        div.addEventListener('click', (e) => {
            let shipAlignment = alignment()
            const target = e.target as HTMLDivElement
            let coordinates: string = target.id
            let startCoord = startCoordArray(coordinates)
            console.log(startCoord)
            gameBoard.placeBoat(startCoord, shipArray[count], shipAlignment, array)
            showBoat(startCoord, shipArray[count],shipAlignment )
            count += 1
            boatDisplay(shipArray[count].length)
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


startGame()