import { BoardArray, gameBoard, Ship } from "./gameBoard";

const enemyChance = (boardArray: BoardArray[][]) => {
    let randomSpot = filteredArray()
    let spot = document.getElementById(`[${randomSpot[0]},${randomSpot[1]}]`) as HTMLDivElement
    spot.classList.add("attacked")
    spot.dataset.attacked='true'
    gameBoard.receiveAttack(randomSpot, boardArray)
    if (boardArray[randomSpot[0]][randomSpot[1]].occupied) {
        spot.classList.remove("attacked")
        spot.classList.add("hit")
        enemyChance(boardArray)
    }
}

function filteredArray(): number[] {
    const cells: NodeListOf<HTMLDivElement> = document.querySelectorAll('.cell')
    let spotArray: HTMLDivElement[] = []
    cells.forEach(cell => {
        if (cell.dataset.attacked == "false") spotArray.push(cell)
    })
    let random = Math.floor(Math.random() * spotArray.length)
    let randomSpot = spotArray[random]
    let coord = randomSpot.id
    let spot: number[] = []
    for (let value of coord) {
        if (/[0-9]/.test(value)) spot.push(Number(value))
    }
    return spot 
}

export { enemyChance}
