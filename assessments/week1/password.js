const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("please enter a password:", function(input){
    let password = input
    let convPass = password.split
    if (password.length>=10 && password.search(`[^a-zA-Z\d\s]`) >= 0){
        console.log(`password is acceptable`)
    }else{
        console.log(`password is not acceptable`)
    }
reader.close()
})