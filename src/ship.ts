function createShip(length:number){
    return {
        length,
        hits:0,
        isSunk:false,
    }
}

const ship=(()=>{
    function hit(value:{hits:number, length:number, isSunk:boolean}){
        if (value.hits<=value.length){
            return value.hits+=1
        }
    }

    function isSunk (value:{hits:number, length:number, isSunk:boolean}){
        if (value.hits===value.length){
            return value.isSunk=true
        }  
    } 

    return {hit, isSunk}
})()

export {createShip, ship}