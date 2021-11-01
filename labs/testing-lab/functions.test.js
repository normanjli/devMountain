

const {returnTwo, greeting, add, multiply, divide, subtract} = require(`./functions.js`)

test(`testing return 2`,()=>{
    expect(returnTwo()).toEqual(2)
})
describe(`testing greeting`,()=>{
    test(`testing james`,()=>{
        expect(greeting(`James`)).toEqual(`Hello, James`)
    })
    test('testing jill',()=>{
        expect(greeting(`Jill`)).toEqual(`Hello, Jill`)
    })
})
describe(`test add multpliy subtract`,()=>{
    test(`1+2=3`,()=>{
        expect(add(1,2)).toEqual(3)
    })
    test(`5+9=14`,()=>{
        expect(add(5,9)).toEqual(14)
    })
    test(`3*3=9`,()=>{
        expect(multiply(3,3)).toEqual(9)
    })
    test(`8/2=4`,()=>{
        expect(divide(8,2)).toEqual(4)
    })
    test(`5-2=3`,()=>{
        expect(subtract(5,2)).toEqual(3)
    })
})
