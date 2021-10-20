const perfBal = (string) =>{//functioning
    let arr = string.split(``).map(e=>escape(e))
    console.log(escape(`()[]{}`))
    let open = 0
    let close = 0
    for(i of arr){
        if (i===`%28`){
            open++
        }if(i ===`%29`){
            close++
        }
    }if (open === close){
        return `Perfectly balanced`
    }else{
        return `I am inevitable`
    }
}

const perfBal = (string) =>{//not working as intended
    let opens = [`%28`,`%5B`,`%7B`]
    let closes = [`%29`,`%5D`,`%7D`]
    let arr = string.split(``).map(e=>escape(e))
    .filter(e=>{
        if(opens.includes(e)||closes.includes(e)){
            return e
        }
    })
    let firstH = arr.slice(0,Math.ceil(arr.length/2))
    let secH = arr.slice(Math.ceil(arr.length/2),arr.length)
    console.log(firstH,secH)
    if (arr.length%2!==0){
        return `I am inevitable 1 `
    }else{
        for (i in firstH){
            if (firstH[i].substr(0,2)!==secH[secH.length-1-i].substr(0,2)){
                return `I am inevitable 2`
            }else{
                return `perfectly balanced`
            }            
            }
        }

    }
console.log(perfBal(`{}(((())))`))
