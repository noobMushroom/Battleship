function createShip(length:number){
    return {
        length,
        hits:0,
        isSunk:false,
    }
}

const ship=(()=>{
    function hit(value:{hits:number, length:number}){
        if (value.hits<=value.length){
            return value.hits+=1
        }else{
            return 'you are sunk'
        }
    }

    return {hit}
})()

export {createShip, ship}