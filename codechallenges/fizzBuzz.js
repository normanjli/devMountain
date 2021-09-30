// Write your solution below this line:
// Write your solution below this line:
let divisByThree = []
let divisByFive = []
let divisByThreeandFive = []
for (let xiv = 1; xiv <=50; xiv++){
  if (xiv%3 == 0 && xiv%5 ==0){
    console.log(`fizzbuzz`)
    divisByThreeandFive.push(xiv)
  }else if (xiv%5 == 0 && xiv%3 != 0){
    console.log(`buzz`)
    divisByFive.push(xiv)
  }else if (xiv%3 == 0 && xiv%5 != 0){
    console.log(`fizz`)
    divisByThree.push(xiv)
  }else{
    console.log(xiv)
  }
}console.log(divisByThreeandFive, divisByThree, divisByFive)//verifies i am sorting values correctly