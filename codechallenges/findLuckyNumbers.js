// Write your code below this line.
function luckyNumbers(num){
    let luckNum = []
    for (let i = 0; i < num; i++){
        let rand = (Math.floor(Math.random()*10)+1)
        if (luckNum.includes(rand)){
            i--
        }
        else{
            luckNum.push(rand)
        }
    }return luckNum
}
console.log(luckyNumbers(6))