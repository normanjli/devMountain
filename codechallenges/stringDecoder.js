// const decoder = (code) => {
//     let ans =[]
//     code = code.split(``)
//     console.log(code)
//     for (i in code){
//         console.log(i)
//         if(Number.isNaN(parseInt(code[i]))){
        
//         }else{
//             // console.log(parseInt(code[i]+i), typeof(parseInt(code[i]+i)))
//             let count = (parseInt(code[i])+parseInt(i)+1)
//             // console.log(count)
//             ans.push(code[count])
//         }
//     }return ans.reduce((a,c)=>a+c)
// }

console.log(decoder('2bna0p1mp2osl0e'))
const decoder = (code) => {
    let ans =[]
    code = code.split(``)
    console.log(code)
    for (i in code){
        console.log(i)
        if(Number.isNaN(parseInt(code[i]))===false){
                    let count = (parseInt(code[i])+parseInt(i)+1)
                    ans.push(code[count])
        }
    }return ans.reduce((a,c)=>a+c)
}

console.log(decoder('2bna0p1mp2osl0e'))