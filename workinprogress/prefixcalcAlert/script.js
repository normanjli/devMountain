function alertFx() {
    alert(`2`)
}

function calc(){
    let tokens = prompt(`enter operation starting with operator then values separated with commas`);
    tokens = tokens.split(`,`)
    let mathSymbol = tokens.shift()
    let convTokens = []
    for (let i = 0; i < tokens.length; i++){
        convTokens.push(Number(tokens[i]))
    }
    // alert(convTokens)
    let ans = 1
    let sqrt = []
	if (mathSymbol === `+`) {
        for (let i = 0; i < convTokens.length; i++){
            ans += convTokens[i]
        }alert(ans-1)
	}else if (mathSymbol === `-`){
		for (let i = 0; i < convTokens.length; i++){
            ans -= convTokens[i]
        }alert(ans-1)
	}else if (mathSymbol === `*`){
		for (let i = 0; i < convTokens.length; i++){
            ans *= convTokens[i]
        }alert(ans)
	}else if (mathSymbol === `/`){
        for (let i = 0; i < convTokens.length; i++){
            ans /= convTokens[i]
        }alert(ans)
	}else if (mathSymbol === `^/`){
		for (let i = 0; i < convTokens.length; i++){
             sqrt.push(convTokens[i]**.5)
            }if (convTokens.length > 1){
                alert(`the answers are ${sqrt}`)
            }else{
                alert(`the answer is ${sqrt}`)
            }
	}else{
		alert (`you broke it, try entering input starting with operator then numerals seperated with commas`);
	}


	//console.log (num1, num2, mathSymbol)
	// This line closes the connection to the command line interface
};

