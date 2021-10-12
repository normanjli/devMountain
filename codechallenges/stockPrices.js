const best = (dailyPrices) =>{
    let profit =[]
    for (let i = 0; i<dailyPrices.length;i++){
        for (let j = i+1; j<dailyPrices.length;j++){
            if(dailyPrices[i]<dailyPrices[j]){
                profit.push(dailyPrices[j]-dailyPrices[i])
            }
        }
    }
    profit.sort((buy, sell)=>buy-sell)
    return profit[profit.length-1]!=undefined? profit[profit.length-1]:0
    }


console.log(best([100,100]))

// const bestMethod = (dailyPrices) =>{
//     dailyPrices.forEach(element,i,dailyPrices => {
//         for (let j = 1; j<dailyPrices.length;j++){
//             if(element<dailyPrices[j]){
//                 return dailyPrices[i] = dailyPrices[j]-element
//             }else{
//                 return dailyPrices[i] = element* 0
//             }
//         }
//     });console.log(dailyPrices)
// }
// console.log(bestMethod([2, 3, 10, 6, 4, 8, 1]))