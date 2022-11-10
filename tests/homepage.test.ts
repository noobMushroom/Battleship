import { boat } from "../src/homepage";



test ('returns array with boats',()=>{
    let expected =[{length:3, hits:0, isSunk:false}, {length:4, hits:0, isSunk:false}]
    expect(boat()).toEqual(expect.arrayContaining(expected))
})