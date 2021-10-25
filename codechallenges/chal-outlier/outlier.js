const outlier = (arr) =>{
    let evens = arr.filter(e=>e%2===0)
    return evens.length>1?arr.filter(e=>e%2!==0):evens
}

console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))