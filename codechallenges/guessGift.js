// const guessGifts = (presents, wishlist)=>{
//     let ans=[]
//         for (i in presents){
//             let {size, clatters, weight} = presents[i]
//             for (j in wishlist){
//                 if(size === wishlist[j].size && clatters===wishlist[j].clatters && weight===wishlist[j].weight){
//                     ans.push(wishlist[j].name)
//                 }
//             }
//         }return ans
// }

const guessGifts = (presents,wishlist) =>{
    let ans =[]
    presents.map((p)=>{wishlist.map(w=>{p.size===w.size&&p.clatters===w.clatters&&p.weight===w.weight?ans.push(w.name):null})})
    return ans
}
const g = (presents,wishlist)=>wishlist.filter(w=>presents.map(p=>p.size===w.size&&p.clatters===w.clatters&&p.weight===w.weight?w=true:w=false))
var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"},
    {name: "Gloomhaven", size: "large", clatters: "a bit", weight: "heavy"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"},
    {size: "small", clatters: "no", weight: "light"}
];

console.log(guessGifts(presents,wishlist)); // must return ["Toy Car", "Mini Puzzle"]