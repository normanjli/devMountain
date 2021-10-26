const phoneNum = (arr)=>{
    let area = arr.splice(0,3)
    let region = arr.splice(0,3)
    area.unshift(`(`)
    area.push(')')
    region.unshift(` `)
    region.push(`-`)
    return area.concat(region,arr).join(``)
}
console.log(phoneNum([1,2,3,4,5,6,7,8,9,0]))