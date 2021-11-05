const {shuffleArray} = require('./utils')
const {bots} = require(`./data.js`)

describe('shuffleArray should', () => {
    test(`return type array`,()=>{
        expect(shuffleArray(bots)).toBeInstanceOf(Array)
    }),
    test(`return the same length array`, ()=>{
        expect(shuffleArray(bots)).toHaveLength(bots.length)
    }),
    test(`shuffle the array`,()=>{
        let shuffled = false
        let modBots = shuffleArray(bots)
        while(shuffled === false){
            modBots.map(bot=>modBots.indexOf(bot)===bots.indexOf(bot)?null:shuffled=true)
            
        }
        expect(shuffled).toEqual(true)
    })
})