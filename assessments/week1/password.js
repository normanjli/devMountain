const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("please enter a password:", function(input){
    let password = input
    if (password.length>=10){
        console.log(`password is acceptable`)
    }else if (password.length<10){
        console.log(`password is not acceptable`)
    }
reader.close()
})