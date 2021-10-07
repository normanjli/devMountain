const isPalindrome = (str) => {
    let reverse = ``
        for (let i = str.length; i>=0; i--){
            // console.log(i)
            reverse += str.charAt(i)
            // console.log(reverse)
        }
    return reverse === str ? true:false
}

// console.log(isPalindrome(`Racecar`))
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("What would you like to calculate?", function(input){
    console.log(isPalindrome(input))
    
    reader.close()
})