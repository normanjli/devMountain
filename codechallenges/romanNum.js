const romanNum = (num) =>{
    if (num>=4000){
        return `only works for numbers less than 3999`
    }
    let numArr = num.toString().split('')
    console.log(numArr)
    let specialnum=[`IV`,`IX`,`XL`,`XC`,`CD`,`CM`]
    let ans = []
    let count = 1
    for (let i = numArr.length-1; i>=0;i--){
        let digit = +numArr[i]
        let romanDigit = []
        if(count===1){
            if(digit === 4){
                romanDigit.unshift(specialnum[0])
            }else if(digit === 9){
                romanDigit.unshift(specialnum[1])
            }else{
                if(digit>5){
                    romanDigit.unshift(`V`)
                    digit -= 5
                    for(digit;digit>0;digit--){
                        romanDigit.push(`I`)
                    }
                }else{
                    for(digit;digit>0;digit--){
                        romanDigit.unshift(`I`)
                    }
                }
            }
            count++
            ans.unshift(romanDigit.join(``))
        }else if(count===2){
            if (digit===4){
                romanDigit.unshift(specialnum[2])
            }else if(digit === 9){
                romanDigit.unshift(specialnum[3])
            }else{
                if(digit>5){
                    romanDigit.unshift(`L`)
                    digit -= 5
                    for(digit;digit>0;digit--){
                        romanDigit.push(`X`)
                    }
                }else{
                    for(digit;digit>0;digit--){
                        romanDigit.push(`X`)
                    }
                }
            } 
            count++
            ans.unshift(romanDigit.join(``))   
        }else if(count===3){
            if (digit===4){
                romanDigit.unshift(specialnum[4])
            }else if(digit === 9){
                romanDigit.unshift(specialnum[5])
            }else{
                if(digit>5){
                    romanDigit.unshift(`D`)
                    digit -= 5
                    for(digit;digit>0;digit--){
                        romanDigit.push(`C`)
                    }
                }else{
                    for(digit;digit>0;digit--){
                        romanDigit.push(`C`)
                    }
                }
            } 
            count++
            ans.unshift(romanDigit.join(``))   
        }else{
            for(digit;digit>0;digit--){
                romanDigit.push(`M`)
            }
            count++
            ans.unshift(romanDigit.join(``)) 
        }
        
    }return ans.join(``)
}

console.log(romanNum(98))