const oneMore = document.getElementById(`oneMore`);
const afghan = document.getElementById(`aFghan`);
const pho = document.getElementById(`pHo`);
const chick = document.getElementById(`cHick`);
const tuk = document.getElementById(`tUk`);
const randRest = document.getElementById(`randRest`);
console.log(oneMore);
const showFood = (e) => {
  let targ = e.target.id;
  targ=targ.toLowerCase()
  let arr = [...document.getElementById(`foodlist`).children];
  arr = arr.map((ele) => (ele = ele.id.toLowerCase()));
  for (i of arr){
      document.getElementById(i).style.display = 'none'
  }
  console.log(arr);
  if (arr.includes(targ)) {
    let show = document.getElementById(targ);
    show.style.display = "block";
    console.log(targ);
  } else {
    let temp = arr[Math.floor(arr.length * Math.random())];
    let show = document.getElementById(temp);
    show.style.display = "block";
    console.log(temp);
  }
};
// const randRecc = () =>{
//     let arr = [...document.getElementById(`foodlist`).children]
//     let temp = arr[Math.floor(arr.length*Math.random())].id
//     temp=temp.toLowerCase()
//     let show = document.getElementById(temp)
//     show.style.display = 'block'
//     console.log(temp)
// }
oneMore.addEventListener(`click`, showFood);
afghan.addEventListener(`click`, showFood);
pho.addEventListener(`click`, showFood);
chick.addEventListener(`click`, showFood);
tuk.addEventListener(`click`, showFood);
randRest.addEventListener(`click`, showFood);
