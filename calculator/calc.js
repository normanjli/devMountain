const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	let tokens = input.split(`,`);
	//console.log (tokens)
	let mathSymbol = tokens[0];
	let num1 = Number(tokens[1]);
	let num2 = Number(tokens[2]);

	if (mathSymbol === `+`) {
		console.log (num1+num2);

	}else if (mathSymbol === `-`){
		console.log(num1-num2);
	
	}else if (mathSymbol === `*`){
		console.log(num1*num2);
	
	}else if (mathSymbol === `/`){
		console.log(num1/num2);

	}else if (mathSymbol === `^/`){
		console.log(num1**.5);
	
	}else{
		console.log (`you broke it, try entering input starting with operator then numerals seperated with commas`);
	}


	//console.log (num1, num2, mathSymbol)
	// This line closes the connection to the command line interface.
	reader.close()

});
