// const hasMoreVowels = (word) => {
//     word = word.toLowerCase()
//     let vow = 0
//     let consanent = 0
//     for (i of word){
//         if (i === `a`){
//             vow++
//         }else if(i === `e`){
//             vow++
//         }else if(i === `i`){
//             vow++
//         }else if(i === `o`){
//             vow++
//         }else if(i ===`u`){
//             vow++
//         }else{
//             consanent++
//         }console.log(vow,consanent)
//     }return vow>consanent ? true:false
// }

// console.log(hasMoreVowels(`Yalee`))

const hasMoreVowels = (word) =>{
    if (word.match(/[0-9]/gi)){ //regex to check if entered string has a number
        return console.log(`word must not have any numbers included`)
    }else{
        let vowCount = word.match(/[aeiou]/gi).length //regex to match if string has vowels
         console.log(vowCount)
        return vowCount>(word.length-vowCount)? true:false
    }
}
console.log(hasMoreVowels(`mice`))

const hasMoreVowels = (word) => {
    word = word.toLowerCase()
    let vow = 0
    let consanent = 0
    for (i of word){
        if (i === `a`||i===`e`||i===`i`||i===`o`||i===`u`){
            vow++
        }else{
            consanent++
        }
        console.log(vow,consanent)
    }return vow>consanent ? true:false
}
console.log(hasMoreVowels(`mice`))
console.log(1 == /Number/)