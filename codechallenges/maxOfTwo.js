let x = "string"
let y = 2
let z = (typeof (x) && typeof(y))
// Write your code below this line.
console.log(z)
if (x == y){
    console.log("The values are the same.");
}else if (x > y){
    console.log(x);
}else if(y > x){
    console.log(y);
}else{
    console.log ("itsbroke")
}