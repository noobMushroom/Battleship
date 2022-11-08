import { gameBoard } from "../src/gameBoard";
import {createShip} from "../src/ship"


test('occupy the space',()=>{
    let board= gameBoard.createBoard()
    let sub = createShip(2)
    expect(gameBoard.placeBoat([1,2],sub, 'horizontal', board)).toEqual(board[1][2].occupied=true)
})