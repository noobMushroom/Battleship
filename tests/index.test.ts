import { isGameOver } from "../src/index";
import {boat} from "../src/homepage"
import { gameBoard } from "../src/gameBoard";


test('should return true', ()=>{
    let board = gameBoard.createBoard()
    let array =[{length:4, hits:4, isSunk:true}, {length:5,hits:5, isSunk:true}]
    expect(isGameOver(array, board) ).toBe(true)
})
test('should return false', ()=>{
    let board = gameBoard.createBoard()
    let array =[{length:4, hits:4, isSunk:false}, {length:5,hits:5, isSunk:false}]
    expect(isGameOver(array,board)).toBe(false)
})