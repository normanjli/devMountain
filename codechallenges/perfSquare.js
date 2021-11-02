const nextPerfSq = (num)=>{
    if(Number.isInteger(Math.sqrt(num))){
        num+=1
        while(!Number.isInteger(Math.sqrt(num))){
            num++
        }
    }else{
        return -1
    }
    return num
}

console.log(nextPerfSq(10201))

// const nextPrime = (num) =>{
//     let primes = []
//     for (let i = num; i>=2;i--){
//         for (let j=2;j<=i;j++){
//             if(i%j!==0){
//                 primes.push(i)
//             }
//         }
//     }return primes
// }

// console.log()