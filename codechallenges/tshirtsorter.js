const shirtSorter=(str)=>{
    let s = ``
    let m = ``
    let l = ``
    for (i of str){
        console.log(s,m,l)
        if (i===`s`){
            s+=`s`
        }else if(i===`m`){
            m+=`m`
        }else{
            l+=`l`
        }
    }return s+m+l
}

console.log(shirtSorter(`smsmsmsmsmlllllss`))