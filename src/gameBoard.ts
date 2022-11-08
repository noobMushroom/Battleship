import { ship } from "./ship";
import { endCoordStartCoord } from "./index"

interface Ship {
    length: number;
    hits: number;
    isSunk: boolean;
}

const gameBoard = (() => {
    const createBoard = () => {
        let gameBoardArray: { occupied: boolean; attacked: boolean; ship: Ship }[][] = new Array();

        for (let i = 0; i < 10; i++) {
            gameBoardArray[i] = new Array();
            for (let j = 0; j < 10; j++) {
                gameBoardArray[i][j] = { occupied: false, attacked: false, ship: { length: 0, hits: 0, isSunk: false } };
            }
        };
        return gameBoardArray;
    }

    function isInside(num: number) {
        if (num - 1 < 0) return false
        if (num + 1 > 9) return false
        return true;
    }


    const placeBoat = (coord: number[], boat: Ship, alignment: string, array: { occupied: boolean; attacked: boolean; ship: object }[][]) => {
        let startCoord = endCoordStartCoord(coord, boat, alignment).startCoord
        let endCoord = endCoordStartCoord(coord, boat, alignment).endCoord
        for (let i = startCoord[0]; i <= endCoord[0]; i++) {
            for (let j = startCoord[1]; j <= endCoord[1]; j++) {
                array[i][j].occupied = true;
                array[i][j].ship = boat
            }
        }
        console.log(array)
    }



    const receiveAttack = (value: number[], array: { occupied: boolean; attacked: boolean; ship: { hits: number; length: number } }[][]) => {
        let spot = array[value[0]][value[1]]
        spot.attacked = true;
        if (spot.occupied === true) {
            ship.hit(spot.ship)
        }
        console.log(array)
    }


    return { createBoard,  placeBoat, receiveAttack, isInside }
})()


export { gameBoard, Ship }