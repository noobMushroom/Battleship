import { ship } from "./ship";


interface Ship{
    length:number;
    hits:number;
    isSunk:boolean;
}

const gameBoard = (() => {
    const createBoard = () => {
        let gameBoardArray: { occupied: boolean; attacked: boolean; ship:Ship }[][]=new Array(); 
    
        for (let i = 0; i < 7; i++) {
            gameBoardArray[i] = new Array();
            for (let j = 0; j <7; j++) {
                gameBoardArray[i][j] = { occupied: false, attacked: false, ship:{length:0,hits:0, isSunk:false}};
            }
        };
        return gameBoardArray;
    }

    function isInside(num: number) {
        if (num - 1 <0) return false
        if (num + 1 >6) return false
        return true;
    }

    const isValidSpot = (startCord: number[], endCoord: number[], array: { occupied: boolean; attacked: boolean }[][]) => {
        for (let i = startCord[0]; i <= endCoord[0]; i++) {
            for (let j = startCord[1]; j <= endCoord[1]; j++) {
                if (isInside(i)) {
                    if (array[i - 1][j].occupied === true) return false
                }
                if (isInside(i)) {
                    if (array[i + 1][j].occupied === true) return false
                }
                if (isInside(j)) {
                    if (array[i][j + 1].occupied === true) return false
                }
                if (isInside(j)) {
                    if (array[i][j - 1].occupied === true) return false
                }
                return true;
            }
        }
    }

    const placeBoat = (coord: number[], boat:Ship, alignment: string, array: { occupied: boolean; attacked: boolean ; ship:object}[][]) => {
        let startCoord:number[]=[];
        let endCoord:number[]=[];
        if (alignment == 'horizontal') {
            startCoord = coord;
            endCoord = [coord[0], coord[1]+(boat.length-1)]
        }else if(alignment=='vertical'){
            startCoord=coord ;
            endCoord=[coord[0]+(boat.length-1), coord[1]]
        }
        if(isValidSpot(startCoord, endCoord, array)){
            for (let i=startCoord[0];i<=endCoord[0];i++){
                for (let j=startCoord[1]; j<=endCoord[1];j++){
                    array[i][j].occupied=true;
                    array[i][j].ship=boat
                }
            }
        }
        console.log(array)
    }



    const receiveAttack = (value:number[], array:{ occupied: boolean; attacked: boolean; ship:{hits:number; length:number} }[][]) => {
        let spot= array[value[0]][value[1]]
        spot.attacked=true;
        if(spot.occupied===true){
            ship.hit(spot.ship)
        }
        console.log(array)
    }


    return { createBoard, isValidSpot ,placeBoat, receiveAttack}
})()


export { gameBoard , Ship}