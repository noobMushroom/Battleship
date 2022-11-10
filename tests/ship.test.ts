import { createShip , ship} from "../src/ship";


test('it will return ship', ()=>{
    expect(createShip(3)).toEqual({
        length:3,
        hits:0,
        isSunk:false
    })
})


test('it will sink the shipt', ()=>{
    let sub = createShip(3);
    expect(ship.hit(sub)).toBe(sub.hits=1)
})

