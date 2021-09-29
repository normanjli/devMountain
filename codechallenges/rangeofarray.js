const arr = [1, 4, 11, 2, 37, -4]
let minMaxArr = [].concat(arr)
// console.log(typeof(minMaxArr))
// console.log(arr)
// // minMaxArr.sort(function(a, b){return a-b})
// // console.log(arr)
// // console.log(minMaxArr[0])
// // console.log(minMaxArr[arr.length-1])
// console.log(minMaxArr)

for (let i=0; i < minMaxArr.lenght; i++){
    minMaxArr[i] = minMaxArr[minMaxArr.length-i]
    console.log(minMaxArr)
}
