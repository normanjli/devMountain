const firstName = `Andrew`

let age = 40

// console.log(firstName, age)

let isCool = true

let height = undefined

let weight = null

// console.log(height, weight)

var x = 4
let y = 10
let z = 7 + 8

x = 5
y = 5
z = x + y

let sum = x + y + z

// console.log(sum)

let str = "String"
let str2 = 'String'
let str3 = `String`

// console.log(str, str2, str3)

const lastName = `Turner`

// console.log('Hello ' + firstName + ' ' + lastName)
// console.log(`Hello ${firstName} ${lastName}`)
// console.log(`Hello my name is ${firstName}`)

let greeting = `Hello my name is ${firstName}`

// console.log(greeting)

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Howdy, what is your name?`, function(answer) {
    console.log(`Hi, ${answer}`)
})