const entry = (e) => {
    e.preventDefault();
    document.querySelector(`p`).textContent = ``;
    let ans = 1;
    let sqrt = [];
    let mathSymbol = document.getElementById("mathSymbol").value;
    let tokens = document.getElementById(`tokens`).value;
    tokens = tokens.split(`,`);
    let convTokens = [];
    for (let i = 0; i < tokens.length; i++) {
      convTokens.push(Number(tokens[i]));
    }
    // alert(convTokens)
    if (mathSymbol === `+`) {
      for (let i = 0; i < convTokens.length; i++) {
        ans += convTokens[i];
      }
      document.querySelector(`p`).textContent = ans - 1;
    } else if (mathSymbol === `-`) {
      for (let i = 0; i < convTokens.length; i++) {
        ans -= convTokens[i];
      }
      document.querySelector(`p`).textContent = ans - 1;
    } else if (mathSymbol === `*`) {
      for (let i = 0; i < convTokens.length; i++) {
        ans *= convTokens[i];
      }
      document.querySelector(`p`).textContent = ans;
    } else if (mathSymbol === `/`) {
      for (let i = 0; i < convTokens.length; i++) {
        ans /= convTokens[i];
      }
      document.querySelector(`p`).textContent = ans;
    } else if (mathSymbol === `^/`) {
      for (let i = 0; i < convTokens.length; i++) {
        sqrt.push(convTokens[i] ** 0.5);
      }
      if (convTokens.length > 1) {
        document.querySelector(`p`).textContent = `The sqrt values are ${sqrt}`;
      } else {
        document.querySelector(`p`).textContent = `the answer is ${sqrt}`;
      }
    } else {
      alert(
        `you broke it, try entering input starting with operator then numerals seperated with commas`
      );
    }
    document.getElementById("mathSymbol").value = "";
    document.getElementById(`tokens`).value = ``;
  };
// Write your code below this line.
const luckyNumbers = (e) => {
    e.preventDefault()
    let num = document.querySelector(`#luckNum`).value
    let luckNum = []
    for (let i = 0; i < num; i++){
        let rand = (Math.floor(Math.random()*10)+1)
        if (luckNum.includes(rand)){
            i--
        }
        else{
            luckNum.push(rand)
        }
    }document.querySelector(`#luckNumAns`).textContent = luckNum
}

document.querySelector(`#roll`).addEventListener(`submit`, luckyNumbers);
document.querySelector(`#forms`).addEventListener(`submit`, entry);
  