// Starting array
let array = [28, 43, 12, 30, 4, 0, 12, 1, 2, 3, 4, 5, -5]

// Write your solution below:
let istrue = false
for (let i = 0; i < array.length; i++ ){
    for( let j = i +1; j < array.length; j++){
        if (array[i]+array[j] === 0){
            istrue = true
        }
    }
}console.log(istrue)

// for (let i = 0; i<array.length; i++){
    
//     if (array[i] + array[0] === 0 && i !=0){
//         istrue = true
//     }else if (array[i] + array[1] === 0 && i !=1){
//         istrue = true
//     }else if (array[i]+ array[2] === 0 && i !=2){
//         istrue = true
//     }else if (array[i]+ array[3] === 0 && i !=3){
//         istrue = true
//     }else if (array[i]+ array[4] === 0 && i !=4){
//         istrue = true
//     }else if (array[i]+ array[5] === 0 && i !=5){
//         istrue = true
//     }else if (array[i]+ array[6] === 0 && i !=6){
//         istrue = true
//     }else if (array[i]+ array[7] === 0 && i !=7){
//         istrue = true
//     }
// }
// if (istrue === true){
//     console.log(istrue)
// }else{
//     console.log (`false`)
// }