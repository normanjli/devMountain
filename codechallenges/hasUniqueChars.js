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



function hasUniqueSet(str){
    let set = new Set (str)
    if (set.size === str.length){
        return true
    }return false
}


//Andrew
function hasUniqueChars (str) {
    let chars = {}
    for(let i = 0; i < str.length; i++){
      console.log(chars)
      let letter = str[i]
      console.log(letter, chars[letter])
      if (chars[letter]) {
        return false
      }
      chars[letter] = (chars[letter] || 0) + 1
    } return true
  }
  
  hasUniqueChars('The quick brown fox jupmed over the lazy dog.')