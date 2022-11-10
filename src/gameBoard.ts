import { ship } from "./ship";
import { endCoordStartCoord } from "./homepage"

interface Ship {
    length: number;
    hits: number;
    isSunk: boolean;
}

interface BoardArray {
    occupied: boolean;
    attacked: boolean;
    ship: Ship
}

const gameBoard = (() => {
    const createBoard = () => {
        let gameBoardArray: BoardArray[][] = new Array();

        for (let i = 0; i < 10; i++) {
            gameBoardArray[i] = new Array();
            for (let j = 0; j < 10; j++) {
                gameBoardArray[i][j] = { occupied: false, attacked: false, ship: { length: 0, hits: 0, isSunk: false } };
            }
        };
        return gameBoardArray;
    }

    const placeBoat = (coord: number[], boat: Ship, alignment: string, array: BoardArray[][]) => {
        let startCoord = endCoordStartCoord(coord, boat, alignment).startCoord
        let endCoord = endCoordStartCoord(coord, boat, alignment).endCoord
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                array[i][j].occupied = true;
                array[i][j].ship = boat
            }
        }
    }

    const receiveAttack = (value: number[], array: BoardArray[][]) => {
        let spot = array[value[0]][value[1]]
        spot.attacked = true;
        if (spot.occupied === true) {
            ship.hit(spot.ship)
            ship.isSunk(spot.ship)
        }
        console.log(array)
    }
    return { createBoard, placeBoat, receiveAttack }
})()

export { gameBoard, Ship , BoardArray}