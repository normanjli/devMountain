// Write your code below
function hasUnique(str){

let array = str.split(``)
for (let i = 0; i < array.length; i++ ){
    for( let j = i +1; j < array.length; j++){
        if (array[i] === array[j]){
            return false
        }
    }
}return true
}

console.log(hasUnique(`Bob`))