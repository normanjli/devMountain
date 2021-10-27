const nbYear=(population,perc,num,targ)=>{
    let count = 0
    perc /=100
    if(population<targ){
        while (population < targ){
            population=population+(population*perc)+num
            count++
       }
    }else{
        while(population>targ){
            population=population+(-(population*perc))+num
            count++
        }
    }
    return count
}

console.log(nbYear(1500, 5, -100, 1000))