import { randomNum } from "./aiBoard"
import { BoardArray, gameBoard } from "./gameBoard";
const enemyChance = (boardArray: BoardArray[][]) => {
    let isChance=true;
    while(isChance){
        let randomSpot = randomNum()
        if (boardArray[randomSpot[0]][randomSpot[1]].attacked === false) {
            let spot = document.getElementById(`[${randomSpot[0]},${randomSpot[1]}]`) as HTMLDivElement
            spot.style.background = 'purple';
            gameBoard.receiveAttack(randomSpot, boardArray)
            isChance=false
        }
    }
}


export {enemyChance}
