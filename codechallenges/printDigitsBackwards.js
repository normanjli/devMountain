const printDigits = (num) =>{
    while (num!=0){
        // console.log(num)
        let lastdigit = num%10
        console.log(lastdigit)
        num = Math.floor(num/10)
        // console.log(num)
    }return `done`
}

console.log(printDigits(314))