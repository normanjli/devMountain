////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

const { channel } = require("diagnostics_channel");

//CODE HERE
let lovesCode = true;
if (lovesCode === true) {
  console.log(`I love to code!`)
}else{
  console.log(`I guess you dont?`)
}
// For problems 2-3 use the following lines of code:
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1984

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/
if (amysAge > brittanisAge) {
  console.log(`Amy is older`);
}else if (brittanisAge > amysAge) {
  console.log(`Brittani is older`);
}else if (brittanisAge == amysAge) {
  console.log(`They're the same age!`);
}
//CODE HERE


////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/
if (amysBirthYear == brittanisBirthYear) {
  console.log(`Amy & Brittani were born in the same year`)
}else{
  console.log(`Amy & Brittani were not born in the same year`)
}
//CODE HERE



// For problems 4-5 use the following lines of code:
var arr = [10,20,30,40,50,60]

////////// PROBLEM 4 //////////
/*
  Create a variable named 'firstItem' and set it equal to the first value of the 'arr' array.
*/
var firstItem = arr[0]
console.log(firstItem)
//Code Here


////////// PROBLEM 5 //////////
/*
  Remove the last item from the 'arr' array and store it in a variable named 'lastItemRemoved'. Console.log the array to verify you no longer have the last item.
*/
let n = arr.length
let lastItemRemoved = arr.pop()
console.log(arr)
console.log(lastItemRemoved)
//Code Here

////////// PROBLEM 6 //////////

// Do not edit the code below.
var family = ['Tyler', 'Jordan', 'Ryan', 'Alice', 'Ireland'];
// Do not edit the code above.

/*
  Loop through the 'family' array and console.log every item.
*/
let fam = (family.length)
while ( fam != 0) {
  console.log(family[fam-1])
  fam--
}
//Code Here



////////// PROBLEM 7 //////////

// Do not edit the code below.
var nums = [1,2,3,6,22,98,45,23,22,12];
let evensArr = []
// Do not edit the code above.

/*
  Use a for-loop to iterate through each number in the 'nums' array, if the number is even, append it to the 'evensArr'.
*/
for (let i = 0; i !=(nums.length); i++){
  if (nums[i]%2 == 0){
    evensArr.push(nums[i])
  }
}console.log (evensArr)
//Code Here



////////// PROBLEM 8 //////////

// Do not edit the code below.
var score = 74
// Do not edit the code above.

/*
  Determine if the letter grade of the given variable 'score'. If the variable is a 90 or above, console log an 'A', between 80 and 89, console log a 'B', between 70 and 79, 'C', between 60 and 69, 'D', and anything below 60 should console log an 'F'.
*/

//Code Here
if (score >= 90){
  console.log(`A`)
}else if (score <90 && score >=80 ){
  console.log(`B`)
}else if (score <80 && score >=70 ){
  console.log(`C`)
}else if (score <70 && score >=60 ){
  console.log(`D`)
}else if (score <=59 ){
  console.log(`F`)
}
////////// Intermediate Problems //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

//CODE HERE
let changeMyMind = false
console.log(changeMyMind)
if (changeMyMind) {
  changeMyMind = false;
} else {
  changeMyMind = true;
}console.log(changeMyMind)

// Try to change the value of changeMyMind (irrespective of whether it is true or false) and then console.log it's new status. It should log true. Hint: use the not operator.

//CODE HERE

if (changeMyMind !== true){
  changeMyMind = true
}console.log (changeMyMind)



////////// PROBLEM 10 //////////

// Do not edit the code below.
var myFavoriteNumbers = [4,8,12,16,20,24,60];
// Do not edit the code above.

/*
  Create a variable named 'someNum' and set it equal to the fifth value of the 'myFavoriteNumbers' array.
*/
let someNum = myFavoriteNumbers[4]
console.log(someNum)
//Code Here



// Subscripting (accessing values using their index) an array can fail. What happens if you subscript to the 7th element, but there are not 7 elements in the array? Let's write some code to check for that. 
// Use an if statement to check the length of the 'myFavoriteNumbers' array. If it's less than 7, log 'There are not enough elements in this array' to the console. If the length is more than 7, reassign the value of 'someNum' to the value of the 7th element in the array. (Hint: how can you make sure that your code works for exactly 7 elements? What index do you use to get the 7th element?)

//Code Here
if (myFavoriteNumbers.length < 7){
  console.log(`there aren't enough elements in this array`)
}else{
  someNum = myFavoriteNumbers[6]
}console.log(someNum)

////////// PROBLEM 11 //////////

// Do not edit the code below.
var listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// Do not edit the code above.

// Use a for-loop to iterate through 'listOfNumbers', checking to see if each number is divisible by 3. If it is, console.log '{number} is divisible by 3.'

//Code Here 
for (let i = 0 ; i != listOfNumbers.length ; i++){
  if (listOfNumbers[i]%3 == 0){
    console.log(`${listOfNumbers[i]} is divisible by three.`)
  }}
////////// PROBLEM 12 //////////
// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Loop backwards, starting at the end of the 'letters' array. Console log every item in the array.
*/
let xii = letters.length 
for (xii-1 ; xii >0; xii--){
  console.log(letters[xii-1])
}
//Code Here


////////// Advanced Problems //////////

////////// PROBLEM 13 //////////
// Switch statements can be excellent alternatives to for loops. Look up switch statements (I recommend W3 Schools) and try to implement one for the following.

// Do not edit the code below.
let letterGrade = `a`
// Do not edit the code above.

/* Use a switch statement on 'letterGrade' and console.log the appropriate response.

If A: "The student is doing excellently."
If B: "The student is doing well."
If C: "The student is doing alright."
If D: "The student is not doing very well."
If F: "The student is failing."
If the letter grade is not one of the above letters, console.log 'Not an eligible grade.'
*/
switch (letterGrade){
  case `A`:
    console.log(`The student is doing excellently.`)
    break;
  case `B`:
    console.log(`The student is doing Well.`)
    break;
  case `C`:
      console.log(`The student is doing alright.`)
      break;
  case `D`:
    console.log(`The student is not doing very well.`)
    break;
  case `F`:
      console.log(`The student is failing.`)
      break;
  default:
     console.log(`${letterGrade} is not an acceptable value`)
     break;
}
//Code Here



////////// PROBLEM 14 //////////
/* The famous FizzBuzz, Devmountain style!
  Create a for loop that iterates from 1 to 100. In this for loop, using some conditional logic, if the number your for loop is currently on is divisible by 3, console.log 'Dev'. If the number is divisible by 5, console.log 'mountain'. If the number is divisible by 5 & 3, console.log 'Devmountain'. If the number is not divisible by 5 or 3, console.log the number itself. Hint: Look up the modulo operator.

  Your output should look like:
  1
  2
  Dev
  4
  Mountain
  Dev
  7
  8
  Dev
  mountain
  11
  Dev
  13
  14
  Devmountain
  16
  ...
*/
let divisByThree = []
let divisByFive = []
let divisByThreeandFive = []
for (let xiv = 1; xiv <=100; xiv++){
  if (xiv%3 == 0 && xiv%5 ==0){
    console.log(`Devmountain`)
    divisByThreeandFive.push(xiv)
  }else if (xiv%5 == 0 && xiv%3 != 0){
    console.log(`Mountain`)
    divisByFive.push(xiv)
  }else if (xiv%3 == 0 && xiv%5 != 0){
    console.log(`Dev`)
    divisByThree.push(xiv)
  }else{
    console.log(xiv)
  }
}console.log(divisByThreeandFive, divisByThree, divisByFive)//verifies i am sorting values correctly
//Code Here