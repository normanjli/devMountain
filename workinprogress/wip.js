const calc = () => {
  let tokens = prompt(
    `enter operation starting with operator then values separated with commas`
  );
  tokens = tokens.split(`,`);
  let mathSymbol = tokens.shift();
  let convTokens = [];
  for (let i = 0; i < tokens.length; i++) {
    convTokens.push(Number(tokens[i]));
  }
  // alert(convTokens)
  let ans = 1;
  let sqrt = [];
  if (mathSymbol === `+`) {
    for (let i = 0; i < convTokens.length; i++) {
      ans += convTokens[i];
    }
    alert(ans - 1);
  } else if (mathSymbol === `-`) {
    for (let i = 0; i < convTokens.length; i++) {
      ans -= convTokens[i];
    }
    alert(ans - 1);
  } else if (mathSymbol === `*`) {
    for (let i = 0; i < convTokens.length; i++) {
      ans *= convTokens[i];
    }
    alert(ans);
  } else if (mathSymbol === `/`) {
    for (let i = 0; i < convTokens.length; i++) {
      ans /= convTokens[i];
    }
    alert(ans);
  } else if (mathSymbol === `^/`) {
    for (let i = 0; i < convTokens.length; i++) {
      sqrt.push(convTokens[i] ** 0.5);
    }
    if (convTokens.length > 1) {
      alert(`the answers are ${sqrt}`);
    } else {
      alert(`the answer is ${sqrt}`);
    }
  } else {
    alert(
      `you broke it, try entering input starting with operator then numerals seperated with commas`
    );
  }

  //console.log (num1, num2, mathSymbol)
  // This line closes the connection to the command line interface
};

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
document.querySelector(`form`).addEventListener(`submit`, entry);
